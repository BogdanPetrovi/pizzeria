import React from 'react'

function AboutUs() {
  return (
    <>
      <div className='w-full h-[525px] bg-zinc-100 flex px-60 justify-around items-center'>
        <img src="/Images/restaurant.png" alt="interior" className='h-[320px] rounded-2xl' />
        <div className="flex flex-col">
        <h3 className='uppercase text-orange-400 text-xl font-semibold'>Abouts us</h3>
        <h2 className='capitalize text-4xl font-bold mt-2'>This is our story</h2>
          <h3 className='text-zinc-500 text-lg max-w-[600px] mt-8'>
            Our Pizzeria is a family owned and operated restaurant serving the community for over 20 years. Stop by and Dine-In our comfortable Restaurant
            or Call for Carry-Out orders. You may also call to pre-order your Dine-In meal. We offer only the freshest and highest quality ingredients to make your dining 
            experience with us memorable. Ask us about having a special birthday party.
          </h3>  
        </div>    
      </div>
      <img src="/Images/Decoration/onion.png" alt="onion" className='absolute top-[198%] left-[15%] z-10' />
      <img src="/Images/Decoration/cabbage.png" alt="cabbage" className='absolute top-[247%] left-[75%] z-10' />
    </>
  )
}

export default AboutUs
