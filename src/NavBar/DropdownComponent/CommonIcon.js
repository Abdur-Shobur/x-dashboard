import React from 'react'
import { MoonIcon, ViewfinderCircleIcon } from '@heroicons/react/24/solid'

function CommonIcon({ icon }) {
  //   const { ViewfinderCircleIcon } = icon
  //   console.log(icon)
  const full_screen_mode = () => {
    console.log('fullscreen mode')
  }
  const theme_changing_mode = () => {
    console.log('dark mode')
  }
  return (
    <div className="dropdown dropdown-end p-1">
      <div className="btn rounded-full w-12 h-12 pl-1 pr-1 bg-transparent border-none hover:bg-cyan-100">
        {icon === 'moon' ? (
          <MoonIcon
            className="h-6 w-6 text-cyan-500"
            onClick={theme_changing_mode}
          />
        ) : (
          <ViewfinderCircleIcon
            className="h-6 w-6 text-cyan-500"
            onClick={full_screen_mode}
          />
        )}
      </div>
    </div>
  )
}

export default CommonIcon
