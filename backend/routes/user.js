const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const userController = require('../controllers/userController');
require('dotenv').config();

// ----------------- REGISTER -----------------
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: 'User already exists' });

        const newUser = new User({ name, email, password });
        await newUser.save();

        const payload = {
            user: {
                id: newUser._id.toString(),
                name: newUser.name,
                role: newUser.role
            }
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '40h' });

        res.status(201).json({
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role
            },
            token
        });
    } catch (err) {
        console.error('Register error:', err.message);
        res.status(500).json({ error: 'Server error', details: err.message });
    }
});

// ----------------- LOGIN -----------------
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'Invalid credentials' });

        const isMatch = await user.matchPassword(password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

        const payload = {
            user: {
                id: user._id.toString(),
                name: user.name,
                role: user.role
            }
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '40h' });

        res.status(200).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            },
            token
        });
    } catch (err) {
        console.error('Login error:', err.message);
        res.status(500).json({ error: 'Server error', details: err.message });
    }
});

// ----------------- OTHER USER ROUTES -----------------
// Always put dynamic routes last to avoid CastError
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
