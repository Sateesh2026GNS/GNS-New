import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'

const WebDevelopmentPage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 pt-32">
        <Breadcrumb />
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-blue-900 py-20 md:py-24 overflow-hidden pt-32">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6">
            Custom Web Development
          </h1>
          <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl mx-auto">
            Tailored websites with seamless functionality and stunning designs, ensuring a unique digital presence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Build Your Digital Presence
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    We create tailored websites with seamless functionality and stunning designs, ensuring a unique digital presence. Our team of expert developers uses the latest technologies and best practices to deliver websites that not only look great but also perform exceptionally well.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    From responsive layouts to custom integrations, we build websites that reflect your brand identity and drive business growth.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Web development"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Responsive Design for All Devices</h3>
                  <p className="text-gray-600">
                    Your website will look perfect and function flawlessly on desktops, tablets, and mobile devices.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Modern UI/UX Implementation</h3>
                  <p className="text-gray-600">
                    Intuitive user interfaces and engaging user experiences that keep visitors coming back.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Optimization</h3>
                  <p className="text-gray-600">
                    Fast loading times and optimized code ensure your website performs at peak efficiency.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">SEO-Friendly Structure</h3>
                  <p className="text-gray-600">
                    Clean code and optimized structure help search engines index and rank your website effectively.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cross-Browser Compatibility</h3>
                  <p className="text-gray-600">
                    Your website will work seamlessly across all major browsers and platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build Your Website?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can create a custom website that represents your brand and drives results.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default WebDevelopmentPage

