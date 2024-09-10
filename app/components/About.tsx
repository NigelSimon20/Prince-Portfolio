import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import princeImage from '../../public/images/prince.png'

const About = () => {
    const icons = [
        { label: <FaFacebookSquare />, href: '/' },
        { label: <FaXTwitter />, href: '/' },
        { label: <IoLogoInstagram />, href: '/' },
        { label: <FaLinkedin />, href: '/' },
    ];

  return (
    <div className='text-center flex flex-col items-center md:text-left px-5 md:px-[0px] lg:px-[80px] md:flex-row md:mt-[200px]'>
        <div className='md:w-[50%] md:ml-5 md:flex md:flex-col md:justify-center'>
            <h2 className='text-3xl font-opensans-medium mb-[20px] md:mb-[40px]'>About me</h2>
            <p className='font-opensans-regular mb-[20px] text-[18px] md:text-[20px] md:mb-[40px]'>Enthusiastic and driven Digital Marketer specializing in SEO,Content Marketing and Google Analytics. Optimizing websitecontent for search engines, developing engaging content strategies and analyzing web traffic patterns to optimize marketing efforts</p>
            <div className='flex justify-center items-center md:justify-start mb-[20px] space-x-5 md:mb-[40px]'>
                {icons.map((icon) => (
                    <Link key={icon.href} href={icon.href} className='text-[30px]'>
                        {icon.label}
                    </Link>
                ))}
            </div>
            <Link href={`/`} className='block font-opensans-regular mb-[20px] text-[18px] bg-[#2C70AA] text-white py-2 px-4 rounded md:w-[36%] text-center md:mb-[40px]' >Download CV</Link>
        </div>
        <div className="md:w-[50%] md:flex md:justify-end ">
        <Image src={princeImage} alt="Prince" />
        </div>
    </div>
  )
}

export default About