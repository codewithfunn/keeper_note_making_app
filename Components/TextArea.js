import React from 'react'

const TextArea = () => {
  return (
    <div className=''>

      <form className="flex flex-col relative w-2/5 p-3 mx-auto bg-white m-6 rounded-2xl shadow-lg shadow-gray-400">
       
        <input type="text" name="" id="" placeholder='Title' className=' font-serif font-medium text-xl focus:outline-none' />
        <textarea name="" id="" rows={3} className=' pb-4 font-serif font-medium text-lg    transition
        ease-in-out focus:outline-none  ' placeholder='Take a note...' ></textarea>
        
        <button className='rounded-full bg-Orange-Custom w-fit  text-white mt-1 p-2  bg-none absolute top-32 right-6 '>Add</button>
      </form>
    </div>
  )
}

export default TextArea