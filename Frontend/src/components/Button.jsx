import React from 'react'

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseClasses = "px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl",
    secondary: "bg-white text-blue-600 hover:bg-gray-100 hover:shadow-xl",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white/10",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100"
  }

  const disabledClasses = disabled 
    ? "opacity-50 cursor-not-allowed transform-none" 
    : ""

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${disabledClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

