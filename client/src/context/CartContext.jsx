import React, { createContext, useEffect, useState } from 'react'
import CartCookie from '../api/CartCookie'

export const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const getCookie = async () => {
      const result = await CartCookie.get('/get-cart');
      setCartItems(result.data.cart);
    }
    
    getCookie();
  }, [])

  return <CartContext.Provider
    value={{
      cartItems,
      setCartItems,
      isCartOpen,
      setIsCartOpen
    }}
  >
    {props.children}
  </CartContext.Provider>
}