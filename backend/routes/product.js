const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get all products
router.get('/', productController.getProducts);

// Create a new product
router.post('/', productController.createProduct);

// Get product by ID
router.get('/:id', productController.getProduct);

// Update product by ID
router.put('/:id', productController.updateProduct);

// Delete product by ID
router.delete('/:id', productController.deleteProduct);

module.exports = router;
