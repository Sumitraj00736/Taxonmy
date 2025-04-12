import React, { useEffect } from 'react'
import ContactForm from '../components/contactUs/Contactform'
import ContactBanner from '../components/contactUs/ContactBanner'

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
