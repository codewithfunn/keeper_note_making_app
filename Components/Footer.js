import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className=' bg-Orange-Custom  shadow-orange-400 shadow-2xl rounded-t-3xl '>
      <p className='text-center  py-4 '>Copyright ⓒ {year}</p> 
    </div>
  )
}

export default Footer