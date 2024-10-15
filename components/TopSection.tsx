// components/TopSection.tsx

import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { formatNumberWithCommas } from '../utils/formatters';
import { Moon, Sun } from 'lucide-react';

interface TopSectionProps {
  contractAddress: string;
  network: string;
  walletAddress: string | null;
  onConnectWallet: () => void;
  aavegotchis: Aavegotchi[];
  customTokenSymbol: string;
  isCustomToken: boolean;
  tokenImage: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

interface Aavegotchi {
  tokenId: string;
  name: string;
  escrowWallet: string;
  ghstBalance: string;
  customTokenBalance?: string;
  isLent: boolean;
}

const TopSection: React.FC<TopSectionProps> = ({
  contractAddress,
  network,
  walletAddress,
  onConnectWallet,
  aavegotchis,
  customTokenSymbol,
  isCustomToken,
  tokenImage,
  isDarkMode,
  toggleDarkMode,
}) => {
  const [toast, setToast] = useState({ show: false, message: '' });

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setToast({ show: true, message: 'Copied to clipboard!' });
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
        setToast({ show: true, message: 'Failed to copy' });
      });
  };

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, message: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  return (
    <div className={cn("space-y-4 w-full")}>
      <div className="relative">
        <h1 className={cn("text-2xl md:text-4xl font-heading text-text dark:text-darkText text-center")}>
          Aavegotchi Banking Services
        </h1>
        <button
          onClick={toggleDarkMode}
          className={cn(
            "absolute top-0 right-0 p-2 rounded-full bg-main dark:bg-darkMain shadow-light hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          )}
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-800" />}
        </button>
      </div>

      <div className={cn("bg-main dark:bg-darkMain p-4 border-2 sm:border-4 border-border dark:border-darkBorder shadow-light rounded")}>
        <p className="font-base text-text dark:text-darkText">Network: {network}</p>
        <p className="font-base text-text dark:text-darkText">Contract: {contractAddress}</p>
      </div>

      <div className={cn("bg-mainAccent dark:bg-darkMainAccent p-4 border-2 sm:border-4 border-border dark:border-darkBorder shadow-light rounded")}>
        {walletAddress ? (
          <p className="font-base text-text dark:text-darkText">
            Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </p>
        ) : (
          <button
            className={cn(
              "bg-main dark:bg-darkMain px-4 py-2 font-base text-text dark:text-darkText border-2 sm:border-4 border-border dark:border-darkBorder shadow-light hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all rounded"
            )}
            onClick={onConnectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>

      <div className={cn("bg-main dark:bg-darkMain p-4 border-2 sm:border-4 border-border dark:border-darkBorder shadow-light rounded")}>
        <h2 className={cn("text-xl md:text-2xl font-heading mb-4 text-text dark:text-darkText")}>Aavegotchi Tokens</h2>
        <div className="overflow-x-auto">
          <table className={cn("w-full border-collapse border-2 sm:border-4 border-border dark:border-darkBorder")}>
            <thead>
              <tr className="bg-mainAccent dark:bg-darkMainAccent">
                <th className="border-2 sm:border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText">TOKEN ID</th>
                <th className="border-2 sm:border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText">NAME</th>
                <th className="border-2 sm:border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText">ESCROW WALLET</th>
                <th className="border-2 sm:border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText">
                  <div className="flex items-center justify-center">
                    <span>
                      {isCustomToken && customTokenSymbol ? customTokenSymbol : 'GHST'} BALANCE
                    </span>
                    {tokenImage && (
                      <div className="ml-2 w-6 h-6">
                        <img
                          src={tokenImage}
                          alt={isCustomToken ? customTokenSymbol : 'GHST'}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = '/images/default-token.png';
                          }}
                        />
                      </div>
                    )}
                  </div>
                </th>
                <th className="border-2 sm:border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText">OWNERSHIP</th>
              </tr>
            </thead>
            <tbody>
              {aavegotchis.map((gotchi, index) => (
                <tr key={gotchi.tokenId} className={index % 2 === 0 ? "bg-bg dark:bg-darkBg" : "bg-main dark:bg-darkMain"}>
                  <td className="border-2 sm:border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText">{gotchi.tokenId}</td>
                  <td className="border-2 sm:border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText">
                    {gotchi.name || `Aavegotchi #${gotchi.tokenId}`}
                  </td>
                  <td className="border-2 sm:border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText">
                    {gotchi.escrowWallet.slice(0, 6)}...{gotchi.escrowWallet.slice(-4)}
                    <button
                      onClick={() => copyToClipboard(gotchi.escrowWallet)}
                      className={cn(
                        "ml-2 bg-mainAccent dark:bg-darkMainAccent px-2 py-1 font-base text-text dark:text-darkText border-2 border-border dark:border-darkBorder shadow-light hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded"
                      )}
                    >
                      Copy
                    </button>
                  </td>
                  <td className="border-2 sm:border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText">
                    {formatNumberWithCommas(
                      parseFloat(isCustomToken ? gotchi.customTokenBalance || '0' : gotchi.ghstBalance).toFixed(4)
                    )}
                  </td>
                  <td className="border-2 sm:border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText">
                    <span
                      className={cn(
                        "px-2 py-1 rounded",
                        gotchi.isLent ? "bg-mainAccent dark:bg-darkMainAccent" : "bg-main dark:bg-darkMain"
                      )}
                    >
                      {gotchi.isLent ? '🔑 Rented' : '🏠 Owned'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {toast.show && (
        <div className={cn("fixed bottom-4 right-4 bg-mainAccent dark:bg-darkMainAccent p-4 border-4 border-border dark:border-darkBorder shadow-light rounded")}>
          <p className="font-base text-text dark:text-darkText">{toast.message}</p>
        </div>
      )}
    </div>
  );
};

export default TopSection;
