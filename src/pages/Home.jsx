import React from 'react'
import HeroSection from '../components/HeroSection'
import Stats from '../components/Stats'
import WhyChooseUs from '../components/WhyChooseUs'
import FeaturedProperties from '../components/FeaturedProperties'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Stats/>
        <WhyChooseUs/>
        <FeaturedProperties/>
    </div>
  )
}

export default Home