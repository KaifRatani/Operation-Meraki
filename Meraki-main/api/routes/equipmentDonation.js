// api/routes/equipmentDonation.js
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_le2bdPxuCv1a@ep-super-hill-ae09e9e0-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
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

  try {
    let {
      firstName,
      lastName,
      state,
      email,
      phone,
      town,
      donationReceiptRequired,
      equipmentDetails,
      permissionToContact
    } = req.body || {};

    // normalize
    firstName = (firstName || '').trim();
    lastName  = (lastName  || '').trim();
    state     = (state     || '').trim();
    email     = (email     || '').trim().toLowerCase();
    phone     = (phone     || '').trim();
    town      = (town      || '').trim();
    equipmentDetails = (equipmentDetails || '').trim();

    // coerce booleans (accept true/false or "true"/"false")
    const receipt = typeof donationReceiptRequired === 'boolean'
      ? donationReceiptRequired
      : String(donationReceiptRequired).toLowerCase() === 'true';

    const canContact = typeof permissionToContact === 'boolean'
      ? permissionToContact
      : String(permissionToContact).toLowerCase() === 'true';

    // minimally required fields
    if (!firstName || !lastName || !state || !email || !phone || !town || !canContact) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    const result = await pool.query(
      `INSERT INTO public.equipment_donations (
          "firstName",
          "lastName",
          "state",
          "email",
          "phone",
          "town",
          "donationReceiptRequired",
          "equipmentDetails",
          "permissionToContact"
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
        RETURNING id`,
      [
        firstName,
        lastName,
        state,
        email,
        phone,
        town,
        receipt,
        equipmentDetails || null,
        canContact
      ]
    );

    return res.status(200).json({
      message: 'Donation recorded successfully!',
      id: result.rows[0].id
    });
  } catch (err) {
    console.error('Equipment donation insert error:', err);
    if (err.code === '23505') {
      return res.status(409).json({ message: 'Duplicate entry.' });
    }
    return res.status(500).json({ message: 'Server error saving donation.' });
  }
};
