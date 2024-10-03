import React from 'react'

const info  = [

  { base:'Clients' , title: "110+" },
  { base:'Properties' , title: "230+" },
  { base:'Growth' , title: "56%" },
  { base:'Experience' , title: "5yrs+" }
]

const Infosection = () => {
  return (
   
        <div className='bg-gray-900  text-white flex justify-evenly mb-5 '>
         {info.map((info =>(
          <div className='hover:cursor-pointer'>
            <p className='font-bold text-[20px] md:text-[40px] lg:text-[50px] mt-5'>{info.title}</p>
            <p className='font-thin md:text-[15px] lg:text-[25px]  text-gray-400 text-left mb-3 '>{info.base}</p>
          </div>
          
         )))}
            
        </div>

       
   
  )
}

export default Infosection