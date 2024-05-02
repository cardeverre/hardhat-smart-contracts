import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-verify';
import '@nomicfoundation/hardhat-toolbox';

require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.24',
  }, 
  networks: { 
    'sepolia': {
      url: process.env.SEPOLIA_API,
      accounts: [process.env.WALLET_KEY as string]
    },
    hardhat: {
      forking: {
        url: process.env.SEPOLIA_API as string,
      }
    }
  } 
};

export default config;
