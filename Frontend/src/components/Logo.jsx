import React, { useState } from 'react'

const Logo = ({ className = "", size = "default", variant = "light" }) => {
  const [imageError, setImageError] = useState(false)
  const isSmall = size === "small"
  const isDark = variant === "dark"
  const textSize = isSmall ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
  const subtextSize = isSmall ? "text-[9px] md:text-[10px]" : "text-[10px] md:text-[12px]"
  const subtextColor = isDark ? "text-gray-300" : "text-gray-600"
  
  // Use the LinkedIn company logo
  const logoSrc = "https://media.licdn.com/dms/image/v2/D560BAQEfdKdoupAYew/company-logo_100_100/B56ZumR8R8GwAQ-/0/1768021280794?e=1770854400&v=beta&t=R51V6ctu_ikhqWA9F8VEs7HCEvw0YrS8kUD-IJI7cPU"
  
  // If image file exists, use it; otherwise use text fallback
  if (!imageError) {
    return (
      <div className={`flex items-center ${className}`}>
        <img 
          src={logoSrc}
          alt="GNS Software Pvt Ltd"
          className={`${isSmall ? 'h-9 md:h-11' : 'h-20 md:h-24'} w-auto object-contain`}
          onError={() => setImageError(true)}
          style={{ 
            display: 'block',
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </div>
    )
  }

  // Text-only logo as fallback
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex flex-col items-center leading-tight">
        <div className="flex items-center">
          <span className={`${textSize} font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent`}>
            GN
          </span>
          <span className={`${textSize} font-bold bg-gradient-to-r from-green-500 via-green-600 to-green-500 bg-clip-text text-transparent`}>
            S
          </span>
        </div>
        <span className={`${subtextSize} font-normal ${subtextColor} uppercase tracking-wider mt-0.5`}>
          SOFTWARE PVT LTD
        </span>
      </div>
    </div>
  )
}

export default Logo
