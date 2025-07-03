const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { Pool } = require('pg');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: 'postgresql://merakiAdmin:root1Admin@operationmeraki-server1.postgres.database.azure.com:5432/operationmeraki-database?sslmode=require',
  ssl: { rejectUnauthorized: false }
});

let etherealTransporter;

(async () => {
  // Create Ethereal test account and transporter ONCE
  const testAccount = await nodemailer.createTestAccount();

  etherealTransporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });

  console.log('📧 Ethereal test account created:');
  console.log('  Username:', testAccount.user);
  console.log('  Password:', testAccount.pass);
})();

// Subscribe endpoint
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address.' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO "emailSub" (email) VALUES ($1) RETURNING id`,
      [email]
    );

    // Prepare email
    const mailOptions = {
      from: '"Operation Meraki" <noreply@operationmeraki.org>',
      to: email,
      subject: 'Welcome to Operation Meraki (Test Email)',
      html: `
        <h2>Welcome to Operation Meraki! 🎉</h2>
        <p>This is a test email using Ethereal.</p>
        <p>You’re successfully subscribed. This is how the real email will look!</p>
      `
    };

    const info = await etherealTransporter.sendMail(mailOptions);
    const previewUrl = nodemailer.getTestMessageUrl(info); // Get preview link
    
    res.status(200).json({
      message: '✅ Subscribed and test email sent!',
      preview: previewUrl,
      id: result.rows[0].id
    });
  } catch (error) {
    console.error('Error:', error);

    if (error.code === '23505') {
      res.status(409).json({ message: '⚠️ Email already subscribed.' });
    } else {
      res.status(500).json({ message: '❌ Server error. Could not save or email.' });
    }
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
