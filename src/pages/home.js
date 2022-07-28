import React from 'react'
import {OurServices, WhyUs, Testimonial, Jumbocard, Faq, Banner} from '../components'


const Home = () => {
  const showButton = true
  return (
    <>
    <Banner showButton={showButton} />
    <OurServices />
    <WhyUs />
    <Testimonial/>
    <Jumbocard />
    <Faq />
    </>
   
    
  )
}

export default Home