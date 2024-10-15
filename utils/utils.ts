// utils/utils.ts
export const formatBalance = (rawBalance: string) => {
  const balance = (parseInt(rawBalance) / 1e18).toFixed(2);
  return balance;
};

export const formatChainAsNum = (chainIdHex: string) => {
  const chainIdNum = parseInt(chainIdHex);
  return chainIdNum;
};

export const formatAddress = (addr: string) => {
  return `${addr.substring(0, 8)}...`;
};
