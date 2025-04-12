import React, { useEffect } from 'react'
import RegistrationBanner from '../components/registerCompany/registrationBanner.jsx'
import RegistrationPricing from '../components/registerCompany/RegistrationPricing.jsx'

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
