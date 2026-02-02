import React, { useEffect } from 'react'
import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 pt-32">
        <Breadcrumb />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default ContactPage

