import React from 'react'
import HeroSection from '../components/HeroSection'
import Stats from '../components/Stats'
import WhyChooseUs from '../components/WhyChooseUs'
import FeaturedProperties from '../components/FeaturedProperties'
import Contact from '../components/Contact'
import AboutUs from '../components/AboutUs'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Stats/>
        <WhyChooseUs/>
        <AboutUs/>
        <FeaturedProperties/>
        <Contact/>
    </div>
  )
}

export default Home