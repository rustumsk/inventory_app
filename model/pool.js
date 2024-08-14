const {Pool} = require('pg');

require('dotenv').config();
const connect = process.env.PRODCONNECT

module.exports = new Pool({
    connectionString: connect,
})