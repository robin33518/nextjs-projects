// lib/db.js
import mongoose from 'mongoose';

const uri = `mongodb+srv://robincse007:mongo123@cluster0.5t5v6.mongodb.net/nextjsdb?retryWrites=true&w=majority&appName=Cluster0`;
const MONGODB_URI = process.env.MONGODB_URI || uri;


if (!MONGODB_URI) {
  throw new Error('❌ MONGODB_URI is not defined in .env.local');
}

export async function connectDB() {
   try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
  }
}
