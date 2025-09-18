const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, default: "", required: true },
  price: { type: Number, required: true, min: 0 },
  images: [
    {
      url: { type: String, required: true },
      altText: { type: String }
    }
  ],
  stock: { type: Number, default: 0, min: 0, required: true },
  sizes: { type: [String], required: true },
  colors: { type: [String], required: true },
  material: { type: String, enum: ['Cotton', 'Polyester', 'Silk'] },
  category: { type: String, enum: ['Men', 'Women', 'Kids'] },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
