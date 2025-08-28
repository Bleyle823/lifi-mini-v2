# LI.FI Mini App Configuration Guide

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# OnchainKit Configuration
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_onchainkit_api_key_here
NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME=LI.FI Mini App
NEXT_PUBLIC_ICON_URL=/icon.png

# WalletConnect Configuration (optional)
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id_here
```

## Fixing Signing Issues

The app has been updated with the following improvements to resolve signing issues in Farcaster mini apps:

### 1. Enhanced Provider Configuration
- Added fallback values for missing environment variables
- Improved QueryClient configuration with retry logic
- Better error handling for wallet connections

### 2. Wallet Connection Management
- Custom hook for wallet connection state management
- Auto-reconnection logic for mini apps
- Error recovery and retry mechanisms

### 3. LiFi Widget Optimization
- Simplified configuration to use only valid options
- Connection status indicators
- Better error handling for failed transactions

## Common Signing Issues and Solutions

### Issue: Signing Process Gets Stuck
**Solution**: The app now includes auto-reconnection logic and better error handling. If signing fails, the app will automatically attempt to reconnect.

### Issue: Wallet Connection Fails
**Solution**: Check that your environment variables are properly set, especially `NEXT_PUBLIC_ONCHAINKIT_API_KEY`.

### Issue: Transactions Fail to Execute
**Solution**: The app now includes better transaction error handling and will show clear error messages when transactions fail.

## Testing the Fixes

1. Ensure all environment variables are set
2. Restart your development server
3. Test wallet connection in the Farcaster mini app
4. Try executing a swap transaction
5. Monitor the console for any error messages

## Additional Troubleshooting

If you continue to experience issues:

1. Check the browser console for error messages
2. Verify your OnchainKit API key is valid
3. Ensure you're testing in the correct Farcaster environment
4. Check that your wallet supports the required chains (Base, Celo, Arbitrum)

## Support

For additional support with LI.FI integration, refer to the [LI.FI documentation](https://docs.li.fi/).
