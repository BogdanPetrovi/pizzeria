import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState('djegae');

  return <CartContext.Provider
    value={{
      cartItems,
      setCartItems
    }}
  >
    {props.children}
  </CartContext.Provider>
}