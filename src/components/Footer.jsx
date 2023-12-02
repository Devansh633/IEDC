import React from 'react'
import {Link} from 'react-router-dom'
import iedc_logo from "../assets/iedc_logo.png"
import {AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineMail} from "react-icons/ai"

const Footer = () => {
    const resources=[
        {name:'Business Model Canvas',link:'#'},
        {name:'Financial Modeling',link:'#'},
        {name:'Pitch Deck',link:'#'},
    ]
    const initiatives=[
        {name:'E-Summit',link:'#'},
        {name:'MSME',link:'#'},
        {name:'CEO Connect',link:'#'},
        {name:'Hackathons',link:'#'},
    ]
    const organizations=[
        {name:'About Us',link:'#'},
        {name:'Our Team',link:'#'},
        {name:'Privacy Policy',link:'#'},
        {name:'Contact Us',link:'#'},
    ]
    const socialMedia=[
        {name:'instagram',icon:<AiOutlineInstagram />,link:'/iedc'},
        {name:'linkedin',icon:<AiOutlineLinkedin />,link:'/iedc'},
        {name:'twitter',icon:<AiOutlineTwitter />,link:'/iedc'},
        {name:'mail',icon:<AiOutlineMail />,link:'/iedc'},
    ]
  return (
    <div id="contactus" className=" pt-24 text-bluee">
        <div>
            <div className="bg-graay-2 py-4 flex justify-center items-center">
                <Link className="md:text-xl text-md font-bold text-bluee " to="/alumini">Join our Alumni Network</Link>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly pt-8 px-7 md:px-0  md:text-sm gap-6">
                <div><img className="md:h-32 h-20" src={iedc_logo} /></div>
                <div>
                    <ul className="flex flex-col gap-1 md:gap-2 text-md">
                        <li className="font-bold">Resources</li>
                        {resources.map((resource)=>(
                            <li><Link to={resource.link}>{resource.name}</Link></li>
                            ))}
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col gap-1 md:gap-2 text-md">
                        <li className="font-bold">Initiatives</li>
                        {initiatives.map((initiative)=>(
                            <li><Link to={initiative.link}>{initiative.name}</Link></li>
                            ))}
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col gap-1 md:gap-2 text-md">
                        <li className="font-bold">Organization</li>
                        {organizations.map((organization)=>(
                            <li><Link to={organization.link}>{organization.name}</Link></li>
                            ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-md font-medium">Find your next Cofounders <br/> and teamMates</p>
                    <Link to="https://t.me/+j39Zz1DFwuc4MTA1" target="_blank" className="bg-greeen font-bold py-2 md:px-8 w-2/3 md:w-full  text-white rounded  hover:bg-green-400 duration:500" >Join the Community</Link>
                </div>
                
            </div>
            <div className="flex flex-col-reverse gap-3 md:gap-0 md:flex-row justify-between text-sm py-8 md:px-10 px-7 md:mx-20">
                <div><p>Copyrights © 2023 All rights reserved </p></div>
                <div><p>Made with ❤️ by team IEDC</p></div>
                <div>
                    <ul className='flex gap-4 items-center hover:text-greeen duration:500'>
                        {socialMedia.map((item)=>(
                            <li><Link className='text-2xl' to={item.link}>{item.icon}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer