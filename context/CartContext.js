"use client"
import { createContext, use, useContext, useEffect, useReducer } from "react";

const cartContext = createContext();

const initialState={
    cart:[],
    userId:"1234"
}


function cartReducer(state,action){
    console.log("action",action.payload);
    switch(action.type){
        case "SET_CART":
              return { ...state, cart: action.payload };

        case 'ADD_TO_CART':
        let exist = state.cart.find(item=> item.productId == action.payload.productId);
        console.log("exist",exist);
        if(exist){
           return{
            ...state,
            cart: state.cart.map(item=>item.productId==action.payload.productId ? {...item,quantity:item.quantity+1} : item)
           }  
        }
        return {
            ...state,
            cart: [...state.cart, {...action.payload,quantity:1}],
        }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart:state.cart.filter(i=>i.productId!==action.payload)
            }    
    }
}

export default function CartProvider({children}) {
    const [state,dispatch] = useReducer(cartReducer,initialState);
    const {userId,cart} = state;


     useEffect(() => {
    async function loadCart() {
      const res = await fetch(`/api/cart?userId=${userId}`);
      const data = await res.json();
      dispatch({ type: "SET_CART", payload: data.items || [] });
    }
    loadCart();
  }, [userId]);

  // Sync cart to MongoDB on cart change
  useEffect(() => {
    if (cart.length === 0) return;
    async function syncCart() {
        console.log("cart items",cart);
      await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, items: cart }),
      });
    }
    syncCart();
  }, [cart, userId]);

    return (
        <cartContext.Provider value={{cart:state.cart,dispatch}}>
            {children}
        </cartContext.Provider>
    );
}

// export const useCart = ()=>{ useContext(context)};
export function useCart() {
  const contexts = useContext(cartContext);
  if (!contexts) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return contexts;
}