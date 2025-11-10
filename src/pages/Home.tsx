import React from 'react'
import Hero from '../sections/Hero'
import Overview from '../sections/Overview'
import VisionMission from '../sections/VisionMission'
import Products from '../sections/Products'
import Organization from '../sections/Organization'
import BMC from '../sections/BMC'
import FinancialPlan from '../sections/FinancialPlan'
import MarketingTools from '../sections/MarketingTools'
import SalesReport from '../sections/SalesReport'
import Closure from '../sections/Closure'

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Overview />
      <VisionMission />
      <Products />
      <Organization />
      <BMC />
      <FinancialPlan />
      <MarketingTools />
      <SalesReport />
      <Closure />
    </main>
  )
}

export default Home