const express = require('express');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const router = express.Router();

const pool = new Pool({
  connectionString: 'new Client({host:"operationmeraki-server1.postgres.database.azure.com", user:"merakiAdmin", password:"root1Admin", database:"postgres", port:5432, ssl:{ca:fs.readFileSync("{ca-cert filename}")}});'
});

router.post('/', async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      'INSERT INTO login (email, password, role) VALUES ($1, $2, $3)',
      [email, hashedPassword, role]
    );
    res.json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed' });
  }
});

module.exports = router;
