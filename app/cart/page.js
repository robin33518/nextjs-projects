"use client";
import { useEffect } from "react";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, dispatch } = useCart();


  const total = cart.reduce((sum,item)=> sum+(item.price*item.quantity),0);


  return (
       <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-700">No items in cart.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.productId} className="bg-white p-4 shadow rounded flex justify-between items-center">
              <div>
                <h2 className="text-lg font-medium">{item.name}</h2>
                <p className="text-gray-600">₹{item.price} {item.quantity}</p>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.productId})}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right font-bold text-lg">Total: ₹{total}</div>
        </div>
      )}

    </div>
  );
}
