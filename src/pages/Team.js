import React from 'react'
import { Footer, Navbar, TeamFrame } from '../components'
import nandan from "../assets/team/nandan.png"
import dheeraj from "../assets/team/dheeraj.png"
import anish from "../assets/team/anish.png"
import dinesh from "../assets/team/dinesh.png"
import ishika from "../assets/team/ishika.png"
import nikhil from "../assets/team/nikhil.png"
import sarthak from "../assets/team/sarthak.png"
import shivang from "../assets/team/shivang.png"
import shivam from "../assets/team/shivam.png"
import vaibhav from "../assets/team/vaibhav.png"


const Team = () => {
    const team =[
        {name:"Dheeraj Chandra", role:"core" ,image:dheeraj},
        {name:"S Sai Nandan", role:"core" ,image:nandan},
        {name:"Shivang Chajjer", role:"core" ,image:shivang},
        {name:"Anish Singhal", role:"Event Lead" ,image:anish},
        {name:"Dinesh A", role:"Creative Lead" ,image:dinesh},
        {name:"Vaibhav", role:"Outsourcing Lead" ,image:vaibhav},
        {name:"Ishika Daga", role:"Design Representative" ,image:ishika},
        {name:"Nikhil Bhutra", role:"SM Representative" ,image:nikhil},
        {name:"Sarthak Sahu", role:"Curation Representative" ,image:sarthak},
        {name:"Shivam Gupta", role:"Media Representative" ,image:shivam},
    ]
  return (
   <>
   <Navbar />
   <div className="mt-32">
    <div className="flex text-center text-5xl font-bold items-center justify-center mb-10">
        <p>Our Team</p>
    </div>
    <div className="flex flex-wrap gap-4 md:gap-16  md:px-16 items-center justify-center">
        {team.map((member)=>(
            <TeamFrame name={member.name} role={member.role} image={member.image} />
        ))}
    </div>
   </div>
   <Footer />
   </>
  )
}

export default Team