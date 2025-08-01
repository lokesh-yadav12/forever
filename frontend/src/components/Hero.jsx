import React from 'react'
import { assets } from '../assets/assets.js'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 w-full'>
    {/* hero left side */}
    <div className='w-full sm:w-1/2 flex flex-col items-center justify-center py-10 sm:py-0 text-center sm:text-left'>
        <div className='text-[#414141]'>
            <div className='flex items-center gap-2 justify-center sm:justify-start'>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
            </div>
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
            <div className='flex items-center gap-2 justify-center sm:justify-start'>
                <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
            </div>
        </div>
    </div>
    {/* hero right side */}
    <img src={assets.hero_img} alt='' className='w-full sm:w-1/2' />
</div>

  )
}

export default Hero