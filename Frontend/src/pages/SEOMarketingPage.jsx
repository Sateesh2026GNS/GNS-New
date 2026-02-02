import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'

const SEOMarketingPage = () => {
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
            SEO & Digital Marketing
          </h1>
          <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl mx-auto">
            Enhance online visibility through SEO, PPC, and content marketing, driving targeted traffic to your website
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
                    Grow Your Online Presence
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    We enhance online visibility through SEO, PPC, and content marketing, driving targeted traffic to your website. Our digital marketing strategies are data-driven and focused on delivering measurable results.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Partner with us to transform your digital presence into a powerful driver of business success.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Digital marketing"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Search Engine Optimization</h3>
                  <p className="text-gray-600">
                    Comprehensive SEO strategies to improve your website's rankings and organic visibility.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Pay-Per-Click Advertising</h3>
                  <p className="text-gray-600">
                    Strategic PPC campaigns to drive immediate traffic and conversions.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Content Marketing Strategy</h3>
                  <p className="text-gray-600">
                    Engaging content that attracts, educates, and converts your target audience.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media Marketing</h3>
                  <p className="text-gray-600">
                    Build your brand and engage with customers across all major social media platforms.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics and Reporting</h3>
                  <p className="text-gray-600">
                    Detailed analytics and insights to track performance and optimize your marketing efforts.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Boost Your Online Visibility?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can create a digital marketing strategy that drives results and grows your business.
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

export default SEOMarketingPage

