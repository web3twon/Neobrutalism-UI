// components/WithdrawalForm.tsx

import React, { useState, useEffect, ChangeEvent } from 'react';
import { ethers } from 'ethers';
import { cn } from '../lib/utils';
import { CONTRACT_ADDRESS, DIAMOND_ABI } from '../utils/constants';

export interface Aavegotchi {
  tokenId: string;
  name: string;
  isLent: boolean;
  ghstBalance: string;
  customTokenBalance?: string;
  escrowWallet: string;
}

export interface WithdrawalFormProps {
  aavegotchis: Aavegotchi[];
  onWithdraw: (tokenAddress: string, selectedGotchis: string[], amount: string) => Promise<void>;
  onCustomTokenChange: (tokenAddress: string) => Promise<void>;
  signer: ethers.Signer | null;
  onTokenSelection: (tokenOption: string) => void;
  tokenSymbol: string;
  onCustomTokenInvalid: () => void;
  tokenDecimals: number;
  isDarkMode: boolean;
  tokenOption: string;
  customTokenAddress: string;
}

const GHST_ADDRESS = '0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7';

const WithdrawalForm: React.FC<WithdrawalFormProps> = ({
  aavegotchis,
  onWithdraw,
  onCustomTokenChange,
  signer,
  onTokenSelection,
  tokenSymbol,
  onCustomTokenInvalid,
  tokenDecimals,
  isDarkMode,
  tokenOption,
  customTokenAddress,
}) => {
  const [selectedGotchis, setSelectedGotchis] = useState<string[]>([]);
  const [amount, setAmount] = useState('');
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const ownedAavegotchis = aavegotchis.filter((gotchi) => !gotchi.isLent);

  useEffect(() => {
    if (selectedGotchis.length === 0 && ownedAavegotchis.length > 0) {
      setSelectedGotchis(ownedAavegotchis.map((gotchi) => gotchi.tokenId));
    }
  }, [ownedAavegotchis, selectedGotchis]);

  const handleGotchiSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === 'all') {
      setSelectedGotchis(ownedAavegotchis.map((gotchi) => gotchi.tokenId));
    } else {
      setSelectedGotchis([value]);
    }
    setAmount('');
  };

  const handleTokenOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newTokenOption = event.target.value;
    onTokenSelection(newTokenOption);
    setAmount('');
  };

  const handleCustomTokenAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    const address = event.target.value;
    if (ethers.isAddress(address)) {
      onCustomTokenChange(address);
    } else {
      onCustomTokenInvalid();
    }
    setAmount('');
  };

  const handleMaxAmount = () => {
    let totalBalance = BigInt(0);

    const selectedGotchiData = ownedAavegotchis.filter((gotchi) => selectedGotchis.includes(gotchi.tokenId));

    totalBalance = selectedGotchiData.reduce((sum, gotchi) => {
      const balance = tokenOption === 'GHST' ? gotchi.ghstBalance : gotchi.customTokenBalance || '0';
      return sum + ethers.parseUnits(balance, tokenDecimals);
    }, BigInt(0));

    const formattedBalance = ethers.formatUnits(totalBalance, tokenDecimals);
    setAmount(formattedBalance);
    console.log(`Max amount set: ${formattedBalance} for ${selectedGotchis.length} Aavegotchi(s)`);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!signer) {
      console.error('Signer not initialized');
      return;
    }

    setIsWithdrawing(true);
    setErrorMessage(null);

    try {
      const tokenAddress = tokenOption === 'GHST' ? GHST_ADDRESS : customTokenAddress;
      const contract = new ethers.Contract(CONTRACT_ADDRESS, DIAMOND_ABI, signer);
      const userAddress = await signer.getAddress();

      const selectedGotchiData = ownedAavegotchis.filter((gotchi) => selectedGotchis.includes(gotchi.tokenId));
      const totalAmount = ethers.parseUnits(amount, tokenDecimals);
      const count = selectedGotchiData.length;
      if (count === 0) {
        throw new Error('No Aavegotchis selected');
      }

      const totalAvailableBalance = selectedGotchiData.reduce((sum, gotchi) => {
        const balanceStr = tokenOption === 'GHST' ? gotchi.ghstBalance : gotchi.customTokenBalance || '0';
        const gotchiBalance = ethers.parseUnits(balanceStr, tokenDecimals);
        return sum + gotchiBalance;
      }, BigInt(0));

      if (totalAmount > totalAvailableBalance) {
        alert('Not enough balance in selected Aavegotchis to withdraw the total amount requested.');
        return;
      }

      let withdrawals: { tokenId: bigint; amount: bigint }[] = [];

      if (totalAmount === totalAvailableBalance) {
        withdrawals = selectedGotchiData.map((gotchi) => {
          const balanceStr = tokenOption === 'GHST' ? gotchi.ghstBalance : gotchi.customTokenBalance || '0';
          const gotchiBalance = ethers.parseUnits(balanceStr, tokenDecimals);
          return {
            tokenId: BigInt(gotchi.tokenId),
            amount: gotchiBalance,
          };
        });
      } else {
        const amountPerGotchi = totalAmount / BigInt(count);
        let remainder = totalAmount % BigInt(count);

        withdrawals = selectedGotchiData.map((gotchi) => {
          let withdrawAmount = amountPerGotchi;
          if (remainder > BigInt(0)) {
            withdrawAmount += BigInt(1);
            remainder -= BigInt(1);
          }
          const balanceStr = tokenOption === 'GHST' ? gotchi.ghstBalance : gotchi.customTokenBalance || '0';
          const gotchiBalance = ethers.parseUnits(balanceStr, tokenDecimals);
          withdrawAmount = withdrawAmount < gotchiBalance ? withdrawAmount : gotchiBalance;
          return {
            tokenId: BigInt(gotchi.tokenId),
            amount: withdrawAmount,
          };
        });
      }

      const totalWithdrawAmount = withdrawals.reduce((sum, w) => sum + w.amount, BigInt(0));

      if (totalWithdrawAmount < totalAmount) {
        alert('Not enough balance in selected Aavegotchis to withdraw the total amount requested.');
        return;
      }

      console.log('Attempting batch withdrawal:');
      withdrawals.forEach((w) =>
        console.log(`Aavegotchi ${w.tokenId}: ${ethers.formatUnits(w.amount, tokenDecimals)}`)
      );

      await contract.batchTransferEscrow(
        withdrawals.map((w) => w.tokenId),
        withdrawals.map(() => tokenAddress),
        withdrawals.map(() => userAddress),
        withdrawals.map((w) => w.amount)
      );

      setAmount('');
      await onWithdraw(tokenAddress, selectedGotchis, amount);
    } catch (error) {
      console.error('Error during withdrawal:', error);
      if (error instanceof Error) {
        console.log('Error message:', error.message);
        setErrorMessage('Transaction was cancelled or failed. Please try again.');
      } else {
        setErrorMessage('An unknown error occurred during withdrawal. Please try again.');
      }
    } finally {
      setIsWithdrawing(false);
    }
  };

  return (
    <div className={cn("space-y-4")}>
      <h2 className={cn("text-2xl font-heading text-text dark:text-darkText")}>Withdraw</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={cn("bg-main dark:bg-darkMain p-4 border-4 border-border dark:border-darkBorder shadow-light rounded")}>
          <label className="block font-base text-text dark:text-darkText mb-2">Select Aavegotchi(s):</label>
          <select
            value={selectedGotchis.length > 1 ? 'all' : selectedGotchis[0] || 'all'}
            onChange={handleGotchiSelection}
            className={cn(
              "w-full p-2 font-base text-text dark:text-darkText border-4 border-border dark:border-darkBorder bg-bg dark:bg-darkBg rounded"
            )}
          >
            <option value="all">All Owned Aavegotchi</option>
            {ownedAavegotchis.map((gotchi) => (
              <option key={gotchi.tokenId} value={gotchi.tokenId}>
                {gotchi.name || `Aavegotchi #${gotchi.tokenId}`}
              </option>
            ))}
          </select>
        </div>

        <div className={cn("bg-main dark:bg-darkMain p-4 border-4 border-border dark:border-darkBorder shadow-light rounded")}>
          <label className="block font-base text-text dark:text-darkText mb-2">Token:</label>
          <select
            value={tokenOption}
            onChange={handleTokenOptionChange}
            className={cn(
              "w-full p-2 font-base text-text dark:text-darkText border-4 border-border dark:border-darkBorder bg-bg dark:bg-darkBg rounded"
            )}
          >
            <option value="GHST">GHST</option>
            <option value="custom">Add your own token</option>
          </select>
        </div>

        {tokenOption === 'custom' && (
          <div className={cn("bg-main dark:bg-darkMain p-4 border-4 border-border dark:border-darkBorder shadow-light rounded")}>
            <label className="block font-base text-text dark:text-darkText mb-2">Custom Token Address:</label>
            <input
              type="text"
              value={customTokenAddress}
              onChange={handleCustomTokenAddressChange}
              placeholder="Enter token address"
              className={cn(
                "w-full p-2 font-base text-text dark:text-darkText border-4 border-border dark:border-darkBorder bg-bg dark:bg-darkBg rounded"
              )}
            />
          </div>
        )}

        <div className={cn("bg-main dark:bg-darkMain p-4 border-4 border-border dark:border-darkBorder shadow-light rounded")}>
          <label className="block font-base text-text dark:text-darkText mb-2">Amount:</label>
          <div className="flex space-x-2">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
              step="0.0001"
              required
              className={cn(
                "flex-grow p-2 font-base text-text dark:text-darkText border-4 border-border dark:border-darkBorder bg-bg dark:bg-darkBg rounded"
              )}
            />
            <button
              type="button"
              onClick={handleMaxAmount}
              className={cn(
                "bg-mainAccent dark:bg-darkMainAccent px-4 py-2 font-base text-text dark:text-darkText border-4 border-border dark:border-darkBorder shadow-light hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all rounded"
              )}
            >
              Max
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isWithdrawing}
          className={cn(
            "w-full bg-mainAccent dark:bg-darkMainAccent px-4 py-2 font-base text-text dark:text-darkText border-4 border-border dark:border-darkBorder shadow-light hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all rounded",
            {
              "opacity-50 cursor-not-allowed": isWithdrawing
            }
          )}
        >
          {isWithdrawing ? 'Withdrawing...' : 'Withdraw'}
        </button>
      </form>

      {errorMessage && (
        <div className={cn("bg-mainAccent dark:bg-darkMainAccent p-4 border-4 border-border dark:border-darkBorder shadow-light rounded")}>
          <p className="font-base text-text dark:text-darkText">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default WithdrawalForm;
