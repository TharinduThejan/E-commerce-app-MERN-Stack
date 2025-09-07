const Order = require('../models/Order');

exports.getOrders = async (req, res) => {
    const orders = await Order.find().populate('user products.product');
    res.json(orders);
};

exports.createOrder = async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
};

exports.getOrder = async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user products.product');
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
};

exports.updateOrder = async (req, res) => {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
};

exports.deleteOrder = async (req, res) => {
    await Order.findByIdAndDelete(req.params.id);
    res.status(204).end();
};
