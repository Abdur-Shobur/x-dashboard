import React from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json'

function CountryMap() {
  return (
    <div className="w-[33%] max-h-[500px] bg-white self-stretch ml-4 shadow-sm">
      <div className="  border-b">
        <h1 className="p-4 text-xl text-stone-700">Country By Location</h1>
      </div>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: '#bae6fd',
                  },
                  hover: {
                    fill: '#7ba5f9',
                  },
                  pressed: {
                    fill: '#7ba5f9',
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  )
}

export default CountryMap
