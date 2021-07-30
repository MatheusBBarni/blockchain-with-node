const Blockchain = require('./index')
const Block = require('./block')

describe('Blockchain class', () => {
  let bc
  let secondBc

  beforeEach(() => {
    bc = new Blockchain()
    secondBc = new Blockchain()
  })

  it ('Should start with genesis block', () => {
    expect(bc.chain[0]).toEqual(Block.genesis())
  })

  it('Should add a new block', () => {
    const data = '73YUIDY2IO1PWEHDFSIUYUIJKH'
    bc.addBlock(data)

    expect(bc.chain[bc.chain.length - 1].data).toEqual(data)
  })

  it ('Should validate a valid chain', () => {
    secondBc.addBlock('1500$')

    expect(bc.isValidChain(secondBc.chain)).toBe(true)
  })

  it ('Should invalidate a chain with a corrupt genesis block', () => {
    secondBc.chain[0].data = '0$'

    expect(bc.isValidChain(secondBc.chain)).toBe(false)
  })

  it ('Should invalidate a corrupt chain', () => {
    secondBc.addBlock('2000$')
    secondBc.chain[1].data = '00$'

    expect(bc.isValidChain(secondBc.chain)).toBe(false)
  })

  it ('Should replace the chain with a valid chain', () => {
    secondBc.addBlock('450$')
    bc.replaceChain(secondBc.chain)

    expect(bc.chain).toEqual(secondBc.chain)
  })

  it ('Should not replace the chain with another chain with less or equal blocks', () => {
    bc.addBlock('320$')
    bc.replaceChain(secondBc.chain)

    expect(bc.chain).not.toEqual(secondBc.chain)
  })
})