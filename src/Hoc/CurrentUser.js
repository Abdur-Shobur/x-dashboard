import React, { useState, useEffect } from 'react'

function CurrentUser(CurrentWhichUser) {
  const WhichUser = () => {
    const [user, setUser] = useState({
      img: 'img',
      user: 'Login Please!',
      position: 'Viwer',
    })
    useEffect(() => {
      fetch('User.json')
        .then((res) => res.json())
        .then((data) => setUser(data[0]))
    }, [])

    return <CurrentWhichUser whichUser={user} />
  }
  return WhichUser
}

export default CurrentUser
