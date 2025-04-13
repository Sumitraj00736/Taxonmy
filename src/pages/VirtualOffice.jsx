import React, { useEffect } from 'react'
import VirtualOfficeBanner from '../components/virtualOffice/VirtualOfficeBanner'
import SatisfactionSection from '../components/virtualOffice/SatisfactionSection'
import VirtualOfficePricing from '../components/virtualOffice/VirtualOfficePricing'

const VirtualOffice = () => {
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  return (
    <>
    <VirtualOfficeBanner/>
      <SatisfactionSection/>
      <VirtualOfficePricing/>
    </>
  )
}

export default VirtualOffice
