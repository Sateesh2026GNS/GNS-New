import React from 'react'
import { useNavigate } from 'react-router-dom'

const CTABanner = () => {
  const navigate = useNavigate()

  const handleGetInTouch = () => {
    navigate('/contact')
  }

  return (
    <section className="bg-lime-400 py-6 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Left Side - Icon and Text */}
          <div className="flex items-center gap-4 flex-1">
            {/* Thumbs Up Icon */}
            <div className="flex-shrink-0">
              <svg className="w-10 h-10 md:w-12 md:h-12 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
              </svg>
            </div>
            
            {/* Text */}
            <p className="text-green-700 font-medium text-base md:text-lg leading-relaxed">
              At GNS Software we aim to build the simple and most efficient solutions to all your business challenges
            </p>
          </div>

          {/* Right Side - Button */}
          <div className="flex-shrink-0">
            <button
              onClick={handleGetInTouch}
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 md:px-8 rounded-lg transition-colors duration-200 uppercase tracking-wide"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTABanner

