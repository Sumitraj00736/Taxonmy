import React, { useEffect } from 'react'
import ContactForm from '../components/contactUs/Contactform.jsx'
import ContactBanner from '../components/contactUs/ContactBanner.jsx'

const Contactus = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <ContactBanner />
      <ContactForm />
    </>
  )
}

export default Contactus
