import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import About from '../components/About'
import Footer from '../components/Footer'

const scrollWithOffset = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const headerHeight = 80
  const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight
  window.scrollTo({ top, behavior: 'smooth' })
}

const AboutPage = () => {
  const location = useLocation()

  useEffect(() => {
    // Scroll to hash targets when navigating with hash
    const hash = location.hash.replace('#', '')
    if (hash) {
      setTimeout(() => scrollWithOffset(hash), 150)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 pt-32">
        <Breadcrumb />
      </div>
      <About />
      {/* Leadership, Our Works, and Case Studies have dedicated pages/routes */}
      <Footer />
    </div>
  )
}

export default AboutPage

