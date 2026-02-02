import React, { useEffect, useRef } from 'react'

const About = () => {
  const aboutRef = useRef(null)

  useEffect(() => {
    // Handle scroll positioning when navigating from other sections
    const hash = window.location.hash
    if (hash === '#about' && aboutRef.current) {
      setTimeout(() => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [])

  return (
    <>
      {/* Header Section with "About Us" */}
      <section ref={aboutRef} id="about" className="relative bg-blue-900 py-20 md:py-24 overflow-hidden pt-32">
        {/* Digital Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="1" fill="white" opacity="0.8" />
              </pattern>
              <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="white" stopOpacity="0.15" />
                <stop offset="50%" stopColor="white" stopOpacity="0.05" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
            <rect width="100%" height="100%" fill="url(#radialGradient)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center">
            About Us
          </h1>
        </div>
      </section>

      {/* Main About Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-orange-600 mb-4">
                Our Stories
              </h2>
              <div className="w-16 h-1 bg-gray-800 mb-4"></div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 uppercase tracking-wide">
                WELCOME TO GNS SOFTWARE              </h3>
              
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                GNS Software, a pioneering leader in the software industry, delivers an extensive range of innovative services designed to empower businesses and drive growth. Specializing in software solutions, web design, digital marketing, corporate training, and HRMS applications, GNS Software has emerged as a trusted partner for clients across the globe.
                </p>
                <p>
                  What began as a humble startup fueled by vision and passion has transformed into a global enterprise, boasting a diverse client portfolio that reflects its innovation, expertise, and commitment to excellence. GNS Software's success is built on a foundation of cutting-edge technology, industry best practices, and an unwavering dedication to exceeding customer expectations.
                </p>
                <p>
                GNS Software has cemented its position as a market leader and a catalyst for success in various sectors. With a commitment to empowering clients and fostering long-term partnerships, GNS Software continues to redefine possibilities and set new benchmarks in the technology industry.
                </p>
              </div>
            </div>

            {/* Right Column - Image with Organic Blob Shape */}
            <div className="relative flex justify-center lg:justify-end">
              <div 
                className="relative w-full max-w-lg overflow-hidden"
                style={{
                  borderRadius: '45% 55% 60% 40% / 50% 45% 55% 50%',
                  transform: 'rotate(-2deg)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Are Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Team working together"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>

        {/* Left Arrow (Navigation) */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white/50 hover:text-white cursor-pointer">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* What We Are Heading */}
            <h2 className="text-5xl md:text-6xl font-bold text-orange-600 mb-6">
              What We Are ?
            </h2>
            
            {/* Description Text */}
            <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed">
              We are leading provider of groundbreaking software solutions, transforming the way businesses operate and succeed with
            </p>

            {/* Icon Circle */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-red-600 bg-white flex items-center justify-center shadow-2xl">
                  <svg className="w-16 h-16 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Our Promise */}
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
                OUR PROMISE
              </h3>
              <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
                Providing The Greatest Learning And Connection Community. Go to market quickly without the cost-quality-speed compromise.
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-12">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text and Feature Boxes */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
                Join Us
              </h2>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Partner in Software Innovation
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                Join our dynamic team at GNS Software and embark on a rewarding career journey filled with innovation, growth, and collaboration. We are constantly seeking talented individuals who are passionate about technology and driven to make a difference in the digital world.
              </p>

              {/* Feature Boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Quick Support Box */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    {/* Headset Icon */}
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Quick Support</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We'll help you test bold new ideas while sharing your knowledge and expertise with our team.
                  </p>
                </div>

                {/* Experience Box */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4 relative">
                    {/* Lightbulb with Gears Icon */}
                    <svg className="w-8 h-8 text-orange-600 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <svg className="w-6 h-6 text-orange-600 absolute top-2 right-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Experience</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Our exceptional team of over 100 skilled software experts brings years of industry experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
