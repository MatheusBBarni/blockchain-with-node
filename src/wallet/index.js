const ChainUtil = require('../chain-util')
const { INITIAL_BALANCE } = require('../../config')

class Wallet {

  constructor() {
    this.balance = INITIAL_BALANCE
    this.keyPair = ChainUtil.genKeyPair()
    this.publicKey = this.keyPair.getPublic().encode('hex')
  }

  toString() {
    return `Wallet ->
      balance = ${this.balance}
      keyPair = ${this.keyPair}
      publicKey = ${this.publicKey}
    `
  }

}

export default Wallet