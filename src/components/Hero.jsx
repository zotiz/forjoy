import React from 'react'

const Hero = () => {
  return (
    <div id="" className='w-full h-[85vh]'>
      <img src="https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="/"  className='w-full h-full object-cover'/>
      <div className='max-w-[1140px] m-auto '>
        <div className='absolute top-[40%] sm:top-[40%] w-full max-w-[600px] h-auto flex flex-col text-white p-4 md:p-8'>
          <h1 className='text-2xl md:text-4xl font-bold'>Find Your Special Trip</h1>
          <h2 className='italic md:text-2xl text-[#ffffff]'>With ForJoy</h2>
          <p className='text-gray-200  my-2 '>Experience unique adventures with ForJoy Travel. Discover thrilling escapades, cultural immersions, and tailored journeys. Uncover vibrant markets, savor exotic flavors, and create lasting memories. Let ForJoy guide your unforgettable travel.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero