// pages/_app.tsx

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MetaMaskContextProvider } from '../hooks/useMetaMask';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  // Apply or remove the 'dark' class on the <html> element based on isDarkMode state
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <MetaMaskContextProvider>
      <Component 
        {...pageProps} 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
    </MetaMaskContextProvider>
  );
}

export default MyApp;
