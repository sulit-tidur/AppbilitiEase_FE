'use client'

import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useMemo } from 'react'

interface FacilityMapProps {
  position: [number, number]
}

const FacilityMap: React.FC<FacilityMapProps> = ({
  position
}) => {

  const icon = useMemo(() => new Icon({
    iconUrl: '/images/marker.png',
    iconSize: [75, 150]
  }), [])

  return (
    <div className='rounded-[15px] overflow-hidden isolate'>
      <MapContainer center={position} zoom={17} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position} icon={icon} />
      </MapContainer>
    </div>
  )
}

export default FacilityMap