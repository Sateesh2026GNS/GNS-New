import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleStartProject = () => {
    if (location.pathname === '/') {
      // If on home page, scroll to contact form
      const element = document.getElementById('contact-form')
      if (element) {
        const headerHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      } else {
        // If contact form not found, navigate to contact page
        navigate('/contact')
      }
    } else {
      // If on other page, navigate to contact page
      navigate('/contact')
    }
  }

  const handleOurWork = () => {
    navigate('/our-works')
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://asvatthah.com/images/2.jpg"
          alt="Technology and business solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/75 to-gray-900/85"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
            Your Search For Technology And Business Solutions Ends Here
          </p>
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transforming ideas into inspiring experiences
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
            We are more than just a company. At GNS Software, we empower businesses to achieve remarkable success through innovation and excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleStartProject}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Start a Project
            </button>
            <button
              onClick={handleOurWork}
              className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
