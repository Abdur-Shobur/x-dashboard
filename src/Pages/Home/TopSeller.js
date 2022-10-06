import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

import React, { useEffect, useState } from 'react'
import SelerTable from './SelerTable'
function TopSeller() {
  const [item, setitem] = useState([])
  useEffect(() => {
    const load_data = async () => {
      const json = await fetch(
        'https://abdur-shobur.github.io/menu-json/seller_data.json',
      )
      const data = await json.json()
      setitem(data)
    }
    load_data()
  }, [item])
  const new_item = item.slice(0, 5)

  return (
    <div className="bg-white flex-1">
      <div className="flex justify-between p-4 border-b">
        <h1 className="text-xl text-stone-700">Top Sellers</h1>
        <div className="flex">
          <p>Sort By</p>
        </div>
      </div>
      <div className="overflow-x-auto border-b ">
        <table className="table w-full">
          <tbody>
            {new_item.map((e) => {
              return <SelerTable key={e.id} product_data={e} />
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between p-4 ">
        <h1>
          Showing {new_item.length + 1} of {item.length + 1} Results
        </h1>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            <ArrowLeftIcon className="w-3 h-3" />
            Previous
          </div>
          <div className="flex items-center gap-1">
            Next <ArrowRightIcon className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSeller
