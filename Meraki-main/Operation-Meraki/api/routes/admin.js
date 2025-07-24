const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const session = require('express-session');

const pool = new Pool({
  connectionString: 'postgresql://merakiAdmin:root1Admin@operationmeraki-server1.postgres.database.azure.com:5432/operationmeraki-database?sslmode=require',
  ssl: { rejectUnauthorized: false }
});

// Session config (should be in your main server.js)
router.use(session({
  secret: 'admin_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // set to true with HTTPS
}));

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM login WHERE email = $1 AND role = $2', [email, 'admin']);
    if (result.rows.length === 0) {
      return res.status(401).json({ success: false, message: 'Admin not found.' });
    }

    const user = result.rows[0];
    const match = password === user.password || await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(403).json({ success: false, message: 'Invalid password.' });
    }

    req.session.admin = { id: user.id, email: user.email };
    res.json({ success: true });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
