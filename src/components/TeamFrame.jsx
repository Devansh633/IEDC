import React from 'react'


const TeamFrame = ({name,image,role}) => {
  return (
    <div>
      <div className='border-2 border-black flex items-center  flex-col justify-center py-4 rounded w-44'>
        <img className="w-32 rounded" src={image} alt="" />
        <p className="pt-4 text-lg font-semnibold">{name}</p>
        <p className="text-center ">{role}</p>

      </div>
    </div>
  )
}

export default TeamFrame