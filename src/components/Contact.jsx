import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='max-w-[1140px] m-auto w-full p-4 py-16'>
      <h2 className='text-center text-gray-700'>Send a message</h2>
      <p className='text-center text-gray-700 py-2'>We'r standing by!</p>
      <div className='grid md:grid-cols-2'>
        <img src="https://images.unsplash.com/photo-1514862461281-d9a41da4180e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE0fHxSZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="" className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'/>
        <form action="">
          <div  className='grid  grid-cols-2'>
            <input className="border m-2 p-2 col-span-2 xs:col-span-1"  type="text" placeholder='First Name'/>
            <input  className="border m-2 p-2 col-span-2 xs:col-span-1" type="text" placeholder='Last Name'/>
            <input className="border m-2 p-2 col-span-2 xs:col-span-1" type="email" placeholder='Email' />
            <input className="border m-2 p-2 col-span-2 xs:col-span-1" type="tel" placeholder='Phone' />
            <input className="border col-span-2 p-2 m-2" type="text" placeholder='Address'/>
            <textarea className='border col-span-2 m-2 p-2' name="" id="" cols="30" rows="10" placeholder='message...'></textarea>
            <button className='m-2 col-span-2 rounded-sm'>Submit</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Contact