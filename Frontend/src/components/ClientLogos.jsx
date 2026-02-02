import React from 'react'

const ClientLogos = () => {
  const clients = [
    'GlobalBank',
    'CloudWatch',
    'Epicurious',
    'Biosynthesis',
    'Interlock'
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
          {clients.map((client, index) => (
            <div key={index} className="text-gray-400 text-xl md:text-2xl font-semibold hover:text-gray-600 transition-colors">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientLogos

