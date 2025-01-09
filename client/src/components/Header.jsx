import React from 'react'
import Bag from './svgs/Bag'
import Phone from './svgs/Phone'

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
      <div className='flex gap-2'>
        <Bag />
        <Phone />
      </div>
    </div>
  )
}

export default Header
