import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { useSelector } from 'react-redux'

import FlightsTable from './components/FlightsTable'
import RoutingRoad from './components/RoutingRoad'

import 'leaflet/dist/leaflet.css'
import './App.css'

const defaultCenter = [59.84660399, 30.29496392]
const defaultZoom = 8

function App() {
  const { selectedRoute, allRoutes } = useSelector((state) => state.routes)

  if (typeof window !== 'undefined') {
    return (
      <div className='App'>
        <div className='sidebar'>
          <FlightsTable allRoutes={allRoutes} />
        </div>
        <MapContainer center={defaultCenter} zoom={defaultZoom}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <RoutingRoad selectedRoute={selectedRoute} />
        </MapContainer>
      </div>
    )
  }

  return null
}

export default App
