import React from 'react'
import Image from 'next/image'
import ContactIcons from './ContactIcons'
import ContactPic from '../../public/images/ContactPic.png'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io'

const Contact = () => {
  return (
    <div className='px-[30px] md:px-[100px]'>
         <h3 className='font-opensans-medium text-[#2C70AA] text-center text-[25px] mb-3'>Contact</h3>
         <h2 className='font-opensans-medium text-[30px] text-center'>LETS GET IN TOUCH</h2>
         <div className='md:flex md:justify-center md:align-center'>
            <div className='md:w-[50%]'>
               <Image src={ContactPic} alt="Contact Pic" className='mt-[30px]' />
            </div>
            <div className='mt-[50px] md:mt-[0px] md:w-[50%] h-[100] md:flex md:flex-col md:justify-center md:align-center md:ml-[60px]'>
                <ContactIcons 
                linkUrl='/'
                IconType={<FaLinkedin />} 
                IconText="Linkedin" 
                />

                <ContactIcons
                 linkUrl='/'
                 IconType={<FaXTwitter />}
                 IconText="Twitter"
                />

                <ContactIcons
                 linkUrl='/'
                 IconType={<IoLogoInstagram />}
                 IconText="Instagram"
                />

                <ContactIcons
                 linkUrl='/'
                 IconType={<FaFacebookSquare />}
                 IconText="Facebook"
                />
            </div>
         </div>
    </div>
  )
}

export default Contact