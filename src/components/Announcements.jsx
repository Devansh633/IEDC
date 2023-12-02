import React from 'react'
import announcemnt from "../assets/data/announcement.json"

const Announcements = () => {
   let text =announcemnt[0].announcement
  return (
    <div className="">
       <p>{text}</p>
    </div>
  )
}

export default Announcements