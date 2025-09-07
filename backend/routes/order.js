const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const { createOrder, getMyOrders, getOrders } = require('../controllers/orderController');

router.post('/', protect, createOrder);
router.get('/myorders', protect, getMyOrders);
router.get('/', protect, getOrders); // admin can implement role check later

module.exports = router;
