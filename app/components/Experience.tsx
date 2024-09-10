import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import ExperienceCards from './ExperienceCards'


const Experience = () => {
  return (
    <div className='mt-[60px] md:mt-[100px] px-6 md:px-[90px]'>
        <h3 className='font-opensans-medium text-[#2C70AA] text-center text-[25px] mb-3'>Specialized in</h3>
        <h2 className='font-opensans-medium text-[30px] text-center'>WHAT I CAN DO</h2>
        <div className='mt-[30px] md:mt-[60px] md:flex justify-between items-center'>
            <ExperienceCards 
            icon = {<FaLinkedin />}
            IconHeading = 'Seo'
            IconText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi, veniam aspernatur magni esse soluta quae deserunt tempora deleniti ipsa!'
            />

            <ExperienceCards 
            icon = {<FaLinkedin />}
            IconHeading = 'Seo'
            IconText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi, veniam aspernatur magni esse soluta quae deserunt tempora deleniti ipsa!'
            />

            <ExperienceCards 
            icon = {<FaLinkedin />}
            IconHeading = 'Seo'
            IconText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi, veniam aspernatur magni esse soluta quae deserunt tempora deleniti ipsa!'
            />
        </div>
        <div className='mt-[0px] md:mt-[45px] md:flex justify-between items-center'>
            <ExperienceCards 
            icon = {<FaLinkedin />}
            IconHeading = 'Seo'
            IconText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi, veniam aspernatur magni esse soluta quae deserunt tempora deleniti ipsa!'
            />

            <ExperienceCards 
            icon = {<FaLinkedin />}
            IconHeading = 'Seo'
            IconText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi, veniam aspernatur magni esse soluta quae deserunt tempora deleniti ipsa!'
            />

            <ExperienceCards 
            icon = {<FaLinkedin />}
            IconHeading = 'Seo'
            IconText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi, veniam aspernatur magni esse soluta quae deserunt tempora deleniti ipsa!'
            />
        </div>
    </div>
  )
}

export default Experience