import React, { useState } from 'react'
import { Footer, Navbar, RecentEvent} from '../components'
import { useNavigate ,Outlet} from 'react-router-dom'


const Events = () => {
    const navigate =useNavigate()
    const [active,setActive]=useState(false)

    const handleRecentEvent=()=>{
        setActive(!active)
        navigate("/events/recent")
    }
    const handleUpcomingEvent=()=>{
        setActive(!active)
        navigate("/events/upcoming")
            }
  return (
    <><Navbar />
    <div className=" mt-32 bg-gradient-to-t from-graay to-white flex flex-col items-center justify-center">
        
        <div className="">
        <button onClick={handleRecentEvent} className={`font-bold py-2 md:px-4 px-4 w-fit hover:bg-green-400 duration:500 ${active ? "bg-greeen text-white":"text-bluee border-2"}`}>Recent Events</button>
        <button onClick={handleUpcomingEvent} className={`font-bold py-2 md:px-4 px-4 w-fit hover:bg-green-400 duration:500 ${!active ? "bg-greeen text-white":"text-bluee border-2"}`}>Upcoming Evenst</button>
        </div>
        <div className="w-11/12  mt-8 md:mt-8 md:w-8/12 md:h-4/6">
            <Outlet />
        </div>
       
    </div>
    <Footer />
    </>
  )
}

export default Events