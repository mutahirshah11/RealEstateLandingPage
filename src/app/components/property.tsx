import React from 'react'
import Image from 'next/image'
import house2 from '../images/2.jpeg'
import house3 from '../images/3.jpeg'
import house4 from '../images/4.jpeg'
import house6 from '../images/6.jpeg'
import house7 from '../images/7.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Myproperty = [
  { photo: house6, name: "Dream Abode", location: "Houston, Texas", price: "$200,000", details: "See Details" },
  { photo: house2, name: "Modern Marvel", location: "Miami, Florida", price: "$300,000", details: "See Details" },
  { photo: house3, name: "Urban Retreat", location: "New York, NY", price: "$500,000", details: "See Details" },
  { photo: house4, name: "Cozy Corner", location: "Austin, Texas", price: "$150,000", details: "See Details" },
  { photo: house7, name: "Estate Elegance", location: "Los Angeles, California", price: "$1,200,000", details: "See Details" },
  
]

const Property = () => {
  return (
    <div id='listings'>
      <p className='flex justify-center items-center mt-12 text-[25px] font-mono md:text-[40px] lg:text-[50px] lg:mt-24'>
        - Featured Properties
      </p>
      
      <div className=" grid justify-center items-center md:grid-cols-2  md:pl-24 md:mt-10 lg:grid-cols-3 lg:pl-24 gap-2 hover:cursor-pointer ">
        {Myproperty.map((property, index) => (

          <div key={index} className=" border-black border-2 mt-12 rounded-md  bg-white  w-[250px]  hover:animate-jello ">

             
            <Image src={property.photo} alt='House Image ' className='h-[200px] ' />
            <p className=" font-semibold text-[20px] pl-2">{property.name}</p>
            <p className="text-gray-500 text-[13px] font-sans pl-2 ">{property.location}</p>
            <p className="text-green-500  font-mono pl-2 mt-3 text-[15px]" >{property.price}</p>
            <p className="text-blue-600 cursor-pointer text-center py-5 font-semibold hover:bg-blue-50 flex justify-center gap-2"> {property.details} <FontAwesomeIcon icon={faArrowRight} className='size-4  mt-1' /></p>
          
          </div>
        ))}
      </div>
    </div>
  )
}

export default Property
