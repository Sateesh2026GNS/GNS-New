import React from 'react'

const CaseStudies = () => {
  const caseStudies = [
    {
      client: 'Global Finance Corp',
      industry: 'Financial Services',
      challenge: 'Legacy system causing operational inefficiencies and high maintenance costs',
      solution: 'Developed a modern cloud-based platform with microservices architecture',
      results: [
        '50% reduction in operational costs',
        '80% improvement in system performance',
        'Real-time data processing capabilities'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      client: 'EduTech Solutions',
      industry: 'Education',
      challenge: 'Need for a scalable learning management system for growing student base',
      solution: 'Built comprehensive LMS with AI-powered personalized learning paths',
      results: [
        '300% increase in student engagement',
        'Streamlined administrative processes',
        'Enhanced learning outcomes'
      ],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      client: 'HealthCare Plus',
      industry: 'Healthcare',
      challenge: 'Patient data management and appointment scheduling inefficiencies',
      solution: 'Integrated healthcare management system with telemedicine capabilities',
      results: [
        '60% reduction in appointment wait times',
        'Improved patient satisfaction scores',
        'Digital transformation success'
      ],
      image: 'https://images.scentregroup.io/image/fetch/q_auto,w_1200,f_auto,dpr_auto/https://cam.scentregroup.io/m/7d6a01954669c39c'
    },
  ]

  return (
    <section id="case-studies" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real-world success stories showcasing our expertise and results
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {study.client}
                </h3>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">The Challenge</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {study.challenge}
                  </p>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Solution</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {study.solution}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-1">✓</span>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies

