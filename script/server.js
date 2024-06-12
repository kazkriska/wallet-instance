const { ethers } = require('hardhat');
const userDataList = require('../../user-data-JSON');
const provider = ethers.provider;
const rand = require('./utils/random-in-range');

const user = (index, arr = userDataList) => {
  return arr[index];
};

// const _getBalance = async (address) => {
//   const balance = await provider.getBalance(signers[0].address);
//   console.log(balance)
//   return balance;
// };

async function main() {
  const signers = await ethers.getSigners();

  signers[rand(0, signers.length)].sendTransaction({
    to: user(rand(0, userDataList.length)).address,
    value: ethers.parseEther('0.00'),
  });
  userDataList.forEach((userData) => {
    const newUser = new ethers.Wallet(userData.privateKey, provider);
    console.log('newUser.provider: ', newUser.provider);
    return userData.address === newUser.address ? true : false;
  });

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
