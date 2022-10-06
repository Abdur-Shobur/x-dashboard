import React from 'react'
import { BellIcon } from '@heroicons/react/24/solid'

function Notification() {
  return (
    <div className="dropdown dropdown-end p-1">
      <div
        tabIndex={0}
        className="btn rounded-full w-12 h-12 pl-1 pr-1 bg-transparent border-none hover:bg-cyan-100"
      >
        <BellIcon className="h-6 w-6 text-cyan-500" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow   rounded-box w-52 bg-white"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  )
}

export default Notification
