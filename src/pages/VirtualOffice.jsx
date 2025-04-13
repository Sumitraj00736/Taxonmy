import React, { useEffect } from 'react'
import VirtualOfficeBanner from '../components/virtualOffice/VirtualOfficeBanner.jsx'
import SatisfactionSection from '../components/virtualOffice/SatisfactionSection.jsx'
import VirtualOfficePricing from '../components/virtualOffice/VirtualOfficePricing.jsx'

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
