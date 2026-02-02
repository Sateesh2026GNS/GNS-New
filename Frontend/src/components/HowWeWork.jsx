import React from 'react'

const HowWeWork = () => {
  const steps = [
    {
      id: 1,
      title: 'Discovery & Planning',
      description: 'Every project begins with an in-depth consultation. We take the time to understand your goals, target audience, and project requirements.'
    },
    {
      id: 2,
      title: 'Design & Prototyping',
      description: 'Once we understand your vision, our design team gets to work. We create wireframes and prototypes to visualize your website\'s layout and functionality.'
    },
    {
      id: 3,
      title: 'Development & Testing',
      description: 'We build your website using the latest technologies and rigorously test it for performance, usability, and responsiveness across devices.'
    },
    {
      id: 4,
      title: 'Launch & Support',
      description: 'Upon completion, we conduct a thorough quality assurance check and launch your website. We also provide ongoing support to ensure its success.'
    }
  ]

  return (
    <section className="section-padding bg-blue-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-12">
            <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
            <span className="text-white font-semibold text-lg">How We Work</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-white"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Timeline Dot */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="relative z-10 mb-6">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full border-4 border-blue-900 shadow-lg"></div>
                  </div>

                  {/* Content */}
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork

