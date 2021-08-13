const Block = require('./block')
const { DIFFICULTY } = require('../config')

describe('Block class', () => {
  let data, lastBlock, block

  beforeEach(() => {
    data = 'index.html'
    lastBlock = Block.genesis()
    block = Block.mineBlock(lastBlock, data)
  })

  it('Should set the `data` to match the input', () => {
    expect(block.data).toEqual(data)
  })

  it('Should set the `lastHash` to match the hash of the last Block', () => {
    expect(block.lastHash).toEqual(lastBlock.hash)
  })

  it('Should generate a hash that matches the difficulty', () => {
    expect(block.hash.substring(0, block.difficulty)).toEqual('0'.repeat(block.difficulty))
  })

  it('Should lower the difficulty for slowing mined blocks', () => {
    expect(Block.adjustDifficulty(block, block.timestamp + 360000)).toEqual(block.difficulty - 1)
  })

  it('Should raise the difficulty for quickly mine blocks', () => {
    expect(Block.adjustDifficulty(block, block.timestamp + 1)).toEqual(block.difficulty + 1)
  })
})