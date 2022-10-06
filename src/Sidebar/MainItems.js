import { ChevronRightIcon } from '@heroicons/react/24/solid'
import React from 'react'
const newItems = (id) => {
  console.log(id)
}
function MainItems({ allitems }) {
  return (
    <div
      className="flex items-center justify-between my-6"
      onClick={() => newItems(allitems.id)}
    >
      <div className="flex items-center gap-2">
        <allitems.icon className="w-4 h-4" />

        <div className="text-xl ">{allitems.name}</div>
      </div>
      <div className="">
        <ChevronRightIcon className="w-4 h-4" />
      </div>
    </div>
  )
}

export default MainItems
