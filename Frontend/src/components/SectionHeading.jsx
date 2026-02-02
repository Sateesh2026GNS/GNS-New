import React from 'react'

const SectionHeading = ({ 
  title, 
  subtitle, 
  className = '',
  titleClassName = '',
  subtitleClassName = ''
}) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading

