import React from 'react'
import Image from 'next/image'
import mumbai from '../images/mbcity.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'


const Hero = () => {
  return (
    <div className=''>
      <div className='relative'>
        <div className='max-w-[1500px] h-[auto] animate-fadeInUp duration-[2000ms] '>
          <Image src={mumbai} alt='mbcity' className='h-[fill] opacity-80 lg:h-[515px] ' />
        </div>   

        {/* heading */}
        <div className='absolute top-5 w-full h-full md:mt-5 animate-fadeIn '>
          <h1 className='font-bold text-black text-[22px] text-center md:text-[36px] lg:text-[55px]'>Find Real Estate with Ease!</h1>
          <p className='text-[8px] font-normal text-black text-center md:text-[18px] lg:text-[20px]'>Explore the best properties at unbeatable prices, Your perfect home is just a click away!</p>
        </div>

        {/* search bar */}
        
        
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center p-4 gap-3 w-[300px] h-[70px] mt-10 md:w-[600px] md:h-[80px] lg:w-[750px] lg:h-[95px] bg-slate-100/60 rounded-lg border-black border-2 animate-fadeIn  '>
        
        
          <div className="flex flex-col items-center md:text-[15px]">
            <label className="text-black mb-1 text-[10px] md:text-[15px]  font-bold">Location</label>
            <input type="text" placeholder=' ' className='w-16 h-8 pl-1 md:w-36 md:h-12 lg:w-40 lg:h-16 bg-slate-100 border-black border-[1px] rounded-sm ' />
          </div>
          
          <div className="flex flex-col items-center ">
            <label className="text-black mb-1 text-[10px] md:text-[15px] font-bold">Property </label>
            <input type="text" placeholder=' ' className='w-16 h-8 pl-1 md:w-36 md:h-12 lg:w-40 lg:h-16 bg-slate-100 border-black border-[1px] rounded-sm ' />
          </div>
          
          <div className="flex flex-col items-center">
            <label className="text-black mb-1 text-[10px] md:text-[15px] font-bold">$ Pricing </label>
            <input type="number" placeholder=' ' className='w-16 h-8 pl-1 md:w-36 md:h-12 lg:w-40 lg:h-16 bg-slate-100 border-black border-[1px] rounded-sm' />
          </div>
          
          <button className="w-10 h-9 mt-2 md:w-14 md:h-14 lg:w-16 lg:h-16 lg bg-blue-400 flex items-center justify-center md:mt-0 lg:mt-0 lg:ml-8 border-black border-[3px] rounded-full hover:bg-blue-500">
          <FontAwesomeIcon icon={faMagnifyingGlass}  className='size-5 md:size-7 lg:size-8 '/>
          </button>
        </div>

        {/* chat fixed button */}

        <button className=' w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-green-700 rounded-full text-white flex justify-center items-center border-black border-[2px]  bottom-5 right-5 z-50 fixed opacity-80'>
        
        <div><FontAwesomeIcon icon={faCommentDots} className='w-6 h-6 md:w-10 md:h-10 ' /></div>
        
        </button>
        

      </div>
    </div>
  )
}

export default Hero
