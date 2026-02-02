import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <footer className="bg-gray-100 text-gray-700 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Section - Logo and Tagline */}
          <div>
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Converting knowledge to power
            </p>
            {/* LinkedIn Link */}
            <a 
              href="https://www.linkedin.com/company/111222927/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <div className="w-8 h-8 bg-gray-400 rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <span className="text-sm">Visit Our LinkedIn</span>
            </a>
          </div>

          {/* Middle Section - Office Locations */}
          <div className="flex flex-col gap-6">
            {/* India Office */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded overflow-hidden border border-gray-300">
                <svg viewBox="0 0 24 16" className="w-full h-full">
                  {/* Indian Flag */}
                  <rect width="24" height="5.33" fill="#FF9933"/>
                  <rect y="5.33" width="24" height="5.33" fill="#FFFFFF"/>
                  <rect y="10.67" width="24" height="5.33" fill="#138808"/>
                  <circle cx="12" cy="8" r="1.5" fill="#000080"/>
                  <circle cx="12" cy="8" r="1" fill="#FFFFFF"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">India</p>
                <p className="text-sm text-gray-600">Hyderabad, Telangana, India, 500098</p>
              </div>
            </div>

            {/* USA Office - Optional, can be removed if not needed */}
            {/* <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded overflow-hidden border border-gray-300">
                <svg viewBox="0 0 24 16" className="w-full h-full">
                  <rect width="24" height="16" fill="#B22234"/>
                  <rect width="24" height="1.23" fill="#FFFFFF" y="1.23"/>
                  <rect width="24" height="1.23" fill="#FFFFFF" y="3.69"/>
                  <rect width="24" height="1.23" fill="#FFFFFF" y="6.15"/>
                  <rect width="24" height="1.23" fill="#FFFFFF" y="8.62"/>
                  <rect width="24" height="1.23" fill="#FFFFFF" y="11.08"/>
                  <rect width="24" height="1.23" fill="#FFFFFF" y="13.54"/>
                  <rect width="9.6" height="8.62" fill="#3C3B6E"/>
                  <circle cx="1.2" cy="1.38" r="0.3" fill="#FFFFFF"/>
                  <circle cx="3.6" cy="1.38" r="0.3" fill="#FFFFFF"/>
                  <circle cx="6" cy="1.38" r="0.3" fill="#FFFFFF"/>
                  <circle cx="8.4" cy="1.38" r="0.3" fill="#FFFFFF"/>
                  <circle cx="2.4" cy="2.77" r="0.3" fill="#FFFFFF"/>
                  <circle cx="4.8" cy="2.77" r="0.3" fill="#FFFFFF"/>
                  <circle cx="7.2" cy="2.77" r="0.3" fill="#FFFFFF"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">USA</p>
                <p className="text-sm text-gray-600">Danville, CA, USA, 94526</p>
              </div>
            </div> */}
          </div>

          {/* Right Section - Company Links and Contact */}
          <div className="grid grid-cols-2 gap-8">
            {/* Company Links */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/" 
                    onClick={(e) => { e.preventDefault(); navigate('/') }}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="/services" 
                    onClick={(e) => { e.preventDefault(); navigate('/services') }}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="/our-works" 
                    onClick={(e) => { e.preventDefault(); navigate('/our-works') }}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a 
                    href="/about" 
                    onClick={(e) => { e.preventDefault(); navigate('/about') }}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="/contact" 
                    onClick={(e) => { e.preventDefault(); navigate('/contact') }}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm">Contact</h4>
              <div className="space-y-2">
                <a 
                  href="mailto:info@gnssoftware.in" 
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Info@gnssoftware.in
                </a>
                <a 
                  href="tel:+919059186584" 
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  +91 90591 86584
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; 2025 GNS Software Pvt. Ltd., All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
