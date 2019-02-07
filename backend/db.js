/** Database setup for jobly. */

const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql:///dmi',
});

client.connect();

module.exports = client;

