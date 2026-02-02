import React from 'react'

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            How <span className="text-orange-600">it works</span>!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our tech-forward strategies and systematic execution.
          </p>
        </div>

        {/* Flowchart */}
        <div className="relative overflow-x-auto pb-24">
          <div className="flex items-center justify-center min-w-max px-4">
            <div className="relative flex items-center gap-4 md:gap-6 lg:gap-8">
              
              {/* Step 1: Project */}
              <div className="flex flex-col items-center">
                <div className="bg-blue-900 text-white px-5 py-3 md:px-6 md:py-4 rounded-lg font-semibold text-sm md:text-base min-w-[120px] md:min-w-[150px] text-center shadow-lg">
                  Project
                </div>
              </div>

              {/* Connector */}
              <div className="w-8 md:w-12 lg:w-16 h-0.5 bg-gray-800"></div>

              {/* Step 2: Project Analysis */}
              <div className="flex flex-col items-center">
                {/* Lightbulb Icon */}
                <div className="mb-3 text-orange-600">
                  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="bg-blue-900 text-white px-5 py-3 md:px-6 md:py-4 rounded-lg font-semibold text-sm md:text-base min-w-[150px] md:min-w-[180px] text-center shadow-lg">
                  Project Analysis
                </div>
              </div>

              {/* Connector */}
              <div className="w-8 md:w-12 lg:w-16 h-0.5 bg-gray-800"></div>

              {/* Step 3: Blueprinting & Planning */}
              <div className="flex flex-col items-center">
                {/* Document with Checkmarks and Magnifying Glass Icon */}
                <div className="mb-3 text-orange-600">
                  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    {/* Document */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    {/* Magnifying glass */}
                    <circle cx="17" cy="17" r="3" />
                    <path d="M19 19l-2-2" strokeLinecap="round" />
                    {/* Checkmarks */}
                    <path d="M9 8l1 1 2-2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 12l1 1 2-2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 16l1 1 2-2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="bg-blue-900 text-white px-5 py-3 md:px-6 md:py-4 rounded-lg font-semibold text-sm md:text-base min-w-[150px] md:min-w-[200px] text-center shadow-lg">
                  Blueprinting & Planning
                </div>
              </div>

              {/* Connector */}
              <div className="w-8 md:w-12 lg:w-16 h-0.5 bg-gray-800"></div>

              {/* Step 4: AI-Assisted Software Build with Branches */}
              <div className="relative flex flex-col items-center">
                {/* Top Branch: Plan Execute */}
                <div className="absolute -top-24 md:-top-28 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-blue-900 text-white px-4 py-2 md:px-5 md:py-3 rounded-lg font-semibold text-xs md:text-sm min-w-[100px] md:min-w-[130px] text-center shadow-lg">
                    Plan Execute
                  </div>
                  {/* Vertical line down */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-12 md:h-16 bg-gray-800"></div>
                </div>

                {/* Main Box */}
                <div className="bg-blue-900 text-white px-5 py-3 md:px-6 md:py-4 rounded-lg font-semibold text-sm md:text-base min-w-[150px] md:min-w-[200px] text-center shadow-lg relative z-0">
                  AI- Assisted Software Build
                </div>

                {/* Bottom Branch: Feedback Driven Customization */}
                <div className="absolute -bottom-24 md:-bottom-28 left-1/2 transform -translate-x-1/2 z-10">
                  {/* Vertical line up */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0.5 h-12 md:h-16 bg-gray-800"></div>
                  <div className="bg-blue-900 text-white px-4 py-2 md:px-5 md:py-3 rounded-lg font-semibold text-xs md:text-sm min-w-[120px] md:min-w-[170px] text-center shadow-lg">
                    Feedback Driven Customization
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="w-8 md:w-12 lg:w-16 h-0.5 bg-gray-800"></div>

              {/* Step 5: Deliver Results */}
              <div className="flex flex-col items-center">
                {/* Team Icon - Person with three smaller people below */}
                <div className="mb-3 text-orange-600">
                  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    {/* Main person (top) */}
                    <circle cx="12" cy="6" r="2.5" />
                    <path d="M12 8.5v2M12 10.5c-1.5 0-3 1-3 2.5v2h6v-2c0-1.5-1.5-2.5-3-2.5" />
                    {/* Three smaller people below */}
                    <circle cx="8" cy="18" r="1.5" />
                    <path d="M8 19.5v1M8 20.5c-0.5 0-1 0.5-1 1v1h2v-1c0-0.5-0.5-1-1-1" />
                    <circle cx="12" cy="18" r="1.5" />
                    <path d="M12 19.5v1M12 20.5c-0.5 0-1 0.5-1 1v1h2v-1c0-0.5-0.5-1-1-1" />
                    <circle cx="16" cy="18" r="1.5" />
                    <path d="M16 19.5v1M16 20.5c-0.5 0-1 0.5-1 1v1h2v-1c0-0.5-0.5-1-1-1" />
                    {/* Connection lines */}
                    <path d="M10 13l-2 5M14 13l2 5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="bg-blue-900 text-white px-5 py-3 md:px-6 md:py-4 rounded-lg font-semibold text-sm md:text-base min-w-[150px] md:min-w-[180px] text-center shadow-lg">
                  Deliver Results
                </div>
              </div>

              {/* Connector */}
              <div className="w-8 md:w-12 lg:w-16 h-0.5 bg-gray-800"></div>

              {/* Step 6: Release, Iterate & Maintains */}
              <div className="flex flex-col items-center">
                {/* Complex Icon - Square with 4 icons in 2x2 grid: person, gear, chart, dollar */}
                <div className="mb-3 text-orange-600">
                  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    {/* Square border */}
                    <rect x="2" y="2" width="20" height="20" rx="2" />
                    {/* Top-left: Person */}
                    <circle cx="7" cy="7" r="1.5" />
                    <path d="M7 9v1.5M7 10.5c-0.5 0-1 0.5-1 1v1h2v-1c0-0.5-0.5-1-1-1" />
                    {/* Top-right: Gear */}
                    <circle cx="17" cy="7" r="1.5" />
                    <path d="M17 6l0.5-0.5M18.5 7l-0.5-0.5M17 8l0.5 0.5M15.5 7l0.5 0.5" strokeLinecap="round" />
                    <path d="M17 5.5v1M17 8.5v1M15.5 7h-1M18.5 7h1" strokeLinecap="round" />
                    {/* Bottom-left: Bar Chart */}
                    <rect x="5" y="15" width="2" height="3" />
                    <rect x="8" y="13" width="2" height="5" />
                    <rect x="11" y="16" width="2" height="2" />
                    {/* Bottom-right: Dollar Sign */}
                    <path d="M15 14h2M15 18h2M16 13v6" strokeLinecap="round" />
                    <circle cx="16" cy="14.5" r="0.5" />
                    <circle cx="16" cy="16.5" r="0.5" />
                  </svg>
                </div>
                <div className="bg-blue-900 text-white px-5 py-3 md:px-6 md:py-4 rounded-lg font-semibold text-sm md:text-base min-w-[150px] md:min-w-[220px] text-center shadow-lg">
                  Release, Iterate & Maintains
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
