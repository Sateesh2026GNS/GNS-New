import React from 'react'

const PromotionalServices = () => {
  const services = [
    {
      name: 'Web Development',
      percentage: 95
    },
    {
      name: 'SEO Services',
      percentage: 85
    },
    {
      name: 'SEM Services',
      percentage: 80
    },
    {
      name: 'Mobile App Development',
      percentage: 90
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text and Image */}
          <div className="space-y-8">
            {/* Large Orange Heading */}
            <div>
              <h2 className="text-5xl md:text-5xl lg:text-4xl font-bold text-orange-500 leading-tight">
                Preparing for your success,
                we provide truly prominent IT
                <br />
                Services
              </h2>
            </div>

            {/* Professional Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional team discussion"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>

            {/* Descriptive Text */}
            <div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                At GNS Software, we empower innovators across E-commerce, clinic, utilities, health & wellness, and recruitment sectors to achieve transformational growth. Leveraging state-of-the-art technology and deep domain expertise, we develop scalable, efficient, and intuitive software solutions that not only streamline operations but also enhance valuations.
              </p>
            </div>
          </div>

          {/* Right Side - Services with Progress Bars */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl md:text-3xl font-bold text-orange-500">
                    {service.name}
                  </h3>
                  <div className="bg-black text-white px-3 py-1 rounded text-lg font-bold">
                    {service.percentage}%
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-800 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${service.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromotionalServices

