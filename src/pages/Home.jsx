import React from 'react'
import HeroBanner from '../components/specific/HeroBanner'
import TaxPrepHero from '../components/specific/TaxPrepHero'
import PricingSection from '../components/specific/PricingSection'
import BlogCard from '../components/specific/BlogCard'

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
