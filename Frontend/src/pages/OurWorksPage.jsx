import React, { useEffect } from 'react'
import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import OurWorks from '../components/OurWorks'
import Footer from '../components/Footer'

const OurWorksPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 pt-32">
        <Breadcrumb />
      </div>
      <OurWorks />
      <Footer />
    </div>
  )
}

export default OurWorksPage

