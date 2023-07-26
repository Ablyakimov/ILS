import { useEffect } from 'react'
import L from 'leaflet'
import { useMap } from 'react-leaflet'

import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine'

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
})

const RoutingRoad = ({ selectedRoute }) => {
  const map = useMap()

  useEffect(() => {
    if (!map) return
    const routingControl = L.Routing.control({
      waypoints: selectedRoute.waypoints,
      fitSelectedRoutes: true,
      routeWhileDragging: false,
      createMarker: function (_, { latLng }) {
        return new L.Marker(latLng, { draggable: false })
      },
      lineOptions: {
        addWaypoints: false,
        styles: [{ color: '#FF0000', weight: 2 }],
      },
    }).addTo(map)
  
    return () => map.removeControl(routingControl)
  }, [map, selectedRoute])

  return null
}

export default RoutingRoad
