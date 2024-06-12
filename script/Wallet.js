
class Wallet {
  constructor(walletInstance) {
    this._wallet = walletInstance;
    this._address = walletInstance.address;
    this._balance = walletInstance.getBalance(); //!Wrong by AI
  }
  get address() {
    return this._address;
  }
  get balance() {
    this.syncBalance()
    return this._balance;
  }
  get address() {
    return this._address;
  }
  async sendTo(address, amount) {
    this._wallet.sendTransaction({
      to: address,
      value: ethers.parseEther(amount.toString()),
    });
    return this;
  }
  async burn(amount) {
    this._wallet.sendTransaction({
      to: ethers.constants.AddressZero,
      value: ethers.parseEther(amount.toString()),
    });
    return this;
  }
  async syncBalance() {

  }
}



//!
// await provider
// .getBalance(user3_wallet)
// .then((balance) =>
//   console.log(parseFloat(ethers.formatEther(balance)).toFixed(2))
// );