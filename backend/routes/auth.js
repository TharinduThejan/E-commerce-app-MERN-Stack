const express = require('express');
const router = express.Router();
const passport = require('passport');

// Route to start Google login
router.get(
    '/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google callback route
router.get(
    '/google/callback',
    passport.authenticate('google', { session: false, failureRedirect: '/auth/login/failed' }),
    (req, res) => {
        // Redirect to frontend with JWT token as query param
        const token = req.user.token;
        res.redirect(`${process.env.CLIENT_URL}?token=${token}`);
    }
);

// Login failed
router.get('/login/failed', (req, res) => {
    res.status(401).json({
        error: true,
        message: 'Failed to authenticate',
    });
});

// Optional logout route (for client to delete JWT)
router.get('/logout', (req, res) => {
    res.redirect(process.env.CLIENT_URL);
});

module.exports = router;
