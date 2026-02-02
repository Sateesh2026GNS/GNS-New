import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutUsSection = () => {
  const navigate = useNavigate()

  const handleLearnMore = () => {
    navigate('/about')
  }

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Abstract Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 200 Q100 150, 200 200 T400 200" stroke="#3B82F6" strokeWidth="3" fill="none" opacity="0.3" />
          <path d="M0 250 Q150 200, 300 250 T400 250" stroke="#60A5FA" strokeWidth="3" fill="none" opacity="0.3" />
          <path d="M0 300 Q120 250, 250 300 T400 300" stroke="#93C5FD" strokeWidth="3" fill="none" opacity="0.3" />
          <rect x="50" y="100" width="80" height="60" fill="#3B82F6" opacity="0.2" />
          <rect x="150" y="80" width="100" height="80" fill="#60A5FA" opacity="0.2" />
          <rect x="270" y="120" width="90" height="70" fill="#93C5FD" opacity="0.2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - About Us Label and Headline */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="text-blue-900 font-semibold text-lg">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-8 leading-tight">
              Your Trusted Web Development Partner
            </h2>
          </div>

          {/* Right Side - Description and CTA */}
          <div className="relative">
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Welcome to GNS Software, where innovation and technology drive success. With over 10+ years of experience in web development, we are committed to delivering high-quality digital solutions.
            </p>
            <button
              onClick={handleLearnMore}
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center gap-3 group"
            >
              Learn More
              <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Three Image Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {/* Left Block - Expert Team */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Expert Team"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <h3 className="text-center font-bold text-blue-900 text-xl mt-4">EXPERT TEAM</h3>
          </div>

          {/* Middle Block - Developer with 95% Success Overlay */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Developer"
                className="w-full h-[400px] object-cover"
              />
              {/* Yellow Overlay Box */}
              <div className="absolute bottom-4 left-4 bg-yellow-400 px-5 py-4 rounded-lg shadow-2xl">
                <div className="text-white">
                  <div className="text-5xl font-bold leading-tight">95%</div>
                  <div className="text-xs font-bold uppercase tracking-wide mt-1">PROJECT SUCCESS</div>
                </div>
              </div>
            </div>
            <h3 className="text-center font-bold text-blue-900 text-xl mt-4">DEVELOPER</h3>
          </div>

          {/* Right Block - Digital Solutions */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Digital Solutions"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <h3 className="text-center font-bold text-blue-900 text-xl mt-4">DIGITAL SOLUTIONS</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection

