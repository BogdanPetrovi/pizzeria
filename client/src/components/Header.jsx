import React from 'react'
import Bag from './svgs/Bag'
import Phone from './svgs/Phone'

function Header() {
  return (
    <div className="h-[12%] w-full bg-partials flex justify-around items-center text-white px-20 shadow-2xl z-20">
      <h2 className='text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-300 text-transparent bg-clip-text cursor-default'>Pizzeria</h2>
      <div className='flex gap-6'>
        <h4 className='pointer p-2'>Home</h4>
        <h4 className='pointer p-2'>Menu</h4>
        <h4 className='pointer p-2'>Specials</h4>
        <h4 className='pointer p-2'>Contact Us</h4>
      </div>
      <div className='flex gap-2'>
        <Bag />
        <Phone />
      </div>
    </div>
  )
}

export default Header
