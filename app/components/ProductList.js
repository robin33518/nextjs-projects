"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductList({products}) {
const {dispatch} = useCart(); 
const router = useRouter(); 
// const [products,setProducts] = useState([]);


//   useEffect(() => {
//     async function loadProducts() {
//       const res = await fetch("/api/products");
//       const data = await res.json();
//       setProducts(data);
//     }
//     loadProducts();
//   }, []);


//   useEffect(()=>{
//         console.log("products>>>>>>>>>>>>>>>>",products);
//   },[products])



const addToCart = (p) =>{
    dispatch({ type: 'ADD_TO_CART', payload: p });
    router.push('/cart');

}

  return (
       <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {products.length === 0 ? (
        <p className="text-gray-700">No products is listed.</p>
      ) : (
        products?.map((p) => (
          <div key={p.productId} className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-700 mb-4">₹{p.price}</p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => addToCart(p)}
            >
              Add to Cart
            </button>
          </div>
        ))
      )}
      </div>
    </div>
  );
}
