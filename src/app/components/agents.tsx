import React from 'react'
import Agent1 from "../images/person1c.jpg"
import Agent2 from "../images/person2c.jpg"
import Agent3 from "../images/person3c.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'


const OurAgents = [
    {picture: Agent1, name : "Mike Fernendo", Experience : "8 Years of Experience"  },
    {picture: Agent3, name : "Jhon Kettely", Experience : "6 Years of Experience"  },
    {picture: Agent2, name : "Abraham Neil", Experience : "5 Years of Experience"  },
]

const Agents = () => {
  return (
    <div className='scroll-smooth' >

        <p className='flex justify-center items-center mt-12 text-[25px] font-mono md:text-[40px] lg:text-[50px] lg:mt-24'>
        - Our Certified Agents
      </p>

<div  className='grid justify-center items-center pb-14 md:grid-cols-2  md:pl-20 md:mt-10 lg:grid-cols-3 lg:pl-24 gap-2 hover:cursor-pointer'>
{OurAgents.map((agent,index)=>(
        <div key={index} className=' relative border-black border-2 my-12  rounded-md  bg-white  w-[250px] md:w-[280px] xl:w-[320px] hover:opacity-70'>
            <Image src={agent.picture} alt='personPicture' className=''/>
            <p className=' absolute size-8 right-3 mt-9 text-green-700'><FontAwesomeIcon icon={faSquareCheck} style={{color: "#15803d",}} /></p>
            <p className='font-semibold text-[20px] pt-3 pl-2 text-center mr-4'>{agent.name}</p>
            <p className="text-gray-500 text-[13px] font-bold pb-5 pl-2 text-center mr-4">{agent.Experience}</p>

        </div>
      ))}

</div>
      


    </div>
  )
}

export default Agents

