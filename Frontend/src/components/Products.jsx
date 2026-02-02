import React from 'react'

const Products = () => {
  const products = [
    {
      title: 'HRMS',
      description: 'Looking for the best HR software for small, medium, and Large businesses? Our HRMS streamlines employee payroll, attendance, leave, and performance management.',
      features: ['Payroll Management', 'Attendance Tracking', 'Leave Management', 'Performance Evaluation'],
      icon: '👥',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Campus HRMS',
      description: 'Are you searching for a great administrative school management system? CampusHRMS is a complete administration software for schools, colleges, and universities.',
      features: ['Staff Management', 'Student Records', 'Attendance System', 'Academic Operations'],
      icon: '🏫',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'E-commerce Platform',
      description: 'Looking to start your online store? Our E-commerce platform is the best solution for small businesses selling products online.',
      features: ['Product Management', 'Secure Payments', 'Order Tracking', 'Inventory Management'],
      icon: '🛒',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Business Management Suite',
      description: 'Complete business management solution for modern enterprises. Streamline operations and boost productivity.',
      features: ['CRM Integration', 'Project Management', 'Analytics Dashboard', 'Team Collaboration'],
      icon: '💼',
      color: 'from-orange-500 to-red-600'
    }
  ]

  return (
    <section id="products" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Explore Our Most Popular Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Innovative software solutions designed to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="card card-hover"
            >
              <div className="flex items-start gap-6">
                <div className={`text-6xl bg-gradient-to-br ${product.color} bg-clip-text text-transparent`}>
                  {product.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`bg-gradient-to-r ${product.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
