import React from 'react'
import {Link} from 'react-router-dom'
import esummit_logo from "../assets/esummit_logo.svg"
import msme_logo from "../assets/msme_logo.svg"
// import nisp_logo from "../assets/nisp_logo"
import ceo_logo from "../assets/ceo_logo.svg"
import workshop_logo from "../assets/workshop_logo.svg"
import hackathon_logo from "../assets/hackathon_logo.svg"
 
 
const FlagshipEvents = () => {
    let events=[
        {name:'E-Summit', icon:esummit_logo, link:'#'},
        {name:'MSME', icon:msme_logo, link:'#'},
        {name:'NISP', icon:msme_logo, link:'#'},
        {name:'CEO Connect', icon:ceo_logo, link:'#'},
        {name:'Hackathon', icon:hackathon_logo, link:'#'},
        {name:'Workshops', icon:workshop_logo, link:'#'},
    ]
  return (
    <div className="pt-24 h-screen md:px-10 px-7 mx-auto text-bluee">
        <div className="md:w-8/12 flex items-center justify-center mx-auto">
            <p className="flex items-center justify-center md:text-4xl text-2xl font-semibold text-center">We help students to gain skills, pursue
entrepreneurship and results speak
for themselves.
            </p>
        </div>
       <div className="flex flex-wrap  justify-center   md:right-52 absolute right-6">
       {events.map((event)=>(
           <Link to={event.link}>
            <div className="md:ml-40 ml-6 mt-8 md:mt-12 flex flex-col item-center justify-center gap-3 rounded w-32 cursor-pointer">
                <div className="bg-bluee rounded w-32 h-32 flex item-center justify-center">
                    <img className="w-20" src={event.icon} />
                </div>
                <p className="text-center text-lg font-medium">{event.name}</p>
            </div></Link>
        ))}
       </div>
    </div>
  )
}

export default FlagshipEvents 