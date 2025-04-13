import React, { useEffect } from 'react'
import ExpandingIntoIndiaBanner from '../components/ExpandingIndia/ExpandingIntoIndiaBanner'
import ExpandingIndiaPricing from '../components/expandingIndia/ExpandingIndiaPricing'

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
