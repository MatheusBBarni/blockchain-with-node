const Block = require('./block')

describe('Block class', () => {
  let data, lastBlock, block

  beforeEach(() => {
    data = 'index.html'
    lastBlock = Block.genesis()
    block = Block.mineBlock(lastBlock, data)
  })

  it ('Should set the `data` to match the input', () => {
    expect(block.data).toEqual(data)
  })

  it ('Should set the `lastHash` to match the hash of the last Block', () => {
    expect(block.lastHash).toEqual(lastBlock.hash)
  })
})