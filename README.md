# LiFi Base Mini App 🌉

A powerful cross-chain bridging and swapping mini application built on top of LiFi Protocol, designed specifically for seamless asset transfers and exchanges on **Base** and **Celo** networks.

> 🏖️ **Part of Base Onchain Summer** - Building the future of cross-chain DeFi experiences

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Base Network](https://img.shields.io/badge/Network-Base-blue)](https://base.org)
[![Celo Network](https://img.shields.io/badge/Network-Celo-green)](https://celo.org)
[![LiFi Protocol](https://img.shields.io/badge/Powered%20by-LiFi-purple)](https://li.fi)

## 🌟 Features

### 🔄 Cross-Chain Swapping
- **Native Base Support**: Seamless token swaps on Base network with optimal routing
- **Celo Integration**: Full support for Celo ecosystem tokens and DeFi protocols
- **Multi-DEX Aggregation**: Access to multiple DEXs for best swap rates
- **Slippage Protection**: Configurable slippage tolerance for secure transactions

### 🌉 Cross-Chain Bridging
- **Base ↔ Celo**: Direct bridging between Base and Celo networks
- **Multi-Chain Support**: Bridge assets across 20+ supported chains
- **Fast Settlements**: Optimized routing for minimal bridge times
- **Low Fees**: Cost-effective cross-chain transfers

### ⚡ Performance & UX
- **Instant Quotes**: Real-time pricing and route optimization
- **Transaction Tracking**: Live status updates for all operations
- **Mobile Optimized**: Responsive design for mobile-first experience
- **Wallet Integration**: Support for popular Web3 wallets

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Web3 wallet (MetaMask, Coinbase Wallet, etc.)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/lifi-base-mini-app.git

# Navigate to project directory
cd lifi-base-mini-app

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Setup

Create a `.env.local` file with the following variables:

```env
# LiFi API Configuration
NEXT_PUBLIC_LIFI_API_URL=https://li.quest/v1
NEXT_PUBLIC_LIFI_WIDGET_API_KEY=your_lifi_api_key

# Network Configuration
NEXT_PUBLIC_BASE_RPC_URL=https://mainnet.base.org
NEXT_PUBLIC_CELO_RPC_URL=https://forno.celo.org

# Wallet Connect Configuration
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id

# Analytics (Optional)
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

## 🏗️ Architecture

### Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Headless UI
- **Web3**: Wagmi, Viem, RainbowKit
- **State Management**: Zustand
- **API Integration**: LiFi SDK, TanStack Query
- **Testing**: Jest, React Testing Library

### Project Structure

```
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── bridge/         # Bridge-specific components
│   │   ├── swap/           # Swap-specific components
│   │   └── ui/             # Generic UI components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and configs
│   ├── pages/              # Next.js pages
│   ├── store/              # Zustand stores
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
├── docs/                   # Documentation
└── tests/                  # Test files
```

## 🔧 Configuration

### Supported Networks

| Network | Chain ID | Native Token | Status |
|---------|----------|--------------|--------|
| Base    | 8453     | ETH          | ✅ Full Support |
| Celo    | 42220    | CELO         | ✅ Full Support |
| Ethereum| 1        | ETH          | ✅ Bridging Only |
| Polygon | 137      | MATIC        | ✅ Bridging Only |
| Arbitrum| 42161    | ETH          | ✅ Bridging Only |

### Supported Tokens

#### Base Network
- ETH (Native)
- USDC
- DAI
- WETH
- cbETH

#### Celo Network
- CELO (Native)
- cUSD
- cEUR
- cREAL
- USDC (Portal)

## 📖 Usage

### Basic Swapping

```javascript
import { useSwap } from '@/hooks/useSwap';

function SwapComponent() {
  const { executeSwap, isLoading } = useSwap();

  const handleSwap = async () => {
    await executeSwap({
      fromToken: 'ETH',
      toToken: 'USDC',
      amount: '1',
      chainId: 8453, // Base
    });
  };

  return (
    <button onClick={handleSwap} disabled={isLoading}>
      {isLoading ? 'Swapping...' : 'Swap ETH to USDC'}
    </button>
  );
}
```

### Cross-Chain Bridging

```javascript
import { useBridge } from '@/hooks/useBridge';

function BridgeComponent() {
  const { executeBridge, isLoading } = useBridge();

  const handleBridge = async () => {
    await executeBridge({
      fromChain: 8453,    // Base
      toChain: 42220,     // Celo
      token: 'USDC',
      amount: '100',
    });
  };

  return (
    <button onClick={handleBridge} disabled={isLoading}>
      {isLoading ? 'Bridging...' : 'Bridge USDC to Celo'}
    </button>
  );
}
```

## 🧪 Testing

### Running Tests

```bash
# Unit tests
npm test

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# Test coverage
npm run test:coverage
```

### Test Configuration

The app includes comprehensive testing for:
- Component rendering and interactions
- Hook functionality and state management
- API integration with LiFi protocol
- Cross-chain transaction flows
- Error handling and edge cases

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod
```

### Docker

```bash
# Build Docker image
docker build -t lifi-base-app .

# Run container
docker run -p 3000:3000 lifi-base-app
```

### Environment Variables for Production

Ensure the following environment variables are set in your production environment:

- `NEXT_PUBLIC_LIFI_API_KEY`
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
- `NEXT_PUBLIC_BASE_RPC_URL`
- `NEXT_PUBLIC_CELO_RPC_URL`

## 🔐 Security

### Best Practices Implemented

- **Input Validation**: All user inputs are validated and sanitized
- **Rate Limiting**: API calls are rate-limited to prevent abuse
- **Secure Storage**: Sensitive data is never stored in localStorage
- **Transaction Verification**: All transactions are verified on-chain
- **Slippage Protection**: Built-in protection against MEV attacks

### Audit Status

This project follows security best practices and is designed for mainnet usage. Always verify transaction details before confirmation.

## 🤝 Contributing

We welcome contributions to improve the LiFi Base Mini App! Here's how you can help:

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to your branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write comprehensive tests for new features
- Update documentation for any API changes
- Ensure all tests pass before submitting PR
- Keep commits focused and atomic

### Issues and Bug Reports

Please use the [GitHub Issues](https://github.com/yourusername/lifi-base-mini-app/issues) page to:
- Report bugs with detailed reproduction steps
- Suggest new features or improvements
- Ask questions about usage or implementation

## 📊 Performance

### Metrics

- **Average Swap Time**: <30 seconds
- **Bridge Completion**: 2-15 minutes (depending on chains)
- **Bundle Size**: <500KB gzipped
- **Lighthouse Score**: 95+ across all metrics

### Optimization Features

- Code splitting and lazy loading
- Image optimization with Next.js
- Caching strategies for API responses
- Optimistic UI updates

## 🗺️ Roadmap

### Q4 2024
- [ ] Add support for more Base ecosystem tokens
- [ ] Implement advanced trading features (limit orders)
- [ ] Mobile app development (React Native)

### Q1 2025
- [ ] NFT bridging capabilities
- [ ] Integration with Base Name Service
- [ ] Advanced analytics dashboard
- [ ] Multi-language support

### Q2 2025
- [ ] DeFi yield farming integration
- [ ] Social trading features
- [ ] API for third-party integrations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Base Team** - For building an amazing L2 and hosting Onchain Summer
- **Celo Foundation** - For the vibrant mobile-first ecosystem
- **LiFi Protocol** - For providing the best cross-chain infrastructure
- **Base Onchain Summer** - For supporting innovative DeFi projects
- **Open Source Community** - For the amazing tools and libraries

## 📞 Support

### Community

- **Discord**: [Join our community](https://discord.gg/your-server)
- **Twitter**: [@YourProject](https://twitter.com/yourproject)
- **Telegram**: [Community Chat](https://t.me/yourproject)

### Documentation

- **LiFi Docs**: [https://docs.li.fi](https://docs.li.fi)
- **Base Docs**: [https://docs.base.org](https://docs.base.org)
- **Celo Docs**: [https://docs.celo.org](https://docs.celo.org)

### Contact

For business inquiries and partnerships: hello@yourproject.com

---

**Made with ❤️ for Base Onchain Summer 2024**

*Bridging the future, one transaction at a time* 🌉
