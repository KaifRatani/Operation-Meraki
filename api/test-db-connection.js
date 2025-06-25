// api/test-db-connection.js
require('dotenv').config({ path: '../.env' });
const pool = require('./db/pool');

(async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('✅ Connected! DB time is:', res.rows[0].now);
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
  } finally {
    await pool.end();
  }
})();
