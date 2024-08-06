const {Pool} = require('pg');

require('dotenv').config();
const connect = process.env.DEVCONNECT

module.exports = new Pool({
    connectionString: connect,
})