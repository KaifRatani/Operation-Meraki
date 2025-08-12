// api/routes/bODForm.js
const express = require('express');
const { Pool } = require('pg');

const router = express.Router();

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_le2bdPxuCv1a@ep-super-hill-ae09e9e0-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false },
  keepAlive: true,
  connectionTimeoutMillis: 10000,
  idleTimeoutMillis: 30000,
  max: 10,
});

router.post('/', async (req, res) => {
  try {
    let {
      firstName,
      lastName,
      state,
      email,
      phone,
      town,
      hearAboutUs,
      veteranStatus,       // "Yes" | "No"
      linkedinUrl,
      skills,
      permissionToContact  // boolean
    } = req.body || {};

    // normalize + basic checks
    firstName = (firstName || '').trim();
    lastName  = (lastName  || '').trim();
    state     = (state     || '').trim();
    email     = (email     || '').trim().toLowerCase();
    phone     = (phone     || '').trim();
    town      = (town      || '').trim();
    hearAboutUs = (hearAboutUs || '').trim();
    veteranStatus = (veteranStatus || '').trim();
    linkedinUrl = (linkedinUrl || '').trim();
    skills = (skills || '').trim();
    const canContact =
      typeof permissionToContact === 'boolean'
        ? permissionToContact
        : String(permissionToContact).toLowerCase() === 'true';

    if (!firstName || !lastName || !state || !email || !phone || !town || !canContact) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    // INSERT — assumes a table named public.board_applications
    // with these columns:
    // id (bigserial pk), "firstName","lastName","state","email","phone","town",
    // "hearAboutUs","veteranStatus","linkedinUrl","skills","permissionToContact", created_at default now()
    const { rows } = await pool.query(
      `INSERT INTO public.board_applications
        ("firstName","lastName","state","email","phone","town",
         "hearAboutUs","veteranStatus","linkedinUrl","skills","permissionToContact")
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
       RETURNING id`,
      [
        firstName,
        lastName,
        state,
        email,
        phone,
        town,
        hearAboutUs || null,
        veteranStatus || null,
        linkedinUrl || null,
        skills || null,
        canContact
      ]
    );

    return res.status(200).json({ message: 'Form submitted successfully!', id: rows[0].id });
  } catch (err) {
    console.error('Board form insert error:', err);
    if (err.code === '23505') {
      return res.status(409).json({ message: 'A record with this email already exists.' });
    }
    return res.status(500).json({ message: 'Server error while saving form.' });
  }
});

module.exports = router;
