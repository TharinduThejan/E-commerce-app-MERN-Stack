const Product = require('../models/Product');
const mongoose = require('mongoose');

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

// Get product by ID
exports.getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ error: 'Invalid product ID' });

    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

// Update product by ID
exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ error: 'Invalid product ID' });

    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

// Delete product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ error: 'Invalid product ID' });

    await Product.findByIdAndDelete(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};
