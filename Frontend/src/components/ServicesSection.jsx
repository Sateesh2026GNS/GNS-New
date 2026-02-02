import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServicesSection = () => {
  const navigate = useNavigate()

  const services = [
    {
      id: 1,
      title: 'Custom Web Development',
      description: 'We create tailored websites with seamless functionality and stunning designs, ensuring a unique digital presence.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/web-development'
    },
    {
      id: 2,
      title: 'E-Commerce Solutions',
      description: 'We build powerful e-commerce platforms that drive sales, with secure payment integration and user-friendly designs.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/ecommerce'
    },
    {
      id: 3,
      title: 'Web Application Development',
      description: 'From SaaS platforms to custom applications, we develop scalable web solutions that boost business efficiency.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/web-app'
    },
    {
      id: 4,
      title: 'SEO & Digital Marketing',
      description: 'We enhance online visibility through SEO, PPC, and content marketing, driving targeted traffic to your website.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/seo-marketing'
    },
    {
      id: 5,
      title: 'Work Monitoring Tool',
      description: 'Comprehensive work monitoring and management solutions to track productivity, manage tasks, and optimize team performance.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/work-monitoring'
    },
    {
      id: 6,
      title: 'Website Maintenance',
      description: 'We provide ongoing support, security updates, and optimizations to ensure your website runs smoothly 24/7.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/website-maintenance'
    }
  ]

  return (
    <section className="section-padding bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM1 2v2h2l3.6 7.59-1.35 2.45c-.15.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <span className="text-gray-700 font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Expert Web Solutions for Business Growth
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <button
                  onClick={() => {
                    if (service.link) {
                      navigate(service.link)
                    }
                  }}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                >
                  Read More
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

