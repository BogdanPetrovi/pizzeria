import React, { useContext } from 'react'
import Bag from './svgs/Bag'
import Phone from './svgs/Phone'
import { CartContext } from '../context/Cart'

function Header() {
  return (
    <div className="h-[110px] w-full bg-partials flex justify-around items-center px-20 header-shadow z-20 fixed top-0 left-0">
      <h2 className='text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-300 text-transparent bg-clip-text cursor-default'>Pizzeria</h2>
      <div className='flex gap-6'>
        <h4 className='pointer p-2'>Home</h4>
        <h4 className='pointer p-2'>Menu</h4>
        <h4 className='pointer p-2'>Specials</h4>
        <h4 className='pointer p-2'>Contact Us</h4>
      </div>
      <div className='flex gap-2 relative'>
        <Bag />
        <div className="flex flex-col h-fit w-[350px] pb-4 pt-2 px-2 bg-partials bg-opacity-70 absolute top-12 -left-40 border-2 border-[#f99a0c] rounded-2xl">
          <div className="divide-y-2 divide-black">
            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <h2 className='text-2xl font-semibold'>Peperoni Pizza</h2>
                <h2 className='text-gray-300 text-lg'>Quantity: 2</h2>
              </div>
              <h2 className='font-bold text-2xl'>$22</h2>
            </div>
            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <h2 className='text-2xl font-semibold'>Caeser Salad</h2>
                <h2 className='text-gray-300 text-lg'>Quantity: 1</h2>
              </div>
              <h2 className='font-bold text-2xl'>$11</h2>
            </div>
          </div>
          <button className='bg-gradient-to-r from-orange-500 to-yellow-300 mt-5 rounded-full w-[80%] h-[50px] mx-auto shadow-xl font-bold text-xl text-white'>
            Confirm order
          </button>
        </div>
        <Phone />
      </div>
    </div>
  )
}

export default Header
