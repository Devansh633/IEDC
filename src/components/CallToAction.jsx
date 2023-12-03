import React from 'react'
import {useNavigate, Link} from 'react-router-dom'

const CallToAction = () => {
  const navigate=useNavigate()
  return (
    <div className="px-7 md:px-10 pt-24">
        <div className="flex flex-col md:flex-row justify-center mx-auto gap-6 md:gap-0">
            <div className="py-16 pl-12 md:w-3/6 flex flex-col gap-6 justify-evenly bg-gradient-to-r from-graay-2  to-white">
                <p className="md:text-3xl text-xl font-medium md:font-normal  md:w-2/3 w-10/12">Practice Entrepreneur Challenges & Prepare for your venture</p>
                <p className="text-md md:w-5/12 w-10/12 text-lg">Start practicing your skills and build your dream startup.</p>
                <Link to="https://t.me/+j39Zz1DFwuc4MTA1" target="_blank" className="bg-greeen font-bold py-2  md:px-4 px-4 w-fit text-white rounded  hover:bg-green-400 duration:500">Join the Community</Link>

            </div>
            <div className="py-16 pl-12 bg-graay-2 flex flex-col gap-6 justify-evenly">
                <p className="md:text-3xl text-xl font-medium md:font-normal w-7/12">Get started your venture with IEDC</p>
                <p className=" w-10/12 text-lg">More than 300 startups from different departments across college trust IEDC</p>
                <button onClick={()=>(navigate("/pitch"))} className="bg-greeen font-bold py-2 md:px-4 px-4 w-fit  text-white rounded  hover:bg-green-400 duration:500">Pitch Your Idea</button>

            </div>
        </div>
    </div>
  )
}

export default CallToAction