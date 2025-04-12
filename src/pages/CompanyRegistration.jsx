import React, { useEffect } from 'react'
import RegistrationPricing from '../components/registerCompany/RegistrationPricing.jsx'
import RegistrationBanner from '../components/registerCompany/RegistrationBanner.jsx'
const CompanyRegistration = () => {
     useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
    
  return (

    <>
      <RegistrationBanner/>
      <RegistrationPricing/>
    </>
  )
}

export default CompanyRegistration
