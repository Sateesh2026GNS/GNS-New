import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (id) => {
    const navigateAndScroll = () => {
      const element = document.getElementById(id)
      if (element) {
        const headerHeight = 80 // Approximate fixed header height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }

    if (location.pathname === '/') {
      navigateAndScroll()
    } else {
      navigate(`/#${id}`)
      setTimeout(() => navigateAndScroll(), 150)
    }

    setIsMenuOpen(false)
    setIsAboutDropdownOpen(false)
    setIsServicesDropdownOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="/" 
              onClick={(e) => { 
                e.preventDefault(); 
                navigate('/');
                if (location.pathname === '/') {
                  scrollToSection('home');
                }
              }} 
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-200"
            >
              <Logo size="small" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault()
                navigate('/')
                setIsMenuOpen(false)
                setIsAboutDropdownOpen(false)
                setTimeout(() => scrollToSection('home'), 150)
              }}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </a>
            
            {/* About Us Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <a 
                href="/about" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  setIsAboutDropdownOpen(!isAboutDropdownOpen);
                  navigate('/about');
                }} 
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium flex items-center gap-1"
              >
                About Us
                <svg className={`w-4 h-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Dropdown Menu */}
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                  <a
                    href="/our-works"
                    onClick={(e) => { e.preventDefault(); navigate('/our-works'); setIsAboutDropdownOpen(false) }}
                    className="block px-4 py-2 text-blue-900 font-bold hover:bg-gray-50 transition-colors"
                  >
                    Our Works
                  </a>
                  <a
                    href="/case-studies"
                    onClick={(e) => { e.preventDefault(); navigate('/case-studies'); setIsAboutDropdownOpen(false) }}
                    className="block px-4 py-2 text-blue-900 font-bold hover:bg-gray-50 transition-colors"
                  >
                    Case Studies
                  </a>
                  <a
                    href="/leadership-team"
                    onClick={(e) => { e.preventDefault(); navigate('/leadership-team'); setIsAboutDropdownOpen(false) }}
                    className="block px-4 py-2 text-blue-900 font-bold hover:bg-gray-50 transition-colors"
                  >
                    Leadership Team
                  </a>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <a 
                href="/services" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  setIsServicesDropdownOpen(!isServicesDropdownOpen);
                  navigate('/services');
                }} 
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium flex items-center gap-1"
              >
                Services
                <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                  <a
                    href="/services/web-development"
                    onClick={(e) => { 
                      e.preventDefault(); 
                      setIsServicesDropdownOpen(false);
                      navigate('/services/web-development');
                    }}
                    className="block px-4 py-2 text-blue-900 font-bold hover:bg-gray-50 transition-colors"
                  >
                    Custom Web Development
                  </a>
                  <a
                    href="/services/ecommerce"
                    onClick={(e) => { 
                      e.preventDefault(); 
                      setIsServicesDropdownOpen(false);
                      navigate('/services/ecommerce');
                    }}
                    className="block px-4 py-2 text-blue-900 font-bold hover:bg-gray-50 transition-colors"
                  >
                    E-Commerce Solutions
                  </a>
                  <a
                    href="/services/web-app"
                    onClick={(e) => { 
                      e.preventDefault(); 
                      setIsServicesDropdownOpen(false);
                      navigate('/services/web-app');
                    }}
                    className="block px-4 py-2 text-blue-900 font-bold hover:bg-gray-50 transition-colors"
                  >
                    Web Application Development
                  </a>
                  <a
                    href="/services/seo-marketing"
                    onClick={(e) => { 
                      e.preventDefault(); 
                      setIsServicesDropdownOpen(false);
                      navigate('/services/seo-marketing');
                    }}
                    className="block px-4 py-2 text-blue-900 font-bold hover:bg-gray-50 transition-colors"
                  >
                    SEO & Digital Marketing
                  </a>
                  <a
                    href="/services/work-monitoring"
                    onClick={(e) => { 
                      e.preventDefault(); 
                      setIsServicesDropdownOpen(false);
                      navigate('/services/work-monitoring');
                    }}
                    className="block px-4 py-2 text-blue-900 font-bold hover:bg-gray-50 transition-colors"
                  >
                    Work Monitoring Tool
                  </a>
                  <a
                    href="/services/website-maintenance"
                    onClick={(e) => { 
                      e.preventDefault(); 
                      setIsServicesDropdownOpen(false);
                      navigate('/services/website-maintenance');
                    }}
                    className="block px-4 py-2 text-blue-900 font-bold hover:bg-gray-50 transition-colors"
                  >
                    Website Maintenance
                  </a>
                </div>
              )}
            </div>
            <a
              href="/about#contact"
              onClick={(e) => { e.preventDefault(); navigate('/contact'); setIsMenuOpen(false); setIsAboutDropdownOpen(false) }}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button onClick={() => { navigate('/contact'); setIsMenuOpen(false); setIsAboutDropdownOpen(false) }} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </a>
              <div>
                <a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); setIsMenuOpen(false) }} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  About Us
                </a>
                <div className="ml-4 mt-2 space-y-2">
                  <a href="/our-works" onClick={(e) => { e.preventDefault(); navigate('/our-works'); setIsMenuOpen(false) }} className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Our Works
                  </a>
                  <a href="/case-studies" onClick={(e) => { e.preventDefault(); navigate('/case-studies'); setIsMenuOpen(false) }} className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Case Studies
                  </a>
                  <a href="/leadership-team" onClick={(e) => { e.preventDefault(); navigate('/leadership-team'); setIsMenuOpen(false) }} className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Leadership Team
                  </a>
                </div>
              </div>
              <div>
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    navigate('/services')
                  }}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Services
                </a>
                <div className="ml-4 mt-2 space-y-2">
                  <a
                    href="/services/web-development"
                    onClick={(e) => { e.preventDefault(); navigate('/services/web-development'); setIsMenuOpen(false) }}
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Custom Web Development
                  </a>
                  <a
                    href="/services/ecommerce"
                    onClick={(e) => { e.preventDefault(); navigate('/services/ecommerce'); setIsMenuOpen(false) }}
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    E-Commerce Solutions
                  </a>
                  <a
                    href="/services/web-app"
                    onClick={(e) => { e.preventDefault(); navigate('/services/web-app'); setIsMenuOpen(false) }}
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Web Application Development
                  </a>
                  <a
                    href="/services/seo-marketing"
                    onClick={(e) => { e.preventDefault(); navigate('/services/seo-marketing'); setIsMenuOpen(false) }}
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    SEO & Digital Marketing
                  </a>
                  <a
                    href="/services/work-monitoring"
                    onClick={(e) => { e.preventDefault(); navigate('/services/work-monitoring'); setIsMenuOpen(false) }}
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Work Monitoring Tool
                  </a>
                  <a
                    href="/services/website-maintenance"
                    onClick={(e) => { e.preventDefault(); navigate('/services/website-maintenance'); setIsMenuOpen(false) }}
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Website Maintenance
                  </a>
                </div>
              </div>
              <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); setIsMenuOpen(false) }} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </a>
              <button onClick={() => { navigate('/contact'); setIsMenuOpen(false) }} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-left">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
