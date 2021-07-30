const Blockchain = require('./blockchain')
const Block = require('./block')

describe('Blockchain class', () => {
  let bc;

  beforeEach(() => {
    bc = new Blockchain()
  })

  it ('Should start with genesis block', () => {
    expect(bc.chain[0]).toEqual(Block.genesis())
  })

  it('Should add a new block', () => {
    const data = '73YUIDY2IO1PWEHDFSIUYUIJKH'
    bc.addBlock(data)

    expect(bc.chain[bc.chain.length - 1].data).toEqual(data)
  })
})