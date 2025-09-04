// models/Cart.js
import mongoose from 'mongoose';

const CartItemSchema = new mongoose.Schema({
  productId: String,
  name: String,
  price: Number,
  quantity: Number,
});

const CartSchema = new mongoose.Schema({
  userId: String,
  items: [CartItemSchema],
});

export const Cart = mongoose.models.Cart || mongoose.model('Cart', CartSchema);
