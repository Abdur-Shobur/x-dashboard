import React, { useEffect, useState } from 'react'
import CurrentUser from '../Hoc/CurrentUser'
import abdur_shobur from '../Images/Abdur Shobur.png'
function UserProfile(porps) {
  const user = porps.whichUser
  return (
    <div className="flex items-center gap-4 bg-cyan-100 p-4">
      <div className="w-10 ">
        <img
          src={user.img === 'img' ? 'Avada' : abdur_shobur}
          className="rounded-full"
          alt="abdur shobur"
        />
      </div>
      <div className="details">
        <h2 className="">{user.user}</h2>
        <p className="text-sm">{user.position}</p>
      </div>
    </div>
  )
}

export default CurrentUser(UserProfile)
