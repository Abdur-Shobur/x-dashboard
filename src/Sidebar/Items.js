import { MinusIcon } from '@heroicons/react/24/solid'
import React from 'react'

function Items({ allitems }) {
  const { subItems } = allitems
  const single_items = (id) => {
    console.log(id)
  }
  return (
    <div className="bg-sky-800 pl-2 ">
      {subItems.map((e, id) => (
        <div
          key={id}
          className="flex items-center my-2"
          onClick={() => single_items(id)}
        >
          <MinusIcon className="w-4 h-4 mr-2" />
          <h1 className="text-lg cursor-pointer" key={id}>
            {e}
          </h1>
        </div>
      ))}
    </div>
  )
}

export default Items
