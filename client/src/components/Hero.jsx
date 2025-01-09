import React from 'react'
import People from './svgs/People'
import Pizza from './svgs/Pizza'

function Hero() {
  return (
    <div id='hero' className='h-[820px] w-full mt-[5.5%]'>
      <div className="pt-40 pl-36">
        <h1 className='capitalize font-bold inline text-5xl leading-normal'>
          It's not just a pizza, it's 
          <br />an<span className='bg-gradient-to-l from-orange-600 to-orange-400 bg-clip-text text-transparent'> experience</span>
        </h1>
        <h4 className='text-xl w-1/3 mt-11'>
          Come and get some work done at our family friendly cowork space and private offices with full kitchen while your kids play at our playground.
        </h4>
        <button className='bg-gradient-to-r from-orange-500 to-yellow-300 mt-10 rounded-full w-[200px] h-[60px] font-bold text-xl btn-shadow'>
          Order Now
        </button>
        <div className='flex items-center gap-2 mt-24'>
          <People />
          <div className="flex flex-col ml-2">
            <h2 className='text-orange-400 text-lg font-bold'>2000+</h2>
            <h2>Customers</h2>
          </div>
          <Pizza /> 
          <div className="flex flex-col ml-2">
            <h2 className='text-orange-400 text-lg font-bold'>2500+</h2>
            <h2>Delivery</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
