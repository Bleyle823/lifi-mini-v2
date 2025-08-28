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
