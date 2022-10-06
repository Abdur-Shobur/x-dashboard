import React, { useEffect, useState } from 'react'
import Cart from '../../CommonComonent/Cart'
import PieChat from './PiChart'
import BestSellingProduct from './BestSellingProduct'
import CountryMap from './CountryMap'
import Gretting from './Gretting'
import Revenue from './Revenue'
import TopSeller from './TopSeller'
import RecendOrder from './RecendOrder'

function Home() {
  const [data, setData] = useState([])

  // earning data
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        'https://abdur-shobur.github.io/menu-json/db_earning_check.json',
      )
      const json = await data.json()
      setData(json)
    }
    fetchData()
  }, [data])
  return (
    <>
      <Gretting />
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {data.map((e) => {
          return <Cart key={e.id} cart_data={e} />
        })}
      </div>
      {/* hidden xl: */}
      <div className=" flex mt-4 items-center">
        <Revenue />
        <CountryMap />
      </div>
      <div className="xl:flex mt-4 gap-4 ">
        <BestSellingProduct />
        <TopSeller />
      </div>
      <div className="xl:flex mt-4 gap-4">
        <PieChat />
        <RecendOrder />
      </div>
    </>
  )
}

export default Home
