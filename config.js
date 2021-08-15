const DIFFICULTY = 4
const MINE_RATE = 3000
const EC_TYPE = 'secp256k1'
const INITIAL_BALANCE = 500
const HTTP_PORT = process.env.HTTP_PORT || 3001

module.exports = {
    EC_TYPE,
    HTTP_PORT,
    MINE_RATE,
    DIFFICULTY,
    INITIAL_BALANCE,
}