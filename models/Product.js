// models/Cart.js
import mongoose from 'mongoose';

const ProductItemSchema = new mongoose.Schema({
  productId: String,
  name: String,
  price: Number,
  quantity: Number,

});

export const Product = mongoose.models.Product || mongoose.model('Product', ProductItemSchema);
