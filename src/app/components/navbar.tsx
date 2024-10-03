import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import bg from "../../images/hpage.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navlinks = [
  { id: 1, url: '#', label: 'Home' },
  { id: 2, url: '#', label: 'Listings' },
  { id: 3, url: '#', label: 'Agents' },
  { id: 4, url: '#', label: 'Contact Us' ,  }
]

const Navbar = () => {
  return (
    <div className='  bg-slate-200 shadow-black/50 shadow-xl w-full py-1 animate-flipX  '>
      <nav className='flex text-center text-black justify-between w-[100%]  h-[40px] md:h-[60px]'>
        <div className='flex'>
          {/* logo */}

          <button className='font-bold text-black text-[13px] pl-3 pt-2 md:text-[25px] md:ml-5 lg:text-[30px] lg:ml-6' >WestOpen</button>
          <FontAwesomeIcon icon={faHouse}  className='font-bold text-green-600 size-6 mt-[6px]  pt-2 md:size-8 md:mt-3 lg:size-9 lg:mt-3 ' />
        </div>

        {/* navbar elements */}
        <div className=' text-black flex text-[10px]  mt-3 pr-2 md:text-[15px] md:gap-6 md:mt-[18px] md:pr-3 lg:text-[17px] lg:mt-4 lg:mr-10 lg:gap-10'>
          {Navlinks.map((navlink) => (
            <Link key={navlink.id} href={navlink.url}>
              <button className= 'hover:underline decoration-black black decoration-2  hover:bg-slate-400/40 px-3 py-1 rounded-sm font-bold '>{navlink.label}</button>
            </Link>

          ))}
              {/* bars

              <div>
             <FontAwesomeIcon icon={faBars}  className='text-white font-bold size-4 lg:hidden'/>
                
             </div>  
              */}

        </div>
      </nav>
    </div>
  )
}

export default Navbar