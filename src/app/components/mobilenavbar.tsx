import React from 'react'
import Link from 'next/link'



const Navlinks = [
    { id: 1, url: '#', label: 'Home' },
    { id: 2, url: '#', label: 'Listings' },
    { id: 3, url: '#', label: 'Agents' },
    { id: 4, url: '#', label: 'Contact Us' }
  ]

const MobileNav = () => {
  return (
    <div>
        {/* black overlay */}
        <div className=' transform fixed transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen'></div>
    
       {/* navlinks by the side  */}
      <div className='text-white transform transition-all duration-500 delay-300 fixed flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-[#c1205e] space-y-6 z-[10000]'></div>
      {Navlinks.map((navlink) => (
            <Link key={navlink.id} href={navlink.url}>
              <button className= 'text-[20px] ml-12 border-[1.5px] pb-1 w-fit border-white sm:text-[30px] hover:bg-slate-100/30 px-3 py-1 rounded-sm font-black '>{navlink.label}</button>
            </Link>

          ))}
    
    </div>
  )
}

export default MobileNav