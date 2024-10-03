import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Infosection from './components/infosection'
import Works from './components/works'
import Property from './components/property'
import Tape from './components/tape'
import Agents from './components/agents'


const Home = () => {
  return (
    <div>
         
        <Navbar/>
        <Hero/>
        <Infosection/>
        <Works/>

        <Tape/>
        <Property/>
        <Tape/>

        <Agents/>
        

      



    </div>
  )
}

export default Home