/** Database setup for jobly. */

const { Client } = require('pg');

const client = new Client({
  connectionString: strings
});

client.connect();


module.exports = client;
