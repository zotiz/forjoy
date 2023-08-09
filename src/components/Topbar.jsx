import React from 'react'
import { BsFillTelephoneFill,BsClock} from "react-icons/bs";
const Topbar = () => {
  return (
    <div className='flex justify-between items-center px-6 py-2'>
      <div className='w-12 md:w-16 flex gap-4 items-center'>
        <img src="forjoylogo.png" alt="" />
        <h1 className=' text-gradient logo text-2xl font-bold '>FORJOY</h1>
      </div>
      <div className='flex gap-6 items-center'>
        <div className='hidden md:flex items-center gap-2'>
          <BsClock className='text-[var(--primary-dark)]'/>
          <p className='text-sm text-gray-700'>9AM - 5AM</p>
        </div>
        <div className='hidden md:flex gap-2 items-center'>
          <BsFillTelephoneFill className='text-[var(--primary-dark)]'/>
          <p className='text-sm text-gray-700'>1-888-777-6666</p>
        </div>
        <button className='hidden xs:flex rounded-sm'>Get a Free Quote</button>
      </div>
    </div>
  )
}

export default Topbar