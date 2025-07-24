const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

// PostgreSQL connection
const pool = new Pool({
  connectionString: 'postgresql://merakiAdmin:root1Admin@operationmeraki-server1.postgres.database.azure.com:5432/operationmeraki-database?sslmode=require',
  ssl: { rejectUnauthorized: false }
});

// Get all events (with formatted date, time, duration)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        id, 
        title, 
        description, 
        location, 
        TO_CHAR(date, 'YYYY-MM-DD"T"HH24:MI:SS"Z"') AS date,
        TO_CHAR(start_time, 'HH24:MI') AS start_time,
        TRIM(
          CASE 
            WHEN EXTRACT(HOUR FROM duration) > 0 THEN EXTRACT(HOUR FROM duration) || ' hr ' 
            ELSE '' 
          END || 
          CASE 
            WHEN EXTRACT(MINUTE FROM duration) > 0 THEN EXTRACT(MINUTE FROM duration) || ' min'
            ELSE '' 
          END
        ) AS duration
      FROM public.events
      ORDER BY date ASC, start_time ASC
    `);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching events:', err);
    res.status(500).send('Failed to fetch events');
  }
});

// ➕ Create a new event
router.post('/create', async (req, res) => {
  const { title, description, location, date, start_time, duration } = req.body;
  try {
    await pool.query(`
      INSERT INTO public.events (title, description, location, date, start_time, duration)
      VALUES ($1, $2, $3, $4, $5, $6)
    `, [title, description, location, date, start_time, duration]);

    res.send('✅ Event created successfully');
  } catch (err) {
    console.error('Error creating event:', err);
    res.status(500).send('❌ Failed to create event');
  }
});

// ✏️ Edit existing event
router.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, location, date, start_time, duration } = req.body;

  try {
    await pool.query(`
      UPDATE public.events
      SET title = $1, description = $2, location = $3, date = $4, start_time = $5, duration = $6
      WHERE id = $7
    `, [title, description, location, date, start_time, duration, id]);

    res.send('✏️ Event updated successfully');
  } catch (err) {
    console.error('Error updating event:', err);
    res.status(500).send('❌ Failed to update event');
  }
});

// 📝 Register RSVP or Volunteer
router.post('/respond', async (req, res) => {
  const {
    event_id, first_name, last_name, email, phone,
    state, town, heard_from, age_group, people_count,
    is_veteran, role
  } = req.body;

  try {
    await pool.query(`
      INSERT INTO public.event_responses (
        event_id, first_name, last_name, email, phone,
        state, town, heard_from, age_group, people_count,
        is_veteran, role
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
    `, [
      event_id, first_name, last_name, email, phone,
      state, town, heard_from, age_group, people_count,
      is_veteran, role
    ]);

    res.send('✅ Registration recorded successfully!');
  } catch (err) {
    console.error('❌ Error recording registration:', err);
    res.status(500).send('❌ Failed to save response');
  }
});

// 📋 Get all participants
router.get('/participants', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT * FROM public.event_responses
      ORDER BY response_time DESC
    `);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching participants:', err);
    res.status(500).send('Failed to fetch participants');
  }
});

// 🗑️ Delete an event
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`DELETE FROM public.events WHERE id = $1`, [id]);

    if (result.rowCount === 0) {
      return res.status(404).send('❌ Event not found.');
    }
    res.send('✅ Event deleted successfully.');
  } catch (err) {
    console.error('Error deleting event:', err);
    res.status(500).send('❌ Failed to delete event.');
  }
});

module.exports = router;
