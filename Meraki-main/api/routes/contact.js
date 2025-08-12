// api/routes/contact.js
const { Pool } = require('pg');

const pool = new Pool({
  connectionString:
    'postgresql://neondb_owner:npg_le2bdPxuCv1a@ep-super-hill-ae09e9e0-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require',
  ssl: { rejectUnauthorized: false },
  keepAlive: true,
  connectionTimeoutMillis: 10000,
  idleTimeoutMillis: 30000,
  max: 10,
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const {
    firstName,
    lastName,
    email,
    message,
    consent1,
    consent2
  } = req.body || {};

  try {
    // Coerce booleans in case they arrive as "true"/"false" strings
    const c1 = typeof consent1 === 'boolean' ? consent1 : String(consent1).toLowerCase() === 'true';
    const c2 = typeof consent2 === 'boolean' ? consent2 : String(consent2).toLowerCase() === 'true';

    const result = await pool.query(
      `INSERT INTO public.contact_messages (
        "firstName",
        "lastName",
        "email",
        "message",
        "consent1",
        "consent2"
      ) VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id`,
      [
        firstName,
        lastName,
        email,
        message || null,
        c1,
        c2
      ]
    );

    const insertedId = result.rows[0].id;
    return res.status(200).json({ message: 'Message sent successfully!', id: insertedId });

  } catch (error) {
    console.error('Error saving contact message:', error);
    if (error.code === '23505') {
      return res.status(400).json({ message: 'A duplicate record already exists.' });
    }
    return res.status(500).json({ message: 'Error saving message.' });
  }
};
