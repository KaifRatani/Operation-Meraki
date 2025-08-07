const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://merakiAdmin:root1Admin@operationmeraki-server1.postgres.database.azure.com:5432/operationmeraki-database?sslmode=require',
  ssl: { rejectUnauthorized: false }
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const {
    firstName,
    lastName,
    state,
    email,
    phone,
    town,
    donationReceiptRequired,
    equipmentDetails,
    permissionToContact
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO equipment_donations (
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
        donationReceiptRequired,
        equipmentDetails,
        permissionToContact
      ]
    );

    const insertedId = result.rows[0].id;
    res.status(200).json({ message: 'Donation submitted successfully!', id: insertedId });
  } catch (error) {
    console.error('Error inserting donation:', error);
    if (error.code === '23505') {
      res.status(400).json({ message: 'A record with this email or unique field already exists.' });
    } else {
      res.status(500).json({ message: 'Error saving donation.' });
    }
  }
};
