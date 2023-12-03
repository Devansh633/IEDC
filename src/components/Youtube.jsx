import React from 'react'
import {start1, start2, start3,start4, start5,start6,start7} from "../assets"

const Youtube = () => {
    let stages=[
        {img:start1},
        {img:start2},
        {img:start3},
        {img:start4},
        {img:start5},
        {img:start6},
        {img:start7},
        
    ]
  return (
    <div className="md:pt-28 pt-20 bg-graay md:h-screen md:px-10 px-7 pb-20">
        <div className="flex items-center justify-center flex-col gap-8">
            <p className="flex items-center pb-4 justify-center md:text-4xl text-2xl font-semibold text-center">
            Build your Startup with us
            </p>
           <div className="md:w-2/5 w-11/12">
           <div className="aspect-video w-full">
            <iframe
            src="https://www.youtube.com/embed/OjGcnUVP73Q"
            title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className=" top-0 left-0 w-full h-full "></iframe>
            </div>
           </div>
            <div className="md:flex md:gap-16 hidden">
                {
                    stages.map((stage)=>(
                        <img className="w-12" src={stage.img} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Youtube