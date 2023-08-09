import React,{useState} from 'react'
import {FaBars, FaFacebookF, FaTwitter, FaGooglePlus, FaInstagram} from 'react-icons/fa'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNavbar = () =>{
    setNav(!nav)
  }
  return (
    <div className='w-full min-h-[50px] flex absolute z-10 justify-between items-center text-white bg-gray-700/70'>
      <ul className='hidden sm:flex px-2'>
      <li>
        <a className=' py-2 hover:border-b-2'  href="#">Home</a>
      </li>
      <li>
        <a className=' py-2 hover:border-b-2' href="#gallery">Gallery</a>
      </li>
      <li>
        <a className=' py-2 hover:border-b-2'  href="#deals">Deals</a>
      </li>
      <li>
        <a className=' py-2 hover:border-b-2'  href="#contact">Contact</a>
      </li>
      </ul>
      <div className='flex justify-between'>
        <FaFacebookF  className='mx-4 cursor-pointer hover:text-gray-300'/>
        <FaGooglePlus className='mx-4 cursor-pointer hover:hover:text-gray-300'/>
        <FaTwitter className='mx-4 cursor-pointer hover:text-gray-300'/>
        <FaInstagram className='mx-4 cursor-pointer hover:text-gray-300'/>
      </div>
      {/* Hamburger Icon */}
      <div onClick={handleNavbar} className='sm:hidden z-10'>
        <FaBars size={20} className='mx-4 cursor-pointer'/>
      </div>
      <div  className={
        nav ? 'overflow-y-hidden md:hidden flex ease-in duration-500 absolute text-gray-300 left-0 top-0 h-screen w-full bg-black/90 px-4 py-7  flex-col': 'absolute top-0 h-screen left-[-100%] ease-in-out duration-500'
        }>
      <ul onClick={()=>setNav(false)} className='w-full h-full text-center pt-12 '>
      <li    className='text-xl py-8 h-15'>
        <a href="#" className='py-2 px-2 hover:border-b-2'>Home</a>
      </li>
      <li   className='text-xl py-8'>
        <a href="#gallery" className='py-2 px-2 hover:border-b-2 duration-100 ease-in'>Gallery</a>
      </li>
      <li  className='text-xl py-8'>
        <a href="#deals" className='py-2 px-2 hover:border-b-2 duration-100 ease-in'>Deals</a>
      </li>
      <li className='text-xl py-8'>
        <a href="#contact" className='py-2 px-2 hover:border-b-2 duration-100 ease-in'>Contact</a>
      </li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar