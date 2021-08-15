const EC = require('elliptic').ec

const { EC_TYPE } = require('../../config')

const ecInstance = new EC(EC_TYPE)

class ChainUtil {

  static genKeyPair() {
    return ecInstance.genKeyPair()
  }

}

export default ChainUtil
