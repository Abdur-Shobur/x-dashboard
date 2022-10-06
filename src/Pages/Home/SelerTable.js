import { ChartBarIcon } from '@heroicons/react/24/solid'
import React from 'react'

function SelerTable({ product_data }) {
  const {
    img,
    company_name,
    user_name,
    porduct,
    price,
    percent,
    stock,
  } = product_data

  return (
    <tr className="hover hover:rounded-none ">
      <th className="first:rounded-none py-3 pl-4 w-16">
        <div className="">
          <img
            className="w-10 min-w-[40px] h-10 object-cover"
            src={img}
            alt=""
          />
        </div>
      </th>
      <td className="py-3 w-1/3">
        <h1 className="text-base font-semibold text-stone-700">
          {company_name}
        </h1>
        <p className="text-sm text-stone-600">{user_name}</p>
      </td>
      <td className="py-3">
        <h1 className="text-base text-stone-600 font-semibold">{porduct}</h1>
      </td>
      <td className="py-3">
        <h1 className="text-base text-stone-600 font-semibold">{stock}</h1>
        <p className="text-sm text-stone-600">Stock</p>
      </td>
      <td className="py-3 w-28">
        <h1 className="text-base text-stone-600 font-semibold">{price}</h1>
      </td>

      <td className="last:rounded-none py-3 ">
        <h1 className="text-base text-stone-600 font-semibold inline-block mr-1">
          {percent}
        </h1>
        <ChartBarIcon className="w-3 h-3 inline-block text-green-500" />
      </td>
    </tr>
  )
}

export default SelerTable
