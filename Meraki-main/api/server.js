const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Session setup (only needs to be done once)
app.use(session({
  secret: 'operationMerakiSecret', // use a secure secret in production
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // set true if using HTTPS
}));
// Mount API routes FIRST
app.use('/api/events', require('./routes/events'));

// Serve static files AFTER API routes
app.use(express.static(path.join(__dirname, '../ui')));
app.use('/images', express.static(path.join(__dirname, '../images')));

// Route: Serve homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../ui/index.html'));
});

// Optional: Protect admin.html (uncomment if needed)
/*app.get('/admin.html', (req, res) => {
  if (req.session.user && req.session.user.role === 'admin') {
    return res.sendFile(path.join(__dirname, '../ui/admin.html'));
  } else {
    return res.redirect('/admin-login.html');
  }
});*/

// Helper to safely mount routes
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

// Mount API routes
mountRoute('/api/veteran', './routes/veteran');
mountRoute('/api/volunteer', './routes/volunteer');
mountRoute('/api/login', './routes/login');     // shared login (admin + user)
mountRoute('/api/signin', './routes/signin');
mountRoute('/api/events', './routes/events');
mountRoute('/api/admin', './routes/admin');
mountRoute('/api/reset', './routes/reset');
mountRoute('/api/refocus', './routes/refocus');
mountRoute('/api/reengage', './routes/reengage');
mountRoute('/api/events', './routes/events');

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
