require('dotenv').config(); // access to environment variables/settings

require('./db'); // Connects to the database

const express = require('express'); // Handles http requests

const app = express();

require('./config')(app); // It runs most pieces of middleware

// 👇 Start handling routes here
const indexRoutes = require('./routes/index.routes');
app.use('/api/products', indexRoutes);

const mainRoutes = require('./routes/main.routes');
app.use('/api/main', mainRoutes);

require('./error-handling')(app); // To handle errors

module.exports = app;
