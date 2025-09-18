const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getProfile, getUsers, deleteUser, updateUser } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/', getUsers);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile);
router.delete('/:id', deleteUser); // Add this line
router.put('/:id', updateUser);    // Add this line

module.exports = router;
