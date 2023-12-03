import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()
  return (
    <div className="w-max-full h-screen bg-gradient-to-t from-graay to-white flex items-center justify-center">
        
        <div className="flex flex-col items-center justify-center text-bluee gap-6">
          <h1 className="md:text-7xl text-3xl font-extrabold text-center ">
            TURN YOUR IDEAS <br />INTO BUSINESSES.</h1>
          <p className="text-center font-medium md:font-semibold w-8/12 mx-auto md:w-full md:text-2xl">
            Join 1000+ members who work on their ideas everyday</p>
         <div className="flex gap-4">
        <Link target="_blank" className="bg-greeen font-bold py-2 px-8 text-white rounded md:ml-8  hover:bg-green-400 duration:500" to="https://t.me/+j39Zz1DFwuc4MTA1">Join IEDC</Link>
        <button onClick={()=>{navigate("/pitch")}} className="border-2 border-gray-600 font-bold  py-2 px-8 rounded md:ml-8  hover:bg-green-400 duration:500">Pitch</button>
         </div>

        </div>
      
    </div>
  )
}

export default Landing