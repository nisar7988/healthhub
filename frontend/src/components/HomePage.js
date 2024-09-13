import React from 'react'
import Banner from './Banner'
import Navbarline from './Reusable/Navbar'
import CardPage from  './CardPage'
import Specilitiesdoctor from './Specilitiesdoctor'
import AboutUs from './AboutUs'
import Footer from './Footer'
// import Hospitals from './Hospitals'

const HomePage = () => {
  return (
    <div>
        <Navbarline />
      <Banner />
      <CardPage />
      <Specilitiesdoctor />
      <AboutUs />
      {/* <Hospitals /> */}
      <Footer />
    </div>
  )
}

export default HomePage
