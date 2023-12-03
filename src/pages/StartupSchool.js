import React from 'react'
import { Footer, Navbar } from '../components'

const StartupSchool = () => {
  return (
    <>
    <Navbar />
    <div className=" h-screen bg-gradient-to-t from-graay to-white flex flex-col items-center justify-center">
        <p className="md:text-9xl text-4xl font-bold text-center md:font-semibold"><span className='text-greeen'>Startup</span> School</p>
        <p className="md:text-4xl text-2xl w-2/3 text-center text-gray-800 py-6">Learn the basics of Entrepreneurship easily</p>
    </div>
    <Footer />
    </>
  )
}

export default StartupSchool