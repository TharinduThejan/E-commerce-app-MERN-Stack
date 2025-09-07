const Order = require('../models/Order');
const Product = require('../models/Product');

// Create new order
exports.createOrder = async (req, res) => {
    const { orderItems } = req.body;

    if (!orderItems || orderItems.length === 0) return res.status(400).json({ error: 'No order items' });

    try {
        let totalPrice = 0;
        for (let item of orderItems) {
            const product = await Product.findById(item.product);
            if (!product) return res.status(404).json({ error: 'Product not found' });
            totalPrice += product.price * item.quantity;
            item.name = product.name;
            item.price = product.price;
        }

        const order = await Order.create({
            user: req.user._id,
            orderItems,
            totalPrice
        });

        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get user's orders
exports.getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id }).populate('orderItems.product', 'name price');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all orders (admin)
exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user', 'name email');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
