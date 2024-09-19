import React from 'react'
import Link from 'next/link'

interface Icons{
    IconType: React.ReactNode,
    linkUrl: string,
    IconText: string
}

const ContactIcons = ({IconType, IconText, linkUrl}: Icons) => {
  return (
    <Link href={linkUrl} className='flex align-center mb-5'>
        <span className='text-[25px] text-[#2C70AA]'>{IconType}</span>
        <p className='font-opensans-light text-[19px] md:text-[18px] ml-[25px]'>{IconText}</p>
    </Link>
  )
}

export default ContactIcons