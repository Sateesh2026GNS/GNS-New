import React from 'react'
import Icon from './Icon'

const HowWeHelp = () => {
  const services = [
    {
      icon: 'document',
      title: 'Digital Consulting',
      description: 'Strategic guidance to transform your digital presence and drive business growth.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'gear',
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your unique business requirements.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'chart',
      title: 'Data Analytics and Insights',
      description: 'Turn your data into actionable insights that drive informed decision-making.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'mobile',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage and convert users.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: 'shield',
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive security solutions and best practices.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: 'cloud',
      title: 'Cloud Services and Migration',
      description: 'Seamless cloud migration and scalable infrastructure solutions for modern businesses.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How we help you
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                <Icon name={service.icon} className="w-8 h-8" color="white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Button */}
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeHelp
