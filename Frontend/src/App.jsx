import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import OurWorksPage from './pages/OurWorksPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import LeadershipTeamPage from './pages/LeadershipTeamPage'
import EcommercePage from './pages/EcommercePage'
import WebDevelopmentPage from './pages/WebDevelopmentPage'
import WebAppPage from './pages/WebAppPage'
import SEOMarketingPage from './pages/SEOMarketingPage'
import WorkMonitoringPage from './pages/WorkMonitoringPage'
import WebsiteMaintenancePage from './pages/WebsiteMaintenancePage'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-works" element={<OurWorksPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/leadership-team" element={<LeadershipTeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/web-development" element={<WebDevelopmentPage />} />
        <Route path="/services/ecommerce" element={<EcommercePage />} />
        <Route path="/services/web-app" element={<WebAppPage />} />
        <Route path="/services/seo-marketing" element={<SEOMarketingPage />} />
        <Route path="/services/work-monitoring" element={<WorkMonitoringPage />} />
        <Route path="/services/website-maintenance" element={<WebsiteMaintenancePage />} />
      </Routes>
      <WhatsAppButton />
    </>
  )
}

export default App
