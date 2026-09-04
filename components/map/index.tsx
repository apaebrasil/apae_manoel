"use client"

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect } from "react"

type ApaeLocation = {
  id: string
  name: string
  city: string
  address: string
  phone: string
  lat: number
  lng: number
}

function MapCenter({ location }: { location: ApaeLocation }) {
  const map = useMap()
  useEffect(() => {
    map.flyTo([location.lat, location.lng], 14, { duration: 0.8 })
  }, [location, map])
  return null
}

const pin = L.divIcon({
  className: "apae-pin",
  html: "<span></span>",
  iconSize: [30, 38],
  iconAnchor: [15, 38],
})

export function ApaeMap({
  locations,
  selected,
  onSelect,
}: {
  locations: ApaeLocation[]
  selected: ApaeLocation
  onSelect: (location: ApaeLocation) => void
}) {
  return (
    <div
      className="apae-map-wrap"
      aria-label="Mapa com as unidades APAE encontradas"
    >
      <MapContainer
        center={[selected.lat, selected.lng]}
        zoom={13}
        scrollWheelZoom={false}
        zoomControl={false}
        className="apae-map z-10"
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapCenter location={selected} />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={pin}
            eventHandlers={{ click: () => onSelect(location) }}
          >
            <Popup>
              <strong>{location.name}</strong>
              <br />
              {location.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export type { ApaeLocation }
