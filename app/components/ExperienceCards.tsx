import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'

interface Props {
    icon: StaticImageData,
    IconHeading: string,
    IconText: string
}

const ExperienceCards = ({icon, IconHeading, IconText}: Props) => {
  return (
    <div className='bg-[#E0E0E0] shadow-lg md:w-[30%] px-3 py-5 mt-[20px] md:mt-[0px]'>
        <span className='text-[25px] text-[#2C70AA]'></span>
        <Image src={icon} alt="icon" className='w-[40px] cover'/>
        <h3 className='font-opensans-medium text-[25px] mt-[20px]'>{IconHeading}</h3>
        <p className='font-opensans-light text-[19px] md:text-[18px] mt-[20px]'>{IconText}</p>
    </div>
  )
}

export default ExperienceCards