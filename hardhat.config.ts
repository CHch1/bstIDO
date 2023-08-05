import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.17',
  },
  networks: {
    // for mainnet
    'base-mainnet': {
      url: 'https://mainnet.base.org',
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
    // for testnet
    'base-goerli': {
      url: 'https://goerli.base.org',
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
    // for local dev environment
    'base-local': {
      url: 'http://localhost:8545',
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
    'goerli': {
      url: 'https://goerli.infura.io/v3/ebf5220e6ef2475ab17b352560f77986',
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
    'bsc-test': {
      url: 'https://data-seed-prebsc-1-s3.binance.org:8545',
      accounts: [process.env.WALLET_KEY as string],
      // gasPrice: 1000000000,
    },
  },
  defaultNetwork: 'hardhat',
  // Hardhat expects etherscan here, even if you're using Blockscout.
  etherscan: {
    apiKey: {
    "base-goerli": process.env.BLOCKSCOUT_KEY as string,
    "bsc-test": process.env.BSCSCAN_KEY as string,
      goerli: process.env.ETHERSCAN_KEY as string
    },
    customChains: [
      {
        network: "base-goerli",
        chainId: 84531,
        urls: {
        apiURL: "https://base-goerli.blockscout.com/api",
        browserURL: "https://base-goerli.blockscout.com"
        }
      },
      {
        network: "bsc-test",
        chainId: 97,
        urls: {
        apiURL: "https://api-testnet.bscscan.com/api",
        browserURL: "https://testnet.bscscan.com"
        }
      },
    ]
  },
};

export default config;