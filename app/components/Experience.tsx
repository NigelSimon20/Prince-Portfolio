import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import ExperienceCards from './ExperienceCards'
import Media from '../../public/images/Media.png'
import Posetive from '../../public/images/PositiveDynamic.png'
import Combo from '../../public/images/ComboChart.png'
import Email from '../../public/images/Email.png'
import Thumbs from '../../public/images/ThumbsUp.png'
import Analytics from '../../public/images/Analytics.png'


const Experience = () => {
  return (
    <div className='mt-[60px] md:mt-[100px] px-6 md:px-[90px]'>
        <h3 className='font-opensans-medium text-[#2C70AA] text-center text-[25px] mb-3'>Specialized in</h3>
        <h2 className='font-opensans-medium text-[30px] text-center'>WHAT I CAN DO</h2>
        <div className='mt-[30px] md:mt-[60px] md:flex justify-between items-center'>
            <ExperienceCards 
            icon = {Posetive}
            IconHeading = 'Seo'
            IconText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi, veniam aspernatur magni esse soluta quae deserunt tempora deleniti ipsa!'
            />

            <ExperienceCards 
            icon = {Thumbs}
            IconHeading = 'Seo'
            IconText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi, veniam aspernatur magni esse soluta quae deserunt tempora deleniti ipsa!'
            />

            <ExperienceCards 
            icon = {Media}
            IconHeading = 'Seo'
            IconText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi, veniam aspernatur magni esse soluta quae deserunt tempora deleniti ipsa!'
            />
        </div>
        <div className='mt-[0px] md:mt-[45px] md:flex justify-between items-center'>
            <ExperienceCards 
            icon = {Email}
            IconHeading = 'Seo'
            IconText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi, veniam aspernatur magni esse soluta quae deserunt tempora deleniti ipsa!'
            />

            <ExperienceCards 
            icon = {Combo}
            IconHeading = 'Seo'
            IconText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi, veniam aspernatur magni esse soluta quae deserunt tempora deleniti ipsa!'
            />

            <ExperienceCards 
            icon = {Analytics}
            IconHeading = 'Seo'
            IconText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi, veniam aspernatur magni esse soluta quae deserunt tempora deleniti ipsa!'
            />
        </div>
    </div>
  )
}

export default Experience