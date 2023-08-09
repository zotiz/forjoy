import React from 'react'
import 'animate.css'
import { BsRocketFill } from "react-icons/bs"
const Footer = () => {
  
  
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
      
        {/* <a href='#'>
          <BsRocketFill
            size={30}
            className='fixed bottom-14 left-6 rotate-12 animate__animated animate__heartBeat animate__infinite'
          />
        </a> */}
    
      
      <div className='flex gap-4 items-center m-auto justify-center'>
        <img className="w-16 " src="forjoylogo.png" alt="" />
        <h1 className='text-gradient logo text-2xl font-bold'> FORJOY</h1>
      </div>
    </div>
  )
}

export default Footer