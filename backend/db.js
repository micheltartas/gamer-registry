const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'gamer_registry',
    password: '1234',
    port: 5432,
});

module.exports = pool;