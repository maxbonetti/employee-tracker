const { Pool } = require('pg');

const pool = new Pool({
    user: 'yourUsername',
    host: 'localhost',
    database: 'db.js',
    password: 'yourPassword',
    port: 5432,
});

module.exports = pool;