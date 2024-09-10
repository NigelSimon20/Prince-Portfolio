import React from 'react'

interface Props {
    icon: React.ReactNode,
    IconHeading: string,
    IconText: string
}

const ExperienceCards = ({icon, IconHeading, IconText}: Props) => {
  return (
    <div className='bg-[#E0E0E0] shadow-lg md:w-[30%] px-3 py-5 mt-[20px] md:mt-[0px]'>
        <span className='text-[25px]'>{icon}</span>
        <h3 className='font-opensans-medium text-[25px] mt-[20px]'>{IconHeading}</h3>
        <p className='font-opensans-light text-[19px] md:text-[18px] mt-[20px]'>{IconText}</p>
    </div>
  )
}

export default ExperienceCards