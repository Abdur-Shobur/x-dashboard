import React from 'react'
import { SquaresPlusIcon } from '@heroicons/react/24/solid'

function Apps() {
  return (
    <div className="dropdown dropdown-end p-1">
      <div
        tabIndex={0}
        className="btn rounded-full w-12 h-12 pl-1 pr-1 bg-transparent border-none hover:bg-cyan-100"
      >
        <SquaresPlusIcon className="h-6 w-6 text-cyan-500" />
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

export default Apps
