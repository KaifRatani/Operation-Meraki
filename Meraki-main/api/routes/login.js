const express = require('express');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const router = express.Router();

const SECRET_KEY = 'your_secret_key';

const pool = new Pool({
  connectionString: 'postgresql://merakiAdmin:root1Admin@operationmeraki-server1.postgres.database.azure.com:5432/operationmeraki-database?sslmode=require',
  ssl: { rejectUnauthorized: false }
});

// POST /api/login
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM login WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Email not found' });
    }

    const user = result.rows[0];

    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      SECRET_KEY,
      { expiresIn: '2h' }
    );

    res.json({
      message: 'Login successful',
      token,
      role: user.role
    });
  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
