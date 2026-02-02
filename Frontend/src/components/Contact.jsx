import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    inquiryType: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [privacyConsent, setPrivacyConsent] = useState(false)

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
    setSubmitSuccess(false)
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    if (!privacyConsent) {
      newErrors.privacy = 'Please accept the privacy consent'
    }
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitSuccess(false)
    
    try {
      // Get API URL from environment variable or use default
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitSuccess(true)
        setFormData({ name: '', email: '', organization: '', phone: '', inquiryType: '', message: '' })
        setPrivacyConsent(false)
        setErrors({})
      } else {
        setErrors({ submit: data.message || 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // More specific error messages
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        setErrors({ submit: 'Cannot connect to server. Please make sure the backend server is running on port 5000, or contact us directly at info@gnssoftware.in' })
      } else {
        setErrors({ submit: 'Network error. Please check your connection and try again, or contact us directly at info@gnssoftware.in' })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleLocationClick = () => {
    // Open Google Maps with GNS Software location
    const address = encodeURIComponent('6-13/111/1, Venkataramana Hills Colony, Road no 5, Sai Aishwarya Layout, Parvathapur, Peerzadiguda, Hyderabad, Telangana 500098')
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank')
  }

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-20 overflow-hidden pt-32">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-white/90 leading-relaxed">
                At GNS Software, we believe that challenging the status quo today paves the way for extraordinary achievements tomorrow. If you share our passion for innovation and endless possibilities, we invite you to connect with us.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end lg:justify-center">
              <button 
                onClick={handleLocationClick}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded font-semibold transition-colors w-full lg:w-auto"
              >
                Location GNS Software
              </button>
              <button 
                onClick={scrollToForm}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded font-semibold transition-colors w-full lg:w-auto"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Services Section */}
      <section className="py-16 bg-gradient-to-br from-[#25D366] to-[#20BA5A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#25D366] rounded-full p-3">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">📲 WhatsApp Services</h2>
              </div>
              
              <p className="text-gray-700 text-lg mb-6">
                We provide quick and professional support via WhatsApp for:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <span className="text-[#25D366] text-xl">✓</span>
                  <span className="text-gray-800">Software Development enquiries</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <span className="text-[#25D366] text-xl">✓</span>
                  <span className="text-gray-800">Website & App projects</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <span className="text-[#25D366] text-xl">✓</span>
                  <span className="text-gray-800">Pricing & proposals</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <span className="text-[#25D366] text-xl">✓</span>
                  <span className="text-gray-800">Technical support & consultations</span>
                </div>
              </div>

              <div className="bg-[#25D366] rounded-lg p-6 text-center">
                <p className="text-white text-lg font-semibold mb-3">📞 WhatsApp us:</p>
                <a 
                  href="https://wa.me/919059186584?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20GNS%20Software%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#25D366] px-8 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  +91 90591 86584
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect with us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side - Content */}
              <div>
                {/* Bulleted List */}
                <ul className="space-y-3 mb-12 text-black text-base">
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Visit our <a href="/about" className="text-orange-600 font-bold hover:underline">Careers</a> page or <a href="#" className="text-orange-600 font-bold hover:underline">FAQs</a>.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Keep following us on <a href="#" className="text-orange-600 font-bold hover:underline">Instagram</a>, <a href="https://www.linkedin.com/company/111222927/" className="text-orange-600 font-bold hover:underline">LinkedIn</a> or <a href="#" className="text-orange-600 font-bold hover:underline">Facebook</a>.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Discover how we enhance experiences and promote a sustainable world by reading the Latest News.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Visit our Acceptable & Compliance Portal to report a concern or to discuss ethical or compliance issues.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 mt-1">•</span>
                    <span>Please read about how GNS Software is making a difference in communities around the world through our social responsibility programs.</span>
                  </li>
                </ul>

                {/* Three Steps */}
                <div className="relative pl-2">
                  {/* Vertical Line */}
                  <div className="absolute left-[21px] top-14 bottom-14 w-0.5 bg-orange-600"></div>
                  
                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                        1
                      </div>
                      <div className="flex-1 pb-4">
                        <h3 className="text-lg font-bold text-black mb-2">Free Strategy Call</h3>
                        <p className="text-black text-base leading-relaxed">
                          Schedule your free strategy call, and we'll get it booked within 1 business day. During the call, we'll take a deep dive into your company and current tech stack to identify how our innovative, tech-driven strategies can deliver the most value to your business.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                        2
                      </div>
                      <div className="flex-1 pb-4">
                        <h3 className="text-lg font-bold text-black mb-2">
                          Get Custom Proposal - <span className="text-orange-600 italic">In One Week!</span>
                        </h3>
                        <p className="text-black text-base leading-relaxed">
                          Across a day after your free strategy call, you will receive a personalized fixed-fee proposal! This proposal will outline how we will evaluate your present state of technology, provide modernization plans for your stack, and map out how to revolutionize your business.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                        3
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-black mb-2">Start your Tech Transformation</h3>
                        <p className="text-black text-base leading-relaxed">
                          We will get started on our tech evaluation as soon as we decide on the next course of action. To ensure that we find every area of potential to make your technological stack an advantage, we will collaborate smoothly with your team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={scrollToForm}
                  className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Our Team
                </button>
              </div>

              {/* Right Side - Contact Cards */}
              <div className="space-y-4">
                {/* Sales Card */}
                <div className="bg-white border-2 border-blue-900 rounded-lg p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-blue-900 mb-4">Sales</h3>
                    {/* Headset Icon with Microphone */}
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        <svg className="w-16 h-16 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {/* Microphone */}
                        <div className="absolute left-3 top-4 w-3 h-3 bg-blue-900 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-blue-900 text-sm mb-1">
                      <a href="mailto:info@gnssoftware.in" className="hover:text-orange-600 transition-colors">
                      info@gnssoftware.in
                      </a>
                    </p>
                    <p className="text-blue-900 text-sm mb-2">
                      <a href="tel:+919059186584" className="hover:text-orange-600 transition-colors">
                        +91 - 90591 86584
                      </a>
                    </p>
                    <a
                      href="https://wa.me/919059186584?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20GNS%20Software%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors mt-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Support Card */}
                <div className="bg-white border-2 border-blue-900 rounded-lg p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-blue-900 mb-4">Support</h3>
                    {/* Person with Headset Icon */}
                    <div className="flex justify-center mb-4">
                      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                        {/* Person head */}
                        <circle cx="12" cy="8" r="4" stroke="#f97316" strokeWidth="2" fill="none"/>
                        {/* Person body/shoulders */}
                        <path d="M5 20c0-4 3-7 7-7s7 3 7 7" stroke="#f97316" strokeWidth="2" fill="none"/>
                        {/* Headset */}
                        <path d="M8 10c-1 0-2 1-2 2v2c0 1 1 2 2 2" stroke="#fff" strokeWidth="2" fill="none"/>
                        <path d="M16 10c1 0 2 1 2 2v2c0 1-1 2-2 2" stroke="#fff" strokeWidth="2" fill="none"/>
                        <path d="M8 14h8" stroke="#fff" strokeWidth="2"/>
                      </svg>
                    </div>
                    <p className="text-blue-900 text-sm mb-1">
                      <a href="mailto:info@gnssoftware.in" className="hover:text-orange-600 transition-colors">
                      info@gnssoftware.in
                      </a>
                    </p>
                    <p className="text-blue-900 text-sm mb-2">
                      <a href="tel:+919059186584" className="hover:text-orange-600 transition-colors">
                        +91 - 90591 86584
                      </a>
                    </p>
                    <a
                      href="https://wa.me/919059186584?text=Hello!%20I%20need%20support%20with%20GNS%20Software%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors mt-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Careers Card */}
                <div className="bg-white border-2 border-blue-900 rounded-lg p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-blue-900 mb-4">Careers</h3>
                    {/* Smiling Person with Headset Icon */}
                    <div className="flex justify-center mb-4">
                      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                        {/* Person head */}
                        <circle cx="12" cy="9" r="4" stroke="#f97316" strokeWidth="2" fill="none"/>
                        {/* Smile */}
                        <path d="M9 11c.5 1 1.5 1.5 3 1.5s2.5-.5 3-1.5" stroke="#f97316" strokeWidth="2" fill="none"/>
                        {/* Eyes */}
                        <circle cx="10" cy="8" r="0.5" fill="#f97316"/>
                        <circle cx="14" cy="8" r="0.5" fill="#f97316"/>
                        {/* Person body/shoulders */}
                        <path d="M5 20c0-4 3-7 7-7s7 3 7 7" stroke="#f97316" strokeWidth="2" fill="none"/>
                        {/* Headset */}
                        <path d="M7 11c-1 0-2 1-2 2v2c0 1 1 2 2 2" stroke="#f97316" strokeWidth="2" fill="none"/>
                        <path d="M17 11c1 0 2 1 2 2v2c0 1-1 2-2 2" stroke="#f97316" strokeWidth="2" fill="none"/>
                        <path d="M7 15h10" stroke="#f97316" strokeWidth="2"/>
                        {/* Microphone */}
                        <path d="M17 15l2-2" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="20" cy="13" r="1" fill="#f97316"/>
                      </svg>
                    </div>
                    <p className="text-blue-900 text-sm mb-1">
                      <a href="mailto:info@gnssoftware.in" className="hover:text-orange-600 transition-colors">
                      info@gnssoftware.in
                      </a>
                    </p>
                    <p className="text-blue-900 text-sm">
                      <a href="tel:+919059186584" className="hover:text-orange-600 transition-colors">
                        +91 - 90591 86584
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get answers to your questions Section */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Get answers to your questions
                </h2>
                <p className="text-gray-600 text-base">
                  Our clients turn to us to help them reimagine ways of working with technology.
                </p>
              </div>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded">
                  <p className="text-green-800 font-semibold">✓ Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              )}

              {errors.submit && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded">
                  <p className="text-red-800">{errors.submit}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      Enter Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter Your Name"
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Enter Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter Your Email"
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-900 mb-2">
                      Organization (optional)
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Organization"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                      Your Contact Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your Contact Number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-900 mb-2">
                    Inquiry Type
                  </label>
                  <input
                    type="text"
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Inquiry Type"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Enter Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="8"
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-colors ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter Your Message"
                  ></textarea>
                  {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={privacyConsent}
                    onChange={(e) => setPrivacyConsent(e.target.checked)}
                    className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-700 leading-relaxed">
                     I would like GNS Software to contact me based on the information provided above. I agree to the processing of my personal data as described in the <a href="#" className="text-orange-600 hover:underline font-medium">Privacy Notice</a>. Please select the privacy consent checkbox. <a href="#" className="text-orange-600 hover:underline font-medium">View terms of use</a>.
                  </label>
                </div>
                {errors.privacy && <p className="text-sm text-red-600 ml-8">{errors.privacy}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
