// app/api/cart/route.js
import { connectDB } from '@/lib/db';
import { Cart } from '@/models/Cart';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');

  await connectDB();
  const cart = await Cart.findOne({ userId });
  return NextResponse.json(cart || { userId, items: [] });
}

export async function POST(req) {
  const { userId, items } = await req.json();

  await connectDB();

  const updated = await Cart.findOneAndUpdate(
    { userId },
    { items },
    { upsert: true, new: true }
  );

  return NextResponse.json(updated);
}
