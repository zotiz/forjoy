import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
      <h2 className='text-center text-gray-700 p-4 '>Gallery</h2>
      <div className='grid gap-4 sm:grid-cols-5'>
       <div className='sm:col-span-3 col-span-2 row-span-2'>
        <img src="https://images.unsplash.com/photo-1602002418679-43121356bf41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxSZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="" className='w-full h-full object-cover'/>
       </div>
       <div>
        <img src="https://images.unsplash.com/photo-1573663520878-8c38b10264fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxSZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="" className='w-full h-full object-cover'/>
       </div>
       <div>
        <img src="https://images.unsplash.com/photo-1588210485162-f52f18aa02c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHxSZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="" className='w-full h-full object-cover'/>
       </div>
       <div>
        <img src="https://images.unsplash.com/photo-1542319282-581e6a85bea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHxSZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="" className='w-full h-full object-cover'/>
       </div>

       <div>
        <img src="https://plus.unsplash.com/premium_photo-1678900924432-cb086c16e063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE2fHxSZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="" className='w-full h-full object-cover'/>
       </div>
       <div>
        <img src="https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHxSZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="" className='w-full h-full object-cover'/>
       </div>
       <div>
        <img src="https://images.unsplash.com/photo-1605537964076-3cb0ea2ff329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU0fHxSZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="" className='w-full h-full object-cover'/>
       </div>
       <div>
        <img src="https://images.unsplash.com/photo-1514862461281-d9a41da4180e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE0fHxSZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="" className='w-full h-full object-cover'/>
       </div>
       <div>
        <img src="https://images.unsplash.com/photo-1602661200615-bbaf890d3f72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjg2fHxSZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="" className='w-full h-full object-cover'/>
       </div>
       <div>
        <img src="https://images.unsplash.com/photo-1520260022311-3babdaa7d71e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjg1fHxSZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="" className='w-full h-full object-cover'/>
       </div>
      </div>
    </div>
  )
}

export default Gallery