import React from 'react';
import Image from 'next/image';
import HeroImage from "../../public/images/hero-image.png"
import VerticalLine from "../../public/images/vline.png"
import DmPic from "../../public/images/rectangle.png"

const Hero = () => {
  return (
    <div className='relative mb-5 md:mb-10'>
        <div className='md:absolute md:right-[160px] text-center md:text-left mt-10 md:mt-0 font-opensans-regular'>
            <p className='text-[30px] relative'>Digital Marketing</p>
            <h1 className='text-[45px] md:text-[70px] relative z-20 bg-[#E0E0E0]'>PORTFOLIO</h1>
            <Image src={DmPic} alt="DmPic" className='hidden md:block md:absolute md:right-[-100px] md:z-10 md:top-[28px] md:bg-[#E0E0E0]' />
        </div>
        <Image src={HeroImage} alt="hero-image" className='w-[80%] md:w-[48%] md:ml-[60px] object-cover md:relative md:top-[160px]' />
        <div className='text-center font-opensans-regular md:absolute md:text-right md:right-0'>
          <h3 className='md:mr-[110px] text-[20px]'>Prince Ruswa</h3>
          <Image src={VerticalLine} alt="vertical Line" className='hidden md:block' />
          <h3 className='md:mr-[110px] text-[20px]'>Digital Marketer</h3>
        </div>
    </div>
  )
}

export default Hero