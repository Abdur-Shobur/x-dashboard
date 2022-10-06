import { ChevronRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

function Pagination() {
  return (
    <div className="py-1 flex justify-between items-center">
      <h1 className="text-xl font-medium">Dashobard</h1>
      <div className="hidden sm:flex justify-center items-center">
        <h1 className=" ">
          Dashboard {<ChevronRightIcon className="w-4 h-4 inline-block " />}{' '}
          Dashobard
        </h1>
      </div>
    </div>
  )
}

export default Pagination
