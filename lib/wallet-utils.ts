/**
 * Wallet utility functions for handling connection issues and retries
 */

export interface WalletConnectionState {
  isConnected: boolean;
  isConnecting: boolean;
  hasError: boolean;
  errorMessage: string | null;
  retryCount: number;
}

export interface RetryConfig {
  maxRetries: number;
  baseDelay: number;
  maxDelay: number;
  backoffMultiplier: number;
}

/**
 * Calculate delay for retry attempts with exponential backoff
 */
export function calculateRetryDelay(
  attempt: number,
  config: Partial<RetryConfig> = {}
): number {
  const {
    baseDelay = 1000,
    maxDelay = 30000,
    backoffMultiplier = 2,
  } = config;

  const delay = baseDelay * Math.pow(backoffMultiplier, attempt);
  return Math.min(delay, maxDelay);
}

/**
 * Check if an error is related to wallet connection or signing
 */
export function isWalletError(error: any): boolean {
  if (!error) return false;
  
  const errorMessage = error.message || error.toString() || '';
  const walletKeywords = [
    'wallet',
    'sign',
    'signature',
    'transaction',
    'user rejected',
    'user denied',
    'connection',
    'network',
    'chain',
    'metamask',
    'coinbase',
    'walletconnect'
  ];
  
  return walletKeywords.some(keyword => 
    errorMessage.toLowerCase().includes(keyword.toLowerCase())
  );
}

/**
 * Format wallet address for display
 */
export function formatWalletAddress(address: string, startChars = 6, endChars = 4): string {
  if (!address || address.length < startChars + endChars) {
    return address;
  }
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
}

/**
 * Get user-friendly error message for wallet errors
 */
export function getWalletErrorMessage(error: any): string {
  if (!error) return 'An unknown error occurred';
  
  const errorMessage = error.message || error.toString() || '';
  
  if (errorMessage.includes('user rejected') || errorMessage.includes('user denied')) {
    return 'Transaction was rejected by user';
  }
  
  if (errorMessage.includes('insufficient funds')) {
    return 'Insufficient funds for transaction';
  }
  
  if (errorMessage.includes('network')) {
    return 'Network connection issue. Please check your internet connection.';
  }
  
  if (errorMessage.includes('chain')) {
    return 'Chain mismatch. Please ensure you are on the correct network.';
  }
  
  if (errorMessage.includes('wallet')) {
    return 'Wallet connection issue. Please try reconnecting your wallet.';
  }
  
  return errorMessage || 'An error occurred with your wallet';
}

/**
 * Debounce function for wallet operations
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Retry function with exponential backoff
 */
export async function retryWithBackoff<T>(
  operation: () => Promise<T>,
  config: Partial<RetryConfig> = {}
): Promise<T> {
  const {
    maxRetries = 3,
    baseDelay = 1000,
    maxDelay = 30000,
    backoffMultiplier = 2,
  } = config;

  let lastError: any;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      
      if (attempt === maxRetries) {
        throw error;
      }
      
      const delay = calculateRetryDelay(attempt, {
        baseDelay,
        maxDelay,
        backoffMultiplier,
      });
      
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw lastError;
}
