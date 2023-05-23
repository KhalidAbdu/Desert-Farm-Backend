require('dotenv').config(); // access to environment variables/settings

require('./db'); // Connects to the database

const express = require('express'); // Handles http requests

const app = express();

require('./config')(app); // It runs most pieces of middleware

// 👇 Start handling routes here
const productRoutes = require('./routes/product.routes');
app.use('/api/products', productRoutes);

const mainRoutes = require('./routes/main.routes');
app.use('/api/main', mainRoutes);

const userRoutes = require('./routes/users.routes');
app.use('/api/users', userRoutes);

const orderRoutes = require('./routes/order.routes');
app.use('/api/orders', orderRoutes);

require('./error-handling')(app); // To handle errors

module.exports = app;
