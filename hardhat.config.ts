import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import '@openzeppelin/hardhat-upgrades';
import "@nomiclabs/hardhat-etherscan";

import "dotenv/config";

import "./tasks/deployUpgradeable";
import "./tasks/upgrade";
import "./tasks/getUpgradeDetails";

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000
          }
        }
      },
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.6.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  networks: {
    harmony: {
      url: process.env.RPC_URL,
      chainId: 1666600000,
      accounts: [process.env.PRIVATE_KEY_2]
    },
    harmonyTest: {
      url: 'https://api.s0.b.hmny.io',
      chainId: 1666700000,
      accounts: [process.env.PRIVATE_KEY_2]
    },
    optimisticEthereum: {
      url: 'https://mainnet.optimism.io',
      chainId: 10,
      accounts: [process.env.PRIVATE_KEY_2]
    },
    polygon: {
      url: 'https://polygon-mainnet.public.blastapi.io',
      chainId: 137,
      accounts: [process.env.PRIVATE_KEY_2]
    },
    arbitrumOne: {
      url: 'https://arb1.arbitrum.io/rpc',
      chainId: 42161,
      accounts: [process.env.PRIVATE_KEY_2]
    },
    opera: {
      url: 'https://fantom-mainnet.public.blastapi.io',
      chainId: 250,
      accounts: [process.env.PRIVATE_KEY_2]
    },
    avalanche: {
      url: process.env.AVALANCHE_RPC || 'https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc',
      chainId: 43114,
      accounts: [process.env.PRIVATE_KEY_2]
    },
    cronos: {
      url: 'https://evm.cronos.org',
      chainId: 25,
      accounts: [process.env.PRIVATE_KEY_2]
    },
    boba: {
      url: 'https://mainnet.boba.network',
      chainId: 288,
      accounts: [process.env.PRIVATE_KEY_2]
    }
  },
  etherscan: {
    apiKey: {
      harmony: 'not needed',
      harmonyTest: 'not needed',
      optimisticEthereum: process.env.OPTIMISTIC_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY,
      arbitrumOne: process.env.ARBISCAN_API_KEY,
      opera: process.env.FTMSCAN_API_KEY,
      avalanche: process.env.SNOWTRACE_API_KEY,
      cronos: process.env.CRONOSCAN_API_KEY,
      boba: process.env.BOBASCAN_API_KEY
    },
    customChains: [
      {
        network: "cronos",
        chainId: 25,
        urls: {
          apiURL: "https://api.cronoscan.com/api",
          browserURL: "https://cronoscan.com/",
        },
      },
      {
        network: "boba",
        chainId: 43288,
        urls: {
          apiURL: "https://blockexplorer.avax.boba.network/api",
          browserURL: "https://blockexplorer.avax.boba.network",
        },
      }
    ]
  }
};
