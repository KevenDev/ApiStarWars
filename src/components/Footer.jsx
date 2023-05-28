import React from 'react'
import LogoStarWars from "../assets/logo.png"
import sabreIcon from "../assets/sabreIcon.png"

const Footer = ()=> {
  return (
    <>
    <div className='bg-black absolute  bottom-0 w-screen h-20 flex justify-center items-center'>
      <img className='h-16 text-yellow-400' src={sabreIcon} alt="" />
    </div>
    </>
    
  )
}

export default Footer;