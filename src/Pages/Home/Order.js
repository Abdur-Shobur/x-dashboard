import React from 'react'

function Order({ new_data }) {
  const {
    order_id,
    user,
    product,
    price,
    vendor,
    payment,
    rating,
    vote,
  } = new_data

  return (
    <tr className="hover hover:rounded-none ">
      <td className="first:rounded-none py-3 pl-4 w-16">
        <h1 className="text-base font-semibold text-stone-700">#{order_id}</h1>
      </td>
      <td className="py-3  ">
        <div className=" flex items-center gap-3">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src={user.profile_pic}
            alt=""
          />

          <p className="text-sm text-stone-600">{user.name}</p>
        </div>
      </td>
      <td className="py-3">
        <h1 className="text-base text-stone-600 font-semibold">{product}</h1>
      </td>
      <td className="py-3">
        <h1 className="text-base text-stone-600 font-semibold">{price}</h1>
      </td>
      <td className="py-3  ">
        <h1 className="text-base text-stone-600 font-semibold">{vendor}</h1>
      </td>
      <td className="py-3  ">
        <h1 className="text-base text-stone-600 font-semibold">{payment}</h1>
      </td>

      <td className="last:rounded-none py-3">
        <h1 className="text-base text-stone-600 font-semibold">
          {rating}{' '}
          <span className="text-[12px] text-stone-500">({vote} votes)</span>
        </h1>
      </td>
    </tr>
  )
}

export default Order
