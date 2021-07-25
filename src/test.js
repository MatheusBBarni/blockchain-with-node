const Block = require('./block')

const testBlock = new Block('7652', '456asd464886da68da4a', '48asdads6ds486asd4a5186', '200')

console.log(testBlock.toString())
console.log(Block.genesis().toString())

const firstBlock = Block.mineBlock(Block.genesis(), 'R$ 500')

console.log(firstBlock.toString())
