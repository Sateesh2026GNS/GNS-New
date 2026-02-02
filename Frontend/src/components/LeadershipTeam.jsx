import React from 'react'
import Logo from './Logo'

const LeadershipTeam = () => {
  const leaders = [
    {
      name: 'Mr. Navya',
      title: 'President',
      bio: 'Navya founded GNS Software in 2025 and leads the India Operations. Prior to GNS Software, Vishal worked at Clipper Windpower Inc. for more than 10 years. He has a Master\'s in Mechanical Engineering and is currently responsible for all Engineering Projects and their delivery.',
    },
    {
      name: 'Mr. Sateesh',
      title: 'CEO',
      bio: 'Sateesh Leads the India operations. He has 5+ years of industry experience spanning Embedded Systems, IT and IOT in diverse domains. He has worked at Texas Instruments, Command Systems and Wipro. He is a well qualified embedded programmer and systems design engineer.',
    }
  ]

  return (
    <>
      {/* Header Section with Slogan */}
      <section className="relative bg-white py-16 md:py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              You <span className="text-orange-600">Dream It</span>, We Make It!
            </h1>
          </div>

          {/* Company Overview Box */}
          <div className="bg-orange-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Side - Logo and Name */}
              <div className="flex flex-col items-center md:items-start">
                <div className="mb-6">
                  <Logo variant="light" />
                </div>
                <p className="text-gray-700 text-lg font-medium">
                  Converting knowledge to power
                </p>
              </div>

              {/* Right Side - Company Description */}
              <div className="space-y-4 text-gray-800">
                <p className="leading-relaxed">
                  GNS Software was founded in 2025 by entrepreneurs with over 1+ years of industry experience. We have successfully delivered many projects for our customers and are rapidly growing into a leading products and services company.
                </p>
                <p className="leading-relaxed">
                  We identify market needs, opportunities and keep building products that can provide a niche solution.
                </p>
                <p className="leading-relaxed">
                  We serve our customers with utmost commitment, quality and provide value for money services, along with a wide range of domains and technologies.
                </p>
                <p className="leading-relaxed font-semibold">
                  Write to us today for a no obligation consultation! Thank you for your business!
                </p>
              </div>
            </div>
          </div>

          {/* Meet The Leaders Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Meet The Leaders
            </h2>

            <div className="space-y-8">
              {leaders.map((leader, index) => (
                <div key={index} className="bg-orange-50 rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Left Side - Person Icon */}
                    <div className="flex-shrink-0 flex justify-center md:justify-start">
                      <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Right Side - Name, Title, Bio, LinkedIn */}
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {leader.name}
                      </h3>
                      <p className="text-xl font-bold text-gray-900 mb-4">
                        {leader.title}
                      </p>
                      <p className="text-gray-800 leading-relaxed mb-4">
                        {leader.bio}
                      </p>
                      {leader.linkedIn && (
                        <a
                          href={leader.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </div>
                          <span className="text-blue-600 font-medium">LinkedIn</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LeadershipTeam
