import React, { useState } from 'react'
import Catalog from './Catalog'

function Menu() {
  const [choice, setChoice] = useState('Pizza')
  
  function handleChoice(type) {
    setChoice(type);
  }

  return (
    <div className='h-[1000px] flex flex-col items-center'>
      <h3 className='uppercase text-orange-400 text-xl font-semibold'>Our menu</h3>
      <h2 className='capitalize text-4xl font-bold mt-4'>Discover our menu</h2>
      <div className="flex gap-5 mt-12">
        <div className='menu-button bg-orange-400 text-white' onClick={() => handleChoice('Pizza')}>Pizza</div>
        <div className='menu-button' onClick={() => handleChoice('Salad')}>Salads</div>
        <div className='menu-button' onClick={() =>handleChoice('Ice cream')}>Ice cream</div>
        <div className='menu-button' onClick={() =>handleChoice('Kids')}>Kids</div>
      </div>
      <img src="Images/Decoration/tomato.png" alt="tomato" className='absolute top-[100%] left-[80%] h-72 -z-20' />
      <img src="Images/Decoration/mushroom.png" alt="tomato" className='absolute top-[118%] left-[5%] h-60 -z-20' />
      <Catalog choice={choice} />
    </div>
  )
}

export default Menu
