// api/db/pool.js
const { Pool } = require('pg');
require('dotenv').config({ path: '../../.env' }); // loads .env from root

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;
