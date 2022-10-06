import { PlusIcon } from '@heroicons/react/24/solid'
import React from 'react'
import CurrentUser from '../../Hoc/CurrentUser'
import DatePickerjs from '../Home/DatePicker'

function Gretting(porps) {
  const { user } = porps.whichUser
  return (
    <>
      <div className="flex justify-between mb-6">
        <div className="">
          <h1 className="text-stone-700 font-medium text-lg ">
            Hello {user}!{' '}
          </h1>
          <p className="text-sm text-stone-700">
            Here's what's happening with your store today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:inline">
            <DatePickerjs />
          </div>
          <button className="hidden sm:flex items-center gap-1 border py-1 px-5 bg-sky-200 text-sky-600 hover:text-sky-900 rounded">
            <PlusIcon className="h-3 w-3" /> Add Product
          </button>
        </div>
      </div>
    </>
  )
}

export default CurrentUser(Gretting)
