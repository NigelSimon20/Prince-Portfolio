import React from 'react';
import Image from 'next/image';
import HeroImage from "../../public/images/hero-image.png"
import DmPic from "../../public/images/rectangle.png"

const Hero = () => {
  return (
    <div className='h-[100vh] relative mb-5'>
        <div className='md:absolute md:right-[160px] text-center md:text-left mt-10 md:mt-0 font-opensans-regular'>
            <p className='text-[30px] relative'>Digital Marketing</p>
            <h1 className='text-[45px] md:text-[70px] relative z-20 bg-[#E0E0E0]'>PORTFOLIO</h1>
            <Image src={DmPic} alt="DmPic" className='hidden md:block md:absolute md:right-[-100px] md:z-10 md:top-[28px] md:bg-[#E0E0E0]' />
        </div>
        <Image src={HeroImage} alt="hero-image" className='w-[80%] md:w-[49%] md:absolute md:bottom-[-10px] left-[90px] object-cover' />
    </div>
  )
}

export default Hero