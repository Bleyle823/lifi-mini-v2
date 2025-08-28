"use client";

import { useEffect, useState } from "react";
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import {
  Name,
  Identity,
  Address,
  Avatar,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { Home } from "./components/DemoComponents";

// Error boundary component for wallet errors
function WalletErrorBoundary({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.error?.message?.includes('wallet') || 
          event.error?.message?.includes('sign') ||
          event.error?.message?.includes('transaction')) {
        setHasError(true);
        setErrorMessage(event.error.message);
        console.error('Wallet error caught:', event.error);
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="flex flex-col min-h-screen font-sans text-[var(--app-foreground)] mini-app-theme from-[var(--app-background)] to-[var(--app-gray)]">
        <div className="w-full max-w-md mx-auto px-4 py-3">
          <header className="flex justify-between items-center mb-3 h-11">
            <div>
              <img src="/logo_lifi_light.svg" alt="LI.FI" className="h-6 w-auto" />
            </div>
          </header>
          <main className="flex-1">
            <div className="text-center py-8">
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-medium text-red-400 mb-2">
                  Wallet Connection Error
                </h3>
                <p className="text-red-300 mb-4">
                  {errorMessage || "An error occurred while connecting to your wallet"}
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Reload App
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

export default function App() {
  const { setFrameReady } = useMiniKit();
  const [isFrameReady, setIsFrameReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        void setFrameReady();
        setIsFrameReady(true);
      } catch (error) {
        console.error("Failed to set frame ready:", error);
        // Continue anyway as this shouldn't break the app
        setIsFrameReady(true);
      }
    }, 0);
    return () => clearTimeout(t);
  }, [setFrameReady]);

  return (
    <WalletErrorBoundary>
      <div className="flex flex-col min-h-screen font-sans text-[var(--app-foreground)] mini-app-theme from-[var(--app-background)] to-[var(--app-gray)]">
        <div className="w-full max-w-md mx-auto px-4 py-3">
          <header className="flex justify-between items-center mb-3 h-11">
            <div>
              <img src="/logo_lifi_light.svg" alt="LI.FI" className="h-6 w-auto" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <Wallet className="z-10">
                  <ConnectWallet>
                    <Name className="text-inherit" />
                  </ConnectWallet>
                  <WalletDropdown>
                    <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                      <Avatar />
                      <Name />
                      <Address />
                      <EthBalance />
                    </Identity>
                    <WalletDropdownDisconnect />
                  </WalletDropdown>
                </Wallet>
              </div>
            </div>
          </header>

          <main className="flex-1">
            {isFrameReady ? (
              <Home />
            ) : (
              <div className="text-center py-8">
                <div className="animate-pulse">
                  <div className="text-[var(--app-foreground-muted)]">
                    Initializing app...
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </WalletErrorBoundary>
  );
}
