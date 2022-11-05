require("@nomicfoundation/hardhat-toolbox");
require("./tasks/blocknumber")
require("@nomiclabs/hardhat-etherscan")
require("hardhat/register")
require("hardhat-gas-reporter")
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"hardhat",
  networks:{
    goerli: {
      url:"https://eth-goerli.g.alchemy.com/v2/WBmjHUaQii1vXvbZOqGRCQtRKBKsza11",
      accounts:["0x4cbddff874d227a2371668b52ef51a487767bc3428dbba8ef204a0952c2ced90"],
      chainId:5
    }
  },
  solidity: "0.8.17",
  etherscan:{
    apiKey:"H4G7M34VQEX9RBU5MT3X3IJWZUETFC86YV"
  },
  gasReporter:{
    enabled:true
  }
};
