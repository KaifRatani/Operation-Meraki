const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, '../ui')));
app.use('/images', express.static(path.join(__dirname, '../images')));

// Importing Routes
try {
    const veteranRoute = require('./routes/veteran');
    const volunteerRoute = require('./routes/volunteer');
    //const mailsubRoute = require('./routes/mailsub');
    const loginRoute = require('./routes/login');
    const signinRoute = require('./routes/signin');

    // Setting up API Endpoints
    app.use('/api/veteran', veteranRoute);
    app.use('/api/volunteer', volunteerRoute);
    //app.use('/api/mailsub', mailsubRoute);
    app.use('/api/login', loginRoute);
    app.use('/api/signin', signinRoute);

} catch (error) {
    console.error('Error importing routes:', error);
}

// Start the server
const PORT = process.env.PORT ||8080||80;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
