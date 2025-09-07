require('dotenv').config();

const express = require('express');
const app = express();
const passport = require('passport');
require('./auth/oidc'); // Google OIDC strategy

const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);
app.use(passport.initialize());

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/auth', authRoutes);

// Test route
app.get('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
