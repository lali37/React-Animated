import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font[font-2] flex items-center justify-center gap-2'>
      <p className='absolute lg:w-[17.5vw] w-64 lg:right-10 right-0 bottom-20 lg:bottom-30 font-[font1] lg:text-lg text-xs leading-tight'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.
      </p>
        <div className='lg:border-2 border-1 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-30 flex items-center px-2 pt-1 lg:px-5 border-white rounded-full uppercase'>
            <Link className='text-[3vw] lg:mt-0.5' to='/projects'>Projects</Link>
        </div>
        <div className='lg:border-2 border-1 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-30 flex items-center px-2 pt-1 lg:px-5 border-white rounded-full uppercase'>
            <Link className='text-[3vw] lg:mt-0.5' to='/agence'>Agence</Link>
        </div>
    </div>
  )
}

export default HomeBottomText