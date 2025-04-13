import React from 'react'
import HeroBanner from '../components/specific/HeroBanner.jsx'
import TaxPrepHero from '../components/specific/TaxPrepHero.jsx'
import PricingSection from '../components/specific/PricingSection.jsx'
import BlogCard from '../components/specific/BlogCard.jsx'

const Home = () => {
  return (
    <>
     <TaxPrepHero/>
     <HeroBanner/>
     <PricingSection/>
     <BlogCard/>
    </>
  )
}

export default Home
