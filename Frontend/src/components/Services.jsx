import React from 'react'
import { useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate()
  const services = [
    {
      id: 'web-development',
      title: 'Custom Web Development',
      description: 'We create tailored websites with seamless functionality and stunning designs, ensuring a unique digital presence. Our team of expert developers uses the latest technologies and best practices to deliver websites that not only look great but also perform exceptionally well.',
      features: [
        'Responsive design for all devices',
        'Modern UI/UX implementation',
        'Performance optimization',
        'SEO-friendly structure',
        'Cross-browser compatibility'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      link: '/services/web-development'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Solutions',
      description: 'We build powerful e-commerce platforms that drive sales, with secure payment integration and user-friendly designs. Our e-commerce solutions are designed to provide seamless shopping experiences and maximize your online revenue.',
      features: [
        'Secure payment gateways',
        'Inventory management',
        'Order tracking system',
        'Multi-vendor support',
        'Mobile commerce ready'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      link: '/services/ecommerce'
    },
    {
      id: 'web-app',
      title: 'Web Application Development',
      description: 'From SaaS platforms to custom applications, we develop scalable web solutions that boost business efficiency. Our web applications are built with scalability, security, and performance in mind.',
      features: [
        'Custom application architecture',
        'Cloud-based solutions',
        'API development and integration',
        'Real-time functionality',
        'Scalable infrastructure'
      ],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      link: '/services/web-app'
    },
    {
      id: 'seo-marketing',
      title: 'SEO & Digital Marketing',
      description: 'We enhance online visibility through SEO, PPC, and content marketing, driving targeted traffic to your website. Our digital marketing strategies are data-driven and focused on delivering measurable results.',
      features: [
        'Search engine optimization',
        'Pay-per-click advertising',
        'Content marketing strategy',
        'Social media marketing',
        'Analytics and reporting'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      link: '/services/seo-marketing'
    },
    {
      id: 'work-monitoring',
      title: 'Work Monitoring Tool',
      description: 'Comprehensive work monitoring and management solutions to track productivity, manage tasks, and optimize team performance. Our tools help businesses improve efficiency and achieve better outcomes.',
      features: [
        'Real-time activity tracking',
        'Task and project management',
        'Performance analytics',
        'Team collaboration tools',
        'Customizable reporting'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      link: '/services/work-monitoring'
    },
    {
      id: 'website-maintenance',
      title: 'Website Maintenance',
      description: 'We provide ongoing support, security updates, and optimizations to ensure your website runs smoothly 24/7. Our maintenance services keep your website secure, updated, and performing at its best.',
      features: [
        'Regular security updates',
        'Performance monitoring',
        'Backup and recovery',
        'Content updates',
        'Technical support'
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      link: '/services/website-maintenance'
    }
  ]

  return (
    <>
      {/* Header Section */}
      <section className="relative bg-blue-900 py-20 md:py-24 overflow-hidden pt-32">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center">
            Our Services
          </h1>
        </div>
      </section>

      {/* Services Sections */}
      <div className="bg-white">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}>
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      if (service.link) {
                        navigate(service.link)
                      }
                    }}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

export default Services
