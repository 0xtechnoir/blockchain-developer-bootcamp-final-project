const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const dotenv = require("dotenv");

dotenv.config();
const mnemonic = process.env.MNEMONIC;
const infura_url = process.env.INFURA_URL;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // match any network
      websockets: true,
    },
    rinkeby: {
      // provider: () => new HDWalletProvider(mnemonic, process.env.INFURA_URL),
      provider: () => new HDWalletProvider(MNEMONIC, infura_url),
      network_id: 4,
      gas: 5500000,
      confirmations: 0, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",
    },
  },
};