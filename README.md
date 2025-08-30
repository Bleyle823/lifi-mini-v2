

# LiFi Mini 🌉

A powerful Farcaster mini app built for **Onchain Summer** that brings seamless cross-chain swapping, bridging, and token transfers directly into your social experience on Base.
**Project Link Onchain Summer Awards :** https://devfolio.co/projects/lifi-mini-aa50

[![Built for Onchain Summer](https://img.shields.io/badge/Built%20for-Onchain%20Summer-blue)](https://onchainsummer.xyz/)
[![Farcaster](https://img.shields.io/badge/Farcaster-Mini%20App-purple)](https://farcaster.xyz/)
[![Base](https://img.shields.io/badge/Base-Powered-blue)](https://base.org/)
[![LI.FI](https://img.shields.io/badge/Powered%20by-LI.FI-green)](https://li.fi/)

## 🚀 Features

- **🔄 Cross-Chain Swapping**: Swap tokens across multiple blockchains including Base, Celo, and Arbitrum
- **🌉 Bridge Assets**: Seamlessly bridge tokens between different networks
- **💸 Token Transfers**: Send tokens to any address across supported chains
- **⚡ Route Optimization**: Choose from multiple routes - cheapest, fastest, or custom preferences
- **📱 Social-First**: Built natively for Farcaster with in-app notifications
- **🔐 Secure**: Leverages LI.FI's battle-tested infrastructure and smart contracts

## 🎯 The Problem We Solve

Cross-chain DeFi operations typically require users to:
- Leave their social context to use external dApps
- Navigate complex UIs across multiple platforms
- Manually find optimal routes for swaps and bridges
- Deal with security risks from unfamiliar applications

**LiFi Mini eliminates these friction points** by bringing cross-chain functionality directly into Farcaster conversations, enabling users to execute complex DeFi operations without ever leaving their social feed.

## 🛠️ How It Works

LiFi Mini leverages the power of [LI.FI's aggregation protocol](https://li.fi/) to provide:

1. **Smart Route Discovery**: Find the most optimal routes for conducting cross-chain and on-chain swaps and bridges
2. **Multi-Chain Support**: Bridge & DEX aggregation protocol and a smart routing API
3. **Optimal Execution**: Leveraging strong partnerships with bridges, decentralized exchanges (DEXs), and DEX aggregators to ensure optimal quotes

## 🏗️ Built With

- **[Farcaster Frames](https://docs.farcaster.xyz/developers/frames/spec)** - Native social integration
- **[LI.FI SDK](https://docs.li.fi/integrate-li.fi-sdk/li.fi-sdk-overview)** - Cross-chain infrastructure
- **[Base](https://base.org/)** - Primary blockchain network
- **[OnchainKit](https://onchainkit.xyz/)** - Base development toolkit
- **[MiniKit](https://docs.farcaster.xyz/developers/minikit/overview)** - Farcaster mini app framework
- **[Upstash Redis](https://upstash.com/)** - Real-time notifications

## 🚀 Getting Started

### Prerequisites

```bash
node.js >= 18
npm or yarn
```

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/lifi-mini.git
cd lifi-mini

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

```env
# Farcaster Configuration
FARCASTER_DEVELOPER_MNEMONIC=your_mnemonic_here
FARCASTER_DEVELOPER_FID=your_fid_here

# LI.FI Configuration
LIFI_API_KEY=your_lifi_api_key

# Base Network Configuration
BASE_RPC_URL=https://mainnet.base.org
PRIVATE_KEY=your_private_key

# Upstash Redis (for notifications)
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Deploy Frame manifest
npx create-onchain --manifest
```

## 📋 Usage

### Basic Swap
1. Open LiFi Mini within any Farcaster conversation
2. Select source and destination tokens
3. Choose your preferred route (cheapest/fastest)
4. Confirm transaction
5. Receive real-time notifications when complete

### Cross-Chain Bridge
1. Select source chain and token
2. Choose destination chain
3. Enter recipient address (optional - defaults to your address)
4. Review route options and fees
5. Execute bridge transaction

### Route Selection
- **💰 Cheapest**: Minimize fees and gas costs
- **⚡ Fastest**: Optimize for transaction speed
- **⚖️ Balanced**: Best combination of speed and cost

## 🔗 Smart Contracts

**LI.FI Diamond Contract**: [`0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE`](https://basescan.org/address/0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE)

This is the core LI.FI Diamond entryway contract that powers all cross-chain operations, providing security and efficiency for the mini app's functionality.

## 🌐 Supported Networks

- **Base** (Primary)
- **Arbitrum**
- **Celo**
- **Ethereum**
- **Optimism**
- **Polygon**
- And many more through LI.FI's extensive network support

## 📚 Documentation & Resources

- **[LI.FI Documentation](https://docs.li.fi/)** - Complete API and SDK documentation
- **[LI.FI API Reference](https://docs.li.fi/li.fi-api/li.fi-api)** - REST API endpoints
- **[LI.FI SDK Guide](https://docs.li.fi/integrate-li.fi-sdk/li.fi-sdk-overview)** - Integration guide
- **[Farcaster Frames Docs](https://docs.farcaster.xyz/developers/frames/spec)** - Frame development
- **[OnchainKit](https://onchainkit.xyz/)** - Base development tools
- **[Project Devfolio](https://devfolio.co/projects/lifi-mini-aa50)** - Detailed project overview


## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[LI.FI Team](https://li.fi/)** for providing the robust cross-chain infrastructure
- **[Base](https://base.org/)** for hosting Onchain Summer and providing excellent L2 infrastructure
- **[Farcaster](https://farcaster.xyz/)** for creating the social protocol that makes this possible
- **Onchain Summer** community for the inspiration and support

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/your-username/lifi-mini/issues)
- **Documentation**: [LI.FI Docs](https://docs.li.fi/)
- **Community**: [Farcaster @your-username](https://warpcast.com/your-username)

---

**Built with ❤️ for Onchain Summer 2025**

*Making cross-chain DeFi social, seamless, and accessible to everyone.*



