import React from 'react'
import { Navbar, Landing, FlagshipEvents, Youtube, Footer, CallToAction,Announcements } from '../components'

const Home = () => {
  return (
    <>
    
    <Navbar />
    {/* <Announcements /> */}
    <Landing />
    <FlagshipEvents />
    <Youtube />
    <CallToAction />
    <Footer />
    
    </>
  )
}

export default Home