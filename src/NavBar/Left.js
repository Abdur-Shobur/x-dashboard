import React from 'react'
import {
  MagnifyingGlassIcon,
  Bars3CenterLeftIcon,
} from '@heroicons/react/24/solid'
function Left({ btn_htndel }) {
  return (
    <div className="flex gap-4 pl-4">
      <Bars3CenterLeftIcon
        className="h-10 w-10 text-slate-600 cursor-pointer hover:text-sky-500 transition"
        onClick={() => btn_htndel(true)}
      />
      <div className="hidden md:flex items-center bg-slate-200 rounded-sm px-3">
        <MagnifyingGlassIcon className="h-5 w-5 text-slate-600 mr-2" />
        <input
          type="search"
          placeholder="Search"
          className="bg-slate-200 outline-none "
        />
      </div>
    </div>
  )
}

export default Left
