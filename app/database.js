const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
    // user: process.env.PGUSER,
    // database: process.env.PGDATABASE,
    // port: process.env.PGPORT,
    // password: process.env.PGPASSWORD,
    // host: process.env.PGHOST
});

client.connect();

module.exports = client;