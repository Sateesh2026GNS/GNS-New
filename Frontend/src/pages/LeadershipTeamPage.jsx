import React, { useEffect } from 'react'
import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import LeadershipTeam from '../components/LeadershipTeam'
import Footer from '../components/Footer'

const LeadershipTeamPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 pt-32">
        <Breadcrumb />
      </div>
      <LeadershipTeam />
      <Footer />
    </div>
  )
}

export default LeadershipTeamPage
