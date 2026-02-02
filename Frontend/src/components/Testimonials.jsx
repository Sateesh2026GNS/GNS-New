import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      company: 'Tech Solutions Inc.',
      author: 'John Smith',
      role: 'CEO',
      content: 'GNS Software is thrilled with the exceptional services provided by their developer team. Their expertise, dedication, and innovative approach have consistently exceeded our expectations.',
      rating: 5
    },
    {
      company: 'Innovation Labs',
      author: 'Sarah Johnson',
      role: 'CTO',
      content: 'The collaboration with GNS Software has enhanced our ability to serve clients effectively and achieve outstanding results. We highly recommend their team to anyone seeking reliable and forward-thinking development partners.',
      rating: 5
    },
    {
      company: 'Digital Ventures',
      author: 'Mike Chen',
      role: 'Founder',
      content: 'GNS Software's professionalism, responsiveness, and ability to deliver high-quality solutions on time have been invaluable to our projects. Thank you for your continued excellence!',
      rating: 5
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Testimonials from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card card-hover"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-blue-600 font-semibold">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
