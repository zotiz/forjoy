import React from 'react'

const Activities = () => {
  return (
    <div className='max-w-[1140px] w-full m-auto md:flex justify-between mt-[-75px]'>
      <div className='relative p-4 h-[300px] flex-1'>
        <h3  className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-semibold'>Resort</h3>
        <img className='w-full h-full object-cover border-4 shadow-lg' src="https://images.unsplash.com/photo-1589979481223-deb893043163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fFJlc29ydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
      </div>
      <div className='relative p-4 h-[300px] flex-1'>
        <h3 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-semibold'>Resort</h3>
        <img className='w-full h-full object-cover border-4 shadow-lg' src="https://images.unsplash.com/photo-1557034362-d9b6856e4cab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fFJlc29ydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" />
      </div>

      <div className='relative p-4 h-[300px] flex-1'>
        <h3 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-semibold'>Hotel</h3>
        <img className='w-full h-full object-cover border-4 shadow-lg' src="https://images.unsplash.com/photo-1565297032488-90722f09db62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />
      </div>
      
    </div>
  )
}

export default Activities