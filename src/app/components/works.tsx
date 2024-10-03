import React from 'react'

const howItWorks = [
    {heading: "Step 1 ✅" , desciption:"Browse through our listings to find your dream property"},
    {heading: "Step 2 ✅" , desciption:"Schedule a visit to see the property in person"},
    {heading: "Step 3 ✅" , desciption:"Make an offer and secure your new home right away :)"},
];


const Works = () => {
    return (
      <div className=''>
        <p className='flex justify-center items-center mt-12 text-[30px] font-mono md:text-[40px] lg:text-[50px] lg:mt-24  md:mr-6  '>- How It Works </p>
        
        <div className='grid grid-cols-1 md:grid-cols-3  justify-items-center '>
          {howItWorks.map((HIT) => (
            <button key={HIT.heading} className='group items-center grid px-4 mt-5 w-[170px] h-[140px] md:w-[200px] md:h-[150px] md:mt-14 lg:w-[250px] lg:h-[170px] bg-white hover:bg-blue-200 border-black border-[3px] rounded-lg hover:animate-flipY '>
              <p className='flex justify-center items-center font-extrabold text-[20px] text-green-500 group-hover:text-green-700 md:text-[25px] lg:text-[27px]'>{HIT.heading}</p>
              <p className='text-center font-semibold text-gray-400 group-hover:text-black md:text-[17px] lg:text-[20px] '>{HIT.desciption}</p>
            </button>
            
          ))}
          
        </div>
      </div>
    )
  }
  

export default Works