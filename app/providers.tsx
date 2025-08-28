"use client";

import { type ReactNode, useState } from "react";
import { base, celo, arbitrum } from "wagmi/chains";
import { MiniKitProvider } from "@coinbase/onchainkit/minikit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        staleTime: 5 * 60 * 1000, // 5 minutes
      },
    },
  }));

  // Fallback values for missing environment variables
  const apiKey = process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || "demo-key";
  const projectName = process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME || "LI.FI Mini App";
  const iconUrl = process.env.NEXT_PUBLIC_ICON_URL || "/icon.png";

  return (
    <QueryClientProvider client={queryClient}>
      <MiniKitProvider
        apiKey={apiKey}
        chain={base}
        config={{
          appearance: {
            mode: "auto",
            theme: "mini-app-theme",
            name: projectName,
            logo: iconUrl,
          },
        }}
      >
        {props.children}
      </MiniKitProvider>
    </QueryClientProvider>
  );
}
