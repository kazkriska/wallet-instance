require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require('hardhat-ethernal');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  ethernal: {
    apiToken: process.env.ETHERNAL_API_TOKEN
}
};
