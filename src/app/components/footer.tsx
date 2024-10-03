import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


const Footer = () => (
  <footer className='bg-slate-300/70 '>

    <div className='flex justify-center '>
      {/* logo */}

      <button className='font-bold text-black text-[20px] pl-3 pt-2 md:text-[22px] md:ml-5 lg:text-[25px] lg:ml-6'>WestOpen</button>
      <FontAwesomeIcon icon={faHouse} className='font-bold text-green-600 size-7 mt-[4px]  pt-2 md:size-8 md:mt-1  lg:mt-1.5 ' />
    </div>
    <div className='text-[15px] text-center  mt-1 opacity-60 text-black h-6 md:ml-7 lg:text-[16px]'> &copy; 2024 . All Rights Reserved  </div>
    <div>
    
    </div>
  </footer>
)

  export default Footer ; 