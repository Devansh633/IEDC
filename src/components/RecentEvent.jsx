import React from 'react'
import bmc from "../assets/bmc.png"

const RecentEvent = () => {
    const RecentEvents =[
      {tittle:"BMC Workshop" ,
      schedule:"4th June | 9.00 AM",
      content:"During the session, Mr. Siddharth provided a detailed explanation of each of the nine segments of the BMC and elaborated on the importance of adapting it as the organization grows and evolves. He stressed the need for flexibility and openness to change to remain competitive in the market. To help the audience understand the concepts better, the speaker provided examples and introduced a virtual BMC that allowed the attendees to have hands-on experience with the tool.The session concluded with a Q&A session where the audience had the opportunity to ask Mr. Siddharth questions about Xeuron.Al and the BMC. The audience gained a better understanding of how the BMC can be used to create a solid and effective business plan. The session was well received by the audience, who left with valuable insights on entrepreneurship and business planning.",
      poster:bmc},  {tittle:"BMC Workshop" ,
      schedule:"4th June | 9.00 AM",
      content:"During the session, Mr. Siddharth provided a detailed explanation of each of the nine segments of the BMC and elaborated on the importance of adapting it as the organization grows and evolves. He stressed the need for flexibility and openness to change to remain competitive in the market. To help the audience understand the concepts better, the speaker provided examples and introduced a virtual BMC that allowed the attendees to have hands-on experience with the tool.The session concluded with a Q&A session where the audience had the opportunity to ask Mr. Siddharth questions about Xeuron.Al and the BMC. The audience gained a better understanding of how the BMC can be used to create a solid and effective business plan. The session was well received by the audience, who left with valuable insights on entrepreneurship and business planning.",
      poster:bmc},
        ]
  return (
    <div className="flex gap-8 flex-col mt-4">
        {
            RecentEvents.map((event)=>(
              <div className="py-4 flex flex-col md:flex-row-reverse items-center justify-evenly bg-bluee rounded-md  w-full">
                <div className="	  pt-8 mt-8  md:mt-0 md:pt-0">
                     <img src={event.poster} className='h-64 md:h-72' />
                </div>
                 <div className="text-white px-4 py-4 md:w-2/4">
                    <p className="font-semibold text-xl md:text-4xl md:font-bold">{event.tittle}</p>
                    <p className="font-semibold text-md md:text-lg md:font-bold py-2">{event.schedule}</p>
                    <p className="text-justify py-4">{event.content}</p>
                 </div>
              </div>
            ))
        }
    </div>
  )
}

export default RecentEvent