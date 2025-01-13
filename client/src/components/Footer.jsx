import React from 'react'

function Footer() {
  return (
    <div className='h-[300px] text-white mt-16 bg-partials flex justify-around items-center px-60'>
      <h3 className='text-lg'>Copyright © Bogdan 2025</h3>
      <div className='flex flex-col'>
        <h2 className='text-xl font-bold'>Restaurant</h2>
        <h3 className='text-lg underline pointer'>Menu</h3>
        <h3 className='text-lg underline pointer'>About Us</h3>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-xl font-bold capitalize'>Opening hours</h2>
        <h3 className='text-lg'>Week days: 10:30 - 21:00</h3>
        <h3 className='text-lg'>Saturday: 11:30 - 20:30</h3>
        <h3 className='text-lg'>Sunday: 11:30 - 19:00</h3>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-xl font-bold'>Socials</h2>
        <a className='text-lg underline text-orange-500' href='https://www.instagram.com/bogdanpet_/' target='_blank' rel='noreferrer'>Instagram</a>
        <a className='text-lg underline text-orange-500' href='https://x.com/Gibo_BP' target='_blank' rel='noreferrer'>X</a>
        <a className='text-lg underline text-orange-500' href='https://www.youtube.com/@Giboyt' target='_blank' rel='noreferrer'>YouTube</a>
      </div>
    </div>
  )
}

export default Footer
