import React from 'react'

const WhoWeAre = () => {
  const stats = [
    {
      number: '12+',
      label: 'Years of Excellence'
    },
    {
      number: '50+',
      label: 'Successful Projects'
    },
    {
      number: '200+',
      label: 'Happy Clients'
    }
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We are more than just a company
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At GNS Software, we are driven by the vision of empowering businesses to achieve remarkable success through innovation and excellence. As a trusted partner, we provide dynamic, end-to-end solutions that cater to your unique needs and aspirations.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our dedication goes beyond offering services — we create tailored experiences that deliver measurable outcomes and lasting value. With a focus on innovation, personalization, and growth, we stand by our clients, helping them unlock their true potential.
            </p>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Learn More
            </button>
          </div>

          {/* Right Side - Image and Stats */}
          <div className="relative">
            {/* Professional Image */}
            <div className="rounded-lg overflow-hidden shadow-2xl mb-8">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional team"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
