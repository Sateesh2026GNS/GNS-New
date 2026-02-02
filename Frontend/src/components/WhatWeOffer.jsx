import React from 'react'

const WhatWeOffer = () => {
  const offerings = [
    {
      title: 'Innovative',
      description: 'At GNS Software, we leverage cutting-edge technology to provide tailored solutions for various sectors, ensuring efficiency and success.',
      position: 'left-top'
    },
    {
      title: 'Make A Lasting Impression',
      description: 'Attract clients by standing out from the competition with our insightful solutions and well-earned honors.',
      position: 'left-bottom'
    },
    {
      title: 'More Flexible',
      description: 'We pride ourselves on our adaptability and flexibility, offering solutions that evolve with your business needs.',
      position: 'right-top'
    },
    {
      title: 'Elevate Your Product',
      description: 'Unlock new heights of excellence with GNS Software's tailored strategies, advanced technologies, and dedicated product apart in a competitive market.',
      position: 'right-bottom'
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dark Blurred Background with Office Scene */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title and Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What we Offer ?
          </h2>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We believe in creating powerful products from well-designed content. Regardless of company size, we help our clients grow their businesses with the best return on investment.
          </p>
        </div>

        {/* Main Content Area with Devices and Features */}
        <div className="relative max-w-7xl mx-auto">
          {/* Device Mockups Container */}
          <div className="relative flex items-center justify-center mb-12 md:mb-0">
            {/* Tablet - Center */}
            <div className="relative z-20 transform scale-90 md:scale-100">
              <div className="w-80 h-96 md:w-96 md:h-[28rem] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-3 shadow-2xl border-4 border-gray-700">
                <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                  {/* Mock Website Content */}
                  <div className="h-full overflow-y-auto">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                      <h3 className="text-xl font-bold mb-2">Grow Up Finance</h3>
                      <p className="text-sm opacity-90">With Expert Consultant</p>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-semibold mb-4">We Provide Trusted & Best Consulting</h4>
                      <div className="flex gap-4 justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                            <span className="text-blue-600 font-bold">2050+</span>
                          </div>
                          <p className="text-xs text-gray-600">Clients</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                            <span className="text-green-600 font-bold">900+</span>
                          </div>
                          <p className="text-xs text-gray-600">Projects</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                            <span className="text-orange-600 font-bold">1250+</span>
                          </div>
                          <p className="text-xs text-gray-600">Success</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop - Bottom Left */}
            <div className="absolute left-0 bottom-0 z-10 transform scale-75 md:scale-90 hidden md:block">
              <div className="w-72 bg-gray-900 rounded-t-lg p-2 shadow-2xl">
                <div className="w-full h-48 bg-white rounded overflow-hidden">
                  {/* Dashboard Mockup */}
                  <div className="p-4 h-full bg-gray-50">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">$3,468.96</div>
                        <div className="text-sm text-green-600 font-semibold">↑ 82%</div>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">$432</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 h-16 bg-gradient-to-t from-purple-500 to-pink-400 rounded"></div>
                      <div className="flex-1 h-20 bg-gradient-to-t from-blue-500 to-cyan-400 rounded"></div>
                      <div className="flex-1 h-12 bg-gradient-to-t from-green-500 to-emerald-400 rounded"></div>
                      <div className="flex-1 h-14 bg-gradient-to-t from-orange-500 to-red-400 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="h-1 bg-gray-800 rounded-b-lg"></div>
              </div>
            </div>

            {/* Smartphone - Bottom Right */}
            <div className="absolute right-0 bottom-0 z-10 transform scale-75 md:scale-90 hidden md:block">
              <div className="w-32 bg-gray-900 rounded-3xl p-2 shadow-2xl border-4 border-gray-700">
                <div className="w-full h-64 bg-white rounded-2xl overflow-hidden">
                  {/* Mobile App Mockup */}
                  <div className="h-full overflow-y-auto">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-3 text-center">
                      <div className="text-sm font-bold">50% OFF</div>
                    </div>
                    <div className="p-3">
                      <h5 className="font-bold text-sm mb-3">Popular</h5>
                      <div className="space-y-3">
                        <div className="bg-gray-100 rounded-lg p-2">
                          <div className="w-full h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded mb-2"></div>
                          <div className="text-xs font-semibold">Nike Shoes</div>
                          <div className="text-xs text-green-600 font-bold">$99</div>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-2">
                          <div className="w-full h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded mb-2"></div>
                          <div className="text-xs font-semibold">Chair</div>
                          <div className="text-xs text-green-600 font-bold">$49</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Blocks - Positioned Around Devices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-0">
            {/* Left Column */}
            <div className="space-y-8">
              {offerings.filter(item => item.position.includes('left')).map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {offerings.filter(item => item.position.includes('right')).map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer

