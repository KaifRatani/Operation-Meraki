const express = require('express');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');

const router = express.Router();

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    'postgresql://neondb_owner:npg_le2bdPxuCv1a@ep-super-hill-ae09e9e0-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

const ALLOWED_TYPES = new Set(['veteran', 'volunteer']);

router.post('/', async (req, res) => {
  try {
    const { email, password, username, usertype } = req.body ?? {};

    // Basic validations
    if (!email || !password || !username || !usertype) {
      return res.status(400).json({ message: 'email, password, username, usertype are required.' });
    }
    const emailLower = String(email).trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLower)) {
      return res.status(400).json({ message: 'Invalid email format.' });
    }
    if (String(password).length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters.' });
    }
    const usernameTrim = String(username).trim();
    if (usernameTrim.length < 2) {
      return res.status(400).json({ message: 'Username must be at least 2 characters.' });
    }
    const typeLower = String(usertype).toLowerCase();
    if (!ALLOWED_TYPES.has(typeLower)) {
      return res.status(400).json({ message: "usertype must be 'veteran' or 'volunteer'." });
    }

    // ⚠️ Fast duplicate check (clear message, avoid wasted hashing)
    const dup = await pool.query('SELECT 1 FROM login WHERE email = $1 LIMIT 1', [emailLower]);
    if (dup.rowCount > 0) {
      return res.status(409).json({ message: 'Email already registered.' });
    }

    // Hash and insert
    const hash = await bcrypt.hash(password, 12);
    await pool.query(
      `INSERT INTO login (email, password, username, usertype)
       VALUES ($1, $2, $3, $4)`,
      [emailLower, hash, usernameTrim, typeLower]
    );

    return res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    if (err?.code === '23505') {
      // Fallback if UNIQUE(email) also fires
      return res.status(409).json({ message: 'Email already registered.' });
    }
    console.error('Registration error:', { code: err.code, detail: err.detail, message: err.message });
    return res.status(500).json({ message: 'Registration failed.' });
  }
});

module.exports = router;
