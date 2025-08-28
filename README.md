# LiFi Mini — Cross‑Chain Swap & Bridge Frame

This project is a [Next.js](https://nextjs.org) application that embeds the [Li.Fi Widget](https://widget.lifi.io) to enable seamless cross‑chain swaps and bridging. It is built for Farcaster Frames using [MiniKit](https://docs.base.org/builderkits/minikit/overview) and [OnchainKit](https://www.base.org/builders/onchainkit).

– Swap and bridge assets across multiple chains with one UX
– Fully frame‑enabled with account association and notifications
– Styled with Tailwind and themeable to your brand

Important:
- Supports cross‑chain swap and bridge on Base, Celo, and Arbitrum (emphasis by design of this app)
- Featured in the ongoing Base Onchain Summer

Technologies used:
- [MiniKit](https://docs.base.org/builderkits/minikit/overview)
- [OnchainKit](https://www.base.org/builders/onchainkit)
- [Li.Fi Widget](https://widget.lifi.io)
- [Tailwind CSS](https://tailwindcss.com)
- [Next.js](https://nextjs.org/docs)

## Environment Configuration for Farcaster Integration

To ensure proper transaction signing in Farcaster, you need to configure the following environment variables:

### Required Environment Variables

1. **OnchainKit Configuration:**
   ```bash
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_onchainkit_api_key_here
   NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME=LiFi Mini
   NEXT_PUBLIC_URL=https://your-domain.com
   NEXT_PUBLIC_APP_HERO_IMAGE=https://your-domain.com/hero.png
   NEXT_PUBLIC_ICON_URL=https://your-domain.com/icon.png
   NEXT_PUBLIC_SPLASH_IMAGE=https://your-domain.com/splash.png
   NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR=#000000
   ```

2. **Farcaster Account Association (for notifications):**
   ```bash
   FARCASTER_HEADER=your_farcaster_header
   FARCASTER_PAYLOAD=your_farcaster_payload
   FARCASTER_SIGNATURE=your_farcaster_signature
   ```

3. **Redis Configuration (for background notifications):**
   ```bash
   UPSTASH_REDIS_REST_URL=your_redis_url_here
   UPSTASH_REDIS_REST_TOKEN=your_redis_token_here
   ```

### Wallet Connection Setup

The app is configured to work with Farcaster's built-in wallet connection system. The LiFi widget will automatically use the wallet connection established by the OnchainKit wallet components.

### Transaction Signing

Transactions are signed through Farcaster's native transaction signing flow. The MiniKit provider ensures that:
- Wallet connections are properly established
- Transaction prompts are displayed in the Farcaster interface
- Transaction status is properly tracked

## Getting Started

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Verify environment variables (Farcaster account association, Frame metadata, Redis): these are typically set up by `npx create-onchain --mini`.

You can regenerate the FARCASTER Account Association environment variables by running `npx create-onchain --manifest` in your project directory.

The environment variables enable the following features:

- Frame metadata - Sets up the Frame Embed that will be shown when you cast your frame
- Account association - Allows users to add your frame to their account, enables notifications
- Redis API keys - Enable Webhooks and background notifications for your application by storing users notification details



3. Start the development server:
```bash
npm run dev
```

## Features

### Cross‑Chain Swaps and Bridging
- Embedded [Li.Fi Widget](https://widget.lifi.io) for cross‑chain swap and bridge flows
- Supported networks highlighted in this app: Base, Celo, Arbitrum
- Unified, user‑friendly UX for routing, bridges, and DEX aggregation

### Frame Configuration
- `.well-known/farcaster.json` endpoint configured for Frame metadata and account association
- Frame metadata automatically added to page headers in `layout.tsx`

### Background Notifications
- Redis-backed notification system using Upstash
- Ready-to-use notification endpoints in `api/notify` and `api/webhook`
- Notification client utilities in `lib/notification-client.ts`

### Theming
- Custom theme defined in `theme.css` with OnchainKit variables
- Pixel font integration with Pixelify Sans
- Dark/light mode support through OnchainKit

### MiniKit Provider
The app is wrapped with `MiniKitProvider` in `providers.tsx`, configured with:
- OnchainKit integration
- Access to Frames context
- Sets up Wagmi Connectors
- Sets up Frame SDK listeners
- Applies Safe Area Insets

## Customization

To get started building your own frame, follow these steps:

1. Remove the DemoComponents:
   - Delete `components/DemoComponents.tsx`
   - Remove demo-related imports from `page.tsx`

2. Start building your Frame:
   - Modify `page.tsx` to create your Frame UI
   - Update theme variables in `theme.css`
   - Adjust MiniKit configuration in `providers.tsx`

3. Configure the Li.Fi Widget for your chains:
   - Ensure Base, Celo, and Arbitrum are enabled in your widget configuration (if using an allowlist) and adjust defaults as needed
   - Customize token lists, appearance, and routing preferences per your UX goals

4. Add your frame to your account:
   - Cast your frame to see it in action
   - Share your frame with others to start building your community

## Learn More

- [MiniKit Documentation](https://docs.base.org/builderkits/minikit/overview)
- [OnchainKit Documentation](https://docs.base.org/builderkits/onchainkit/getting-started)
- [Li.Fi Widget Docs](https://docs.li.fi/widget/introduction)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
