import React from 'react'

function Card({image, name, price, isPizza}) {
  return (
    <div className='h-[550px] w-[300px] card-shadow rounded-xl flex flex-col items-center'>
      <img src={image} alt="pizza" className='h-[250px] w-[250px]' />
      <h3 className='text-orange-400 text-2xl font-bold capitalize'>{name}</h3>
      <h5 className='max-w-[80%] text-center text-gray-500 mt-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit official.</h5> 
      {isPizza && 
        <div className="flex items-center gap-3 mt-3">
          <div className='bg-black py-1 px-2 rounded-full text-white pointer'>30cm</div>
          <div className='text-black py-1 px-2 pointer'>40cm</div>
          <div className='text-black py-1 px-2 pointer'>50cm</div>
        </div>
      }
      <div className='flex justify-around items-center w-full mt-4'>
        <h3 className='text-orange-400 text-2xl font-bold'>{price}</h3>
        <div className='flex items-center gap-1'>
          <div className='bg-orange-400 rounded-full w-6 h-6 flex justify-center items-center text-white pointer'>+</div>
          <h3 className='text-2xl font-semibold'>1</h3>
          <div className='bg-orange-400 rounded-full w-6 h-6 flex justify-center items-center text-white pointer'>-</div>
        </div>
      </div>
      <button className='bg-gradient-to-r from-orange-500 to-yellow-300 mt-5 rounded-full w-[80%] h-[50px] shadow-xl font-bold text-xl text-white'>
        Order Now
      </button>
    </div>
  )
}

export default Card
