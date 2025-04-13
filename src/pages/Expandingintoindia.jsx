import React, { useEffect } from 'react'
import ExpandingIntoIndiaBanner from '../components/expandingIndia/ExpandingIntoIndiaBanner.jsx'
import ExpandingIndiaPricing from '../components/expandingIndia/ExpandingIndiaPricing.jsx'

const Expandingintoindia = () => {
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  return (
    <>
    <ExpandingIntoIndiaBanner/>
    <ExpandingIndiaPricing/>
    </>
  )
}

export default Expandingintoindia
