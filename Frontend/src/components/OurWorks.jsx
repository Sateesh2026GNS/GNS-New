import React from 'react'
import { useNavigate } from 'react-router-dom'

const OurWorks = () => {
  const navigate = useNavigate()

  const handleViewProject = (work) => {
    // Navigate to case studies page, or contact page to inquire about the project
    navigate('/case-studies')
  }
  const works = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A comprehensive e-commerce solution with advanced features for small and medium businesses.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile App Development',
      description: 'Secure and user-friendly mobile banking application with real-time transaction capabilities.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Firebase', 'AWS']
    },
    {
      title: 'HR Management System',
      category: 'Software Solutions',
      description: 'Complete HRMS solution streamlining employee management, payroll, and performance tracking.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Angular', 'Python', 'PostgreSQL']
    },
    {
      title: 'Healthcare Analytics Dashboard',
      category: 'Data Analytics',
      description: 'Advanced analytics platform providing insights for healthcare providers and administrators.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Vue.js', 'Python', 'Tableau']
    },
    {
      title: 'Educational Management System',
      category: 'Software Solutions',
      description: 'Comprehensive platform for schools and universities to manage students, courses, and administration.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Laravel', 'MySQL', 'Vue.js']
    },
    {
      title: 'Cloud Migration Project',
      category: 'Cloud Services',
      description: 'Successful migration of legacy systems to cloud infrastructure, improving scalability and performance.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['AWS', 'Docker', 'Kubernetes']
    }
  ]

  return (
    <section id="our-works" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Our Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Showcasing our successful projects and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {work.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {work.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => handleViewProject(work)}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2"
                >
                  View Project
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurWorks

