import React from 'react'

const Booking = () => {
  return (
    <div id='deals' className='max-w-[1140px] m-auto w-full p-4'>
      <form action="" className='lg:flex lg:justify-between gap-2 w-full items-center'>
        <div className='flex flex-col my-2 py-2'>
         <label htmlFor="destination">Destination</label>
         <select className='lg:w-[300px] md:w-full border rounded-md p-2' name="destination" id="destination">
          <option value="maldivs">Maldivs</option>
          <option value="keywest">Key West</option>
          <option value="cappadocia">Cappadocia</option>
          <option value="bali">Bali</option>
         </select>
        </div>
        <div className='flex gap-2 w-full flex-col xs:flex-row'>
          <div className='flex flex-col   w-full lg:max-w-[250px] my-2 '>
            <label htmlFor="">Check-In</label>
            <input className='border rounded-md p-2 w-full' type="date" />
          </div>
          <div className='flex flex-col   w-full lg:max-w-[250px] my-2 '>
            <label htmlFor="checkout">Check-Out</label>
            <input type="date" className='rounded-md p-2 border w-full' />
          </div> 
        </div>
         <div className='flex w-full flex-col my-2 '>
          <label>Search</label>
          <button className='rounded-sm py-2'>Rates & Availabilities</button>
         </div>
      </form>
    </div>
  )
}

export default Booking