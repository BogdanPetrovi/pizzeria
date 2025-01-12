import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

function Cart() {
  const { isCartOpen, cartItems, setCartItems } = useContext(CartContext);

  function removeItem(removedIndex){
    const arrayWithRemoved = cartItems.filter((item, index) => index !== removedIndex)
    setCartItems(arrayWithRemoved);
  }

  return (
    <>
      {isCartOpen && cartItems.length > 0 &&
        <div className="flex flex-col h-fit w-[350px] max-h-[700px] overflow-y-auto overflow-x-hidden pb-4 pt-2 px-2 bg-partials bg-opacity-70 absolute top-12 -left-40 border-2 border-[#f99a0c] rounded-2xl">
          <div className="divide-y-2 divide-black">
            {cartItems.map((item, index) => (
              <div className='flex justify-between' key={index}>
                <div className='flex flex-col'>
                  <h2 className='text-xl font-semibold'>{item.name}</h2>
                  <h2 className='text-gray-300 text-lg'>Quantity: {item.quantity}</h2>
                </div>
                <div className='flex items-center gap-2'>
                  <h2 className='font-bold text-2xl'>${item.price}</h2>
                  <div className='h-[20px] w-[20px] rounded-full bg-red-700 bg-opacity-80 flex items-center justify-center pointer' onClick={() => removeItem(index)}>X</div>
                </div>
              </div>
            ))}
          </div>
          <button className='bg-gradient-to-r from-orange-500 to-yellow-300 mt-5 rounded-full w-[80%] h-[50px] mx-auto shadow-xl font-bold text-xl text-white'>
            Confirm order
          </button>
        </div>
      }
    </>
  )
}

export default Cart
