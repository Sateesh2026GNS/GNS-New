import React from 'react'

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-blue-900">How it</span>{' '}
            <span className="text-orange-500">works!</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Our tech-forward strategies and systematic execution.
          </p>
        </div>

        {/* Flowchart Container */}
        <div className="relative max-w-7xl mx-auto py-16">
          <div className="relative">
            {/* Plan Execute - Top Branch (Positioned absolutely) */}
            <div className="hidden md:flex justify-center absolute top-0 left-0 right-0 z-20">
              <div className="bg-blue-900 text-white px-6 py-4 rounded-lg shadow-lg font-semibold text-center min-w-[160px] whitespace-nowrap">
                Plan Execute
              </div>
            </div>

            {/* Main Horizontal Flow */}
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-2 relative mt-20 md:mt-0">
              
              {/* Project */}
              <div className="relative z-10">
                <div className="bg-blue-900 text-white px-6 py-4 rounded-lg shadow-lg font-semibold text-center min-w-[140px] whitespace-nowrap">
                  Project
                </div>
              </div>

              {/* Horizontal Connector */}
              <div className="hidden md:block w-6 h-1 bg-blue-900"></div>

              {/* Project Analysis */}
              <div className="relative z-10">
                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 text-5xl">
                  💡
                </div>
                <div className="bg-blue-900 text-white px-6 py-4 rounded-lg shadow-lg font-semibold text-center min-w-[180px] whitespace-nowrap">
                  Project Analysis
                </div>
              </div>

              {/* Horizontal Connector */}
              <div className="hidden md:block w-6 h-1 bg-blue-900"></div>

              {/* Blueprinting & Planning */}
              <div className="relative z-10">
                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 text-5xl">
                  📋
                </div>
                <div className="bg-blue-900 text-white px-6 py-4 rounded-lg shadow-lg font-semibold text-center min-w-[220px] whitespace-nowrap">
                  Blueprinting & Planning
                </div>
              </div>

              {/* Connector with Vertical Branch for Plan Execute */}
              <div className="hidden md:block relative">
                <div className="w-6 h-1 bg-blue-900"></div>
                {/* Vertical Line Up */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-20 bg-blue-900 -mt-20"></div>
              </div>

              {/* AI- Assisted Software Build (Center) */}
              <div className="relative z-10">
                <div className="bg-blue-900 text-white px-6 py-4 rounded-lg shadow-lg font-semibold text-center min-w-[240px] whitespace-nowrap">
                  AI- Assisted Software Build
                </div>
              </div>

              {/* Connector with Vertical Branch for Feedback */}
              <div className="hidden md:block relative">
                <div className="w-6 h-1 bg-blue-900"></div>
                {/* Vertical Line Down */}
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-1 h-20 bg-blue-900 -mb-20"></div>
              </div>

              {/* Deliver Results */}
              <div className="relative z-10">
                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 text-5xl">
                  👥
                </div>
                <div className="bg-blue-900 text-white px-6 py-4 rounded-lg shadow-lg font-semibold text-center min-w-[160px] whitespace-nowrap">
                  Deliver Results
                </div>
              </div>

              {/* Horizontal Connector */}
              <div className="hidden md:block w-6 h-1 bg-blue-900"></div>

              {/* Release, Iterate & Maintains */}
              <div className="relative z-10">
                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 text-5xl">
                  ⚙️
                </div>
                <div className="bg-blue-900 text-white px-6 py-4 rounded-lg shadow-lg font-semibold text-center min-w-[240px] whitespace-nowrap">
                  Release, Iterate & Maintains
                </div>
              </div>
            </div>

            {/* Feedback Driven Customization - Bottom Branch (Positioned absolutely) */}
            <div className="hidden md:flex justify-center absolute bottom-0 left-0 right-0 z-20">
              <div className="bg-blue-900 text-white px-6 py-4 rounded-lg shadow-lg font-semibold text-center min-w-[260px] whitespace-nowrap">
                Feedback Driven Customization
              </div>
            </div>

            {/* Mobile Layout - Show branches in order */}
            <div className="md:hidden mt-8 space-y-4">
              <div className="bg-blue-900 text-white px-6 py-4 rounded-lg shadow-lg font-semibold text-center">
                Plan Execute
              </div>
              <div className="bg-blue-900 text-white px-6 py-4 rounded-lg shadow-lg font-semibold text-center">
                Feedback Driven Customization
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
