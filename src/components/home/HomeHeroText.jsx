import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] mt-100 lg:mt-0 pt-1 text-center'>
        <div className='lg:text-[6vw] text-[9.5vw] justify-center flex items-center uppercase lg:leading-[5vw] leading-[8vw]'>Innovating ideas</div>
        <div className='lg:text-[6vw] text-[9.5vw] justify-center flex items-start uppercase lg:leading-[5vw] leading-[8vw]'>into<div className='h-[4vw] w-[9vw] rounded-full mt-1 overflow-hidden'><Video /></div>impactful</div>
        <div className='lg:text-[6vw] text-[9.5vw] justify-center flex items-center uppercase lg:leading-[5vw] leading-[8vw]'>digital experiences</div>
    </div>
  )
}

export default HomeHeroText
