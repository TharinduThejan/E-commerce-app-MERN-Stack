const Product = require('../models/Product');

// Create Product
exports.createProduct = async (req, res) => {
  try {
    const productData = { ...req.body };

    // Handle single image
    if (req.body.image) {
      productData.images = [{
        url: req.body.image,
        altText: req.body.name || 'Product Image'
      }];
    }

    const product = new Product(productData);
    await product.save();

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Single Product
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    // Update only provided fields
    Object.keys(req.body).forEach(key => {
      if (req.body[key] !== undefined) {
        product[key] = req.body[key];
      }
    });

    // Handle image update
    if (req.body.image) {
      product.images = [{
        url: req.body.image,
        altText: req.body.name || 'Product Image'
      }];
    }

    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
