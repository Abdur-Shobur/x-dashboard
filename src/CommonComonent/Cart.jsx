import {
  ArrowUpRightIcon,
  ArrowDownRightIcon,
  CurrencyDollarIcon,
  PlusIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  CreditCardIcon,
} from '@heroicons/react/24/solid'
import React, { useState } from 'react'

function Cart({ cart_data }) {
  const { id, name, percent, value, link } = cart_data
  const [data, setData] = useState(percent)
  const icons = [
    {
      id: 1,
      icon: CurrencyDollarIcon,
      style_icon: 'text-sky-600',
      style_bg: 'bg-sky-200',
    },
    {
      id: 2,
      icon: ShoppingBagIcon,
      style_icon: 'text-violet-500',
      style_bg: 'bg-violet-200',
    },
    {
      id: 3,
      icon: UserCircleIcon,
      style_icon: 'text-yellow-600',
      style_bg: 'bg-yellow-200',
    },
    {
      id: 4,
      icon: CreditCardIcon,
      style_icon: 'text-green-600',
      style_bg: 'bg-green-200',
    },
  ]
  const found = icons.find(({ id }) => {
    return id === cart_data.id
  })

  return (
    <>
      <div className=" bg-white shadow-sm rounded-sm p-3 px-4 flex flex-col justify-between h-32">
        <div className="flex items-center justify-between">
          <h6 className="text-stone-600 text-xl ">{name}</h6>
          <div className="flex items-center gap-1 text-lg">
            {data < 0 ? (
              <div className="flex items-center text-red-600">
                <ArrowDownRightIcon className="h-3 w-3" /> {data}%
              </div>
            ) : data > 0 ? (
              <div className="flex items-center text-green-500 ">
                <ArrowUpRightIcon className="h-3 w-3 " />{' '}
                <PlusIcon className="h-3 w-3" /> {data}%
              </div>
            ) : (
              <div className="flex items-center text-stone-700">
                <PlusIcon className="h-3 w-3" /> {data}%
              </div>
            )}
          </div>
        </div>
        <div className="text-2xl font-semibold text-sky-800">{value}</div>
        <div className="flex justify-between items-end relative">
          <h1 className="text-sky-800 text-sm border-b border-b-sky-800 ">
            {link}
          </h1>
          <div
            className={`${found.style_bg} flex justify-center items-center w-8 h-8 rounded-sm shadow-sm absolute right-0 bottom-0`}
          >
            <found.icon className={`h-6 w-6 ${found.style_icon}`} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
