import React from 'react'
import Card from './Card'

function Menu() {
  return (
    <div className='h-[1000px] flex flex-col items-center'>
      <h3 className='uppercase text-orange-400 text-xl font-semibold'>Our menu</h3>
      <h2 className='capitalize text-4xl font-bold mt-4'>Discover our menu</h2>
      <div className="flex gap-5 mt-12">
        <div className='menu-button bg-orange-400 text-white'>Pizza</div>
        <div className='menu-button'>Salads</div>
        <div className='menu-button'>Ice cream</div>
        <div className='menu-button'>Kids</div>
      </div>
      <img src="tomato.png" alt="tomato" className='absolute top-[100%] left-[80%] h-72 -z-20' />
      <img src="mushroom.png" alt="tomato" className='absolute top-[118%] left-[5%] h-60 -z-20' />
      <div className='flex gap-5 justify-center mt-16'>
        <Card
          image={'pepperoni.png'}
          name={'Pepperoni pizza'}
        />
        <Card
          image={'cheese.png'}
          name={'Cheese Pizza'}
        />
        <Card
          image={'sweet.png'}
          name={'Sweet Pizza'}
        />
        <Card
          image={'meat.png'}
          name={'Meat Pizza'}
        />
      </div>
    </div>
  )
}

export default Menu
