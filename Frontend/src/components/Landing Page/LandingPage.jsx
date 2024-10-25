import React from 'react'
import Navbar from '../Navbar'
import Section1 from '../Landing Page/components/section1.jsx'
import KeyFeatures from './components/KeyFeatures/KeyFeatures.jsx'
import Testimonials from './components/Testimonials.jsx'
import Section2 from './components/section2.jsx'
import Footer from '../Footer.jsx'


function LandingPage() {
  return (
    <>
    <Navbar />
    <Section1 />
    <KeyFeatures />
    <Testimonials/>
    <Section2 />
    <Footer />
    </>
  )
}

export default LandingPage