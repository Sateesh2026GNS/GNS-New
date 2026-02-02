import React, { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutUsSection from '../components/AboutUsSection'
import ServicesSection from '../components/ServicesSection'
import HowWeWork from '../components/HowWeWork'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

const scrollWithOffset = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const headerHeight = 80
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerHeight
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}

const Home = () => {
  useEffect(() => {
    // Scroll to hash when landing on the home page with a hash
    const hash = window.location.hash
    if (hash) {
      const id = hash.replace('#', '')
      setTimeout(() => scrollWithOffset(id), 150)
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUsSection />
      <ServicesSection />
      <HowWeWork />
      <CTABanner />
      <Footer />
    </div>
  )
}

export default Home

