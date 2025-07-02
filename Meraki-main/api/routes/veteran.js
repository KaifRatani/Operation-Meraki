const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'new Client({host:"operationmeraki-server1.postgres.database.azure.com", user:"merakiAdmin", password:"root1Admin", database:"postgres", port:5432, ssl:{ca:fs.readFileSync("{ca-cert filename}")}});'
,
  ssl: { rejectUnauthorized: false }
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    veteran,
    programInterest,
    serviceBranch,
    state,
    comment
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO veteran 
      ("firstName", "lastName", "email", "phone", "veteran", "programInterest", "serviceBranch", "state", "comment")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING id`,
      [firstName, lastName, email, phone, veteran, programInterest, serviceBranch, state, comment]
    );

    const insertedId = result.rows[0].id;
    res.status(200).json({ message: 'Form submitted successfully!', id: insertedId });
  } catch (error) {
    console.error('Error inserting data:', error);

    if (error.code === '23505') {
      res.status(400).json({ message: 'A record with this email or unique field already exists.' });
    } else {
      res.status(500).json({ message: 'Error saving form data.' });
    }
  }
};
