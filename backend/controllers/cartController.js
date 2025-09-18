const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Add to cart
exports.addToCart = async (req, res) => {
    const userId = req.user._id;
    const { productId, quantity } = req.body;

    try {
        // Validate product exists
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ error: 'Product not found' });

        let cart = await Cart.findOne({ user: userId });
        if (!cart) {
            cart = new Cart({ user: userId, items: [] });
        }

        // Check if product already in cart
        const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity });
        }

        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get cart
exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
        res.json(cart || { items: [] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id });
        if (!cart) return res.status(404).json({ error: 'Cart not found' });
        cart.items = cart.items.filter(item => item.product.toString() !== req.body.productId);
        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Clear cart
exports.clearCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id });
        if (!cart) return res.status(404).json({ error: 'Cart not found' });
        cart.items = [];
        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
