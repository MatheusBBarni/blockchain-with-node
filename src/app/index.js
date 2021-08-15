const express = require('express')

const { HTTP_PORT } = require('../../config')
const Blockchain = require('../blockchain')
const P2pServer = require('./p2p-server')

const app = express()
app.use(express.json())

const blockchain = new Blockchain()
const p2pServer = new P2pServer(blockchain)


app.get('/blocks', (_, res) => {
  res.json(blockchain.chain)
})

app.post('/mine', (req, res) => {
  const block = blockchain.addBlock(req.body.data)
  console.log(`New Block added: ${block.toString()}`)

  p2pServer.syncChain()

  res.redirect('/blocks')
})

app.listen(HTTP_PORT, () => {
  console.log(`Server is listening on ${HTTP_PORT}`)
})

p2pServer.listen()
