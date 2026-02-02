import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Breadcrumb = ({ items }) => {
  const location = useLocation()

  // Default breadcrumb based on current route
  const getDefaultBreadcrumbs = () => {
    const path = location.pathname
    const crumbs = [{ label: 'Home', path: '/' }]

    if (path.startsWith('/services')) {
      crumbs.push({ label: 'Services', path: '/services' })
      if (path === '/services/web-development') {
        crumbs.push({ label: 'Custom Web Development', path: '/services/web-development' })
      } else if (path === '/services/ecommerce') {
        crumbs.push({ label: 'E-Commerce Solutions', path: '/services/ecommerce' })
      } else if (path === '/services/web-app') {
        crumbs.push({ label: 'Web Application Development', path: '/services/web-app' })
      } else if (path === '/services/seo-marketing') {
        crumbs.push({ label: 'SEO & Digital Marketing', path: '/services/seo-marketing' })
      } else if (path === '/services/work-monitoring') {
        crumbs.push({ label: 'Work Monitoring Tool', path: '/services/work-monitoring' })
      } else if (path === '/services/website-maintenance') {
        crumbs.push({ label: 'Website Maintenance', path: '/services/website-maintenance' })
      }
    } else if (path === '/about') {
      crumbs.push({ label: 'About Us', path: '/about' })
    } else if (path === '/our-works') {
      crumbs.push({ label: 'About Us', path: '/about' })
      crumbs.push({ label: 'Our Works', path: '/our-works' })
    } else if (path === '/case-studies') {
      crumbs.push({ label: 'About Us', path: '/about' })
      crumbs.push({ label: 'Case Studies', path: '/case-studies' })
    } else if (path === '/leadership-team') {
      crumbs.push({ label: 'About Us', path: '/about' })
      crumbs.push({ label: 'Leadership Team', path: '/leadership-team' })
    } else if (path === '/contact') {
      crumbs.push({ label: 'Contact', path: '/contact' })
    }

    return crumbs
  }

  const breadcrumbs = items || getDefaultBreadcrumbs()

  return (
    <div className="bg-gray-600 rounded-lg px-6 py-3 mb-8">
      <nav className="flex items-center gap-2">
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div className="flex items-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="white" />
                  <path d="M9 7l5 5-5 5" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-200 font-medium">{crumb.label}</span>
            ) : (
              <Link
                to={crumb.path}
                className="text-gray-200 hover:text-white transition-colors font-medium"
              >
                {crumb.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  )
}

export default Breadcrumb

