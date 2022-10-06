import React from 'react'

function Product({ product_data }) {
  const { img, name, date, price, order, stock } = product_data
  // console.log(product_data)
  return (
    <tr className="hover hover:rounded-none ">
      <th className="first:rounded-none py-3 pl-4 w-16">
        <div className="">
          <img
            className="w-10 h-10 object-cover min-w-[40px]"
            src={img}
            alt=""
          />
        </div>
      </th>
      <td className="py-3 w-1/3">
        <h1 className="text-base font-semibold text-stone-700">{name}</h1>
        <p className="text-sm text-stone-600">{date}</p>
      </td>
      <td className="py-3">
        <h1 className="text-base text-stone-600 font-semibold">${price}</h1>
        <p className="text-sm text-stone-600">Price</p>
      </td>
      <td className="py-3">
        <h1 className="text-base text-stone-600 font-semibold">{order}</h1>
        <p className="text-sm text-stone-600">Orders</p>
      </td>
      <td className="py-3 w-28">
        {JSON.parse(stock) - JSON.parse(order) < 1 ? (
          <h1 className="text-[10px] text-red-600 font-semibold bg-red-300 inline-block px-1 rounded">
            Out of stock
          </h1>
        ) : (
          <h1 className="text-base text-stone-600 font-semibold">
            {JSON.parse(stock) - JSON.parse(order)}
          </h1>
        )}

        <p className="text-sm text-stone-600">Stock</p>
      </td>

      <td className="last:rounded-none py-3">
        <h1 className="text-base text-stone-600 font-semibold">
          ${JSON.parse(order) * JSON.parse(price)}
        </h1>
        <p className="text-sm text-stone-600 ">Amount</p>
      </td>
    </tr>
  )
}

export default Product
