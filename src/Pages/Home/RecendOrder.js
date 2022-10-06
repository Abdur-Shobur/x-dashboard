import React, { useEffect, useState } from 'react'
import Order from './Order'

function RecendOrder() {
  const [orders, setOrders] = useState([])
  useEffect(() => {
    const load_data = async () => {
      const json = await fetch(
        'https://abdur-shobur.github.io/menu-json/recent_order.json',
      )
      const data = await json.json()
      setOrders(data)
    }
    load_data()
  }, [])
  const new_order = orders.slice(0, 5)
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
          <thead>
            <tr>
              <td>Order ID</td>
              <td>Customer</td>
              <td>Product </td>
              <td>Amount </td>
              <td>Vendor</td>
              <td>Status</td>
              <td>Rating</td>
            </tr>
          </thead>
          <tbody>
            {new_order.map((e) => {
              return <Order new_data={e} key={e.id} />
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between p-4 ">
        <h1>Showing Results</h1>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1">Previous</div>
          <div className="flex items-center gap-1">Next</div>
        </div>
      </div>
    </div>
  )
}

export default RecendOrder
