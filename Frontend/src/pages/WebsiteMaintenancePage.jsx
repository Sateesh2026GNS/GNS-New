import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'

const WebsiteMaintenancePage = () => {
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
            Website Maintenance
          </h1>
          <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl mx-auto">
            Ongoing support, security updates, and optimizations to ensure your website runs smoothly 24/7
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
                    Keep Your Website Running Smoothly
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    We provide ongoing support, security updates, and optimizations to ensure your website runs smoothly 24/7. Our maintenance services keep your website secure, updated, and performing at its best.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Focus on your business while we handle all the technical aspects of keeping your website up-to-date and secure.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Website maintenance"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Regular Security Updates</h3>
                  <p className="text-gray-600">
                    Keep your website protected with timely security patches and vulnerability fixes.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Monitoring</h3>
                  <p className="text-gray-600">
                    Continuous monitoring of website performance to ensure optimal speed and uptime.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Backup and Recovery</h3>
                  <p className="text-gray-600">
                    Regular automated backups to protect your data and quick recovery options when needed.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Content Updates</h3>
                  <p className="text-gray-600">
                    Keep your content fresh with regular updates, edits, and additions as needed.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Support</h3>
                  <p className="text-gray-600">
                    Expert technical support available whenever you need assistance or have questions.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Keep Your Website Running Smoothly?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our maintenance services can keep your website secure, updated, and performing at its best.
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

export default WebsiteMaintenancePage

