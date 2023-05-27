import React from 'react'
import star from '../assets/starwars.jpg'
const Hero = ()=> {
  return (
    <>
    <div className='w-screen h-[calc(100vh-160px)] relative'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='absolute inset-0 bg-black opacity-90'></div>
        <div className='grid'>
          <h1 className='text-white z-10'>AAAA</h1> 
        </div>
      </div>
      <img className='w-full h-full object-cover' src={star} alt="" />
    </div>
  </>
  )
}

export default Hero;
