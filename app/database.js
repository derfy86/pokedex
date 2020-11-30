const { Client } = require('pg');

const client = new Client({
    
    user: 'pokedex'
});

client.connect();

module.exports = client;