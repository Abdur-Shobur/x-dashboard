import React, { useState } from 'react'
import Left from './Left'
import Right from './Right'
import Pagination from './Pagination'
import Dashboard from '../Sidebar/Dashboard'

function MainNav({ children }) {
  const [isOpen, setOpen] = useState(false)
  const toggle_nav = (e) => {
    isOpen ? setOpen(false) : setOpen(true)
  }

  return (
    <div className="flex  ">
      <div
        className={`${
          isOpen ? 'w-64' : 'hidden'
        } fixed h-full bg-sky-900 px-4 py-6 text-gray-200 overflow-y-auto  z-50 `}
      >
        <Dashboard btn_hend={toggle_nav} />
      </div>
      <div className={`w-full ${isOpen ? 'lg:ml-64' : 'ml-0'}`}>
        <div className="border-b-2">
          <div className="flex items-center justify-between border-b">
            <Left btn_htndel={toggle_nav} />
            <Right />
          </div>
          <div className="px-4">
            <Pagination />
          </div>
        </div>
        <div className="p-5 bg-sky-50">{children}</div>
      </div>
    </div>
  )
}

export default MainNav
