import React, { useEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from 'recharts'

function Revenue() {
  const [data, setData] = useState([])
  const revenue_data = [
    {
      id: 1,
      name: 'Order',
      value: 3453,
    },
    {
      id: 2,
      name: 'Earnings',
      value: 345233,
    },
    {
      id: 3,
      name: 'Refunds',
      value: 353,
    },
    {
      id: 4,
      name: 'Conversation Ratio',
      value: 23.04,
    },
  ]
  useEffect(() => {
    const load_data = async () => {
      const get_data = await fetch(
        'https://abdur-shobur.github.io/menu-json/yearly_data.json',
      )
      const json = await get_data.json()
      setData(json)
    }
    load_data()
  }, [])

  return (
    <div className="bg-white  rounded-sm shadow-sm">
      <div className="  border-b">
        <h1 className="p-4 text-xl text-stone-700">Revenue</h1>
      </div>
      <div className="flex justify-between border-b bg-slate-50 mb-4">
        {revenue_data.map((e) => {
          return (
            <div
              key={e.id}
              className="text-center border w-full  border-stone-100 py-2"
            >
              <h1 className="text-xl">{e.value}</h1>
              <p className="text-sm">{e.name}</p>
            </div>
          )
        })}
      </div>
      <div className="w-[400px] h-[350px]">
        {/* <ResponsiveContainer width="100%" height="100%"> */}
        <BarChart width={400} height={350} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Earning" fill="#7ba5f9" />
        </BarChart>
        {/* </ResponsiveContainer> */}
      </div>
    </div>
  )
}

export default Revenue
