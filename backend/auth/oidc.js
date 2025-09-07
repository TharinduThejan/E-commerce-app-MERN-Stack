const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const jwt = require('jsonwebtoken');

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: process.env.CALLBACK_URL,
            scope: ['profile', 'email'],
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // Check if user exists by googleId
                let user = await User.findOne({ googleId: profile.id });
                if (!user) {
                    // Create new user
                    user = await User.create({
                        googleId: profile.id,
                        email: profile.emails[0].value,
                        username: profile.displayName,
                        name: profile.displayName,
                        password: '', // Google users won't use password
                        role: 'customer',
                    });
                }

                // Generate JWT
                const payload = {
                    user: {
                        id: user._id.toString(),
                        name: user.name || user.username,
                        role: user.role,
                    },
                };
                const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '40h' });

                // Attach token to user object for redirect
                user.token = token;
                done(null, user);
            } catch (err) {
                done(err, null);
            }
        }
    )
);

// Serialize/Deserialize user (for passport, not strictly needed with JWT)
passport.serializeUser((user, done) => done(null, user._id));
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});
