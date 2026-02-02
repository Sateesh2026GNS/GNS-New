import React, { useEffect, useRef } from 'react'

const Leadership = () => {
  const leadershipRef = useRef(null)

  useEffect(() => {
    // Handle scroll positioning when navigating from other sections
    const hash = window.location.hash
    if (hash === '#leadership' && leadershipRef.current) {
      setTimeout(() => {
        leadershipRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [])

  const teamMembers = [
    {
      name: 'Sateesh',
      role: 'Managing Director',
      description: 'As the Founder & CEO, I provide visionary leadership and define the strategic roadmap of the organization from inception to growth. I drive innovation, build scalable business models, and ensure our solutions continuously evolve with market needs. By aligning cross-functional teams, investor expectations, and customer value, I cultivate a culture of ownership, agility, and high performance. My focus is on accelerating sustainable growth, strengthening operational efficiency, and positioning the company as a forward-thinking industry leader. Through data-driven decisions and strategic partnerships, I unlock new opportunities and steer the organization toward long-term impact and market excellence.',
      image: 'https://web.whatsapp.com/29ebfcd7-df0b-49f2-9750-ffc432189f3f'
    },
    {
      name: 'Navya',
      role: 'Chief Operating Officer',
      description: 'As the Chief Operating Officer at RFCHH SOFTWARE PVT LTD, I oversee and optimize day-to-day business operations to ensure seamless execution across all departments. My focus is on aligning operational strategies with organizational objectives, improving efficiency, and driving scalable growth. I streamline processes, develop performance frameworks, and implement systems that enhance productivity, quality, and cross-functional collaboration. By transforming operations into a strategic growth engine, I enable the organization to deliver consistent value, innovate efficiently, and achieve long-term success.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Naresh',
      role: 'Chief Business Officer',
      description: 'As a Chief Business Officer, I drive strategic business growth by overseeing organizational operations, identifying market opportunities, and optimizing business performance. I collaborate closely with executive leadership to align business goals, enhance revenue streams, and establish sustainable competitive advantages. Acting as a strategic decision-maker, I ensure that cross-functional teams execute initiatives effectively, fostering innovation and operational excellence. My focus is on scaling the business, strengthening stakeholder relationships, and delivering long-term value through data-driven strategies and efficient resource management.',
      linkedIn: null,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ]

  return (
    <>
      {/* Header Section with "Our Team" */}
      <section ref={leadershipRef} id="leadership" className="relative bg-gray-900 py-20 md:py-24 overflow-hidden pt-32">
        {/* Digital Pattern Background with glowing dots and lines */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                              radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 2px, transparent 2px)`,
            backgroundSize: '100px 100px, 150px 150px, 200px 200px'
          }}></div>
          {/* Network lines effect */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="0" y1="20" x2="100" y2="30" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
            <line x1="0" y1="50" x2="100" y2="60" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
            <line x1="0" y1="80" x2="100" y2="70" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center">
            Our Team
          </h1>
        </div>
      </section>

      {/* Main Leadership Content */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Introductory Text */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              At GNS Software, our team is our greatest asset. Comprised of skilled developers, innovative designers, and forward-thinking strategists, we work collaboratively to deliver transformative IT solutions. Each team member is carefully selected for their expertise, creativity, and dedication to excellence.
            </p>
          </div>

          {/* Meet The Team Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet The Team
            </h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
          </div>

          {/* Team Member Profiles */}
          <div className="max-w-5xl mx-auto space-y-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                {/* Left: Profile Picture with LinkedIn */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  {member.image && (
                    <div className="relative mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
                      />
                    </div>
                  )}
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                    </a>
                  )}
                </div>

                {/* Right: Name, Title, and Description */}
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-xl text-gray-600 mb-6">
                    {member.role}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Leadership
