const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, '../ui')));
app.use('/images', express.static(path.join(__dirname, '../images')));

// Route: Serve reset.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../ui/reset.html'));
});

// Function to safely import and mount a route
function mountRoute(pathPrefix, routePath) {
  try {
    const route = require(routePath);
    if (typeof route === 'function') {
      app.use(pathPrefix, route);
      console.log(`✅ Mounted route: ${pathPrefix}`);
    } else {
      console.warn(`⚠️ Route at ${routePath} does not export a router.`);
    }
  } catch (err) {
    console.error(`❌ Failed to mount ${pathPrefix}:`, err.message);
  }
}

// Mount routes safely
mountRoute('/api/veteran', './routes/veteran');
mountRoute('/api/volunteer', './routes/volunteer');
mountRoute('/api/login', './routes/login');
mountRoute('/api/signin', './routes/signin');
// mountRoute('/api/mailsub', './routes/mailsub'); // Only if valid
mountRoute('/api/bodform', './routes/bODForm');
mountRoute('/api/reset', './routes/reset');
mountRoute('/api/refocus', './routes/refocus');
mountRoute('/api/reengage', './routes/reengage'); // Only if valid

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
