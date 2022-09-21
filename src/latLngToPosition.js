import { GeoJSON } from 'leaflet'

function latLngToPosition(latlng){
  return GeoJSON.latLngToCoords(latlng).reverse()
}

export default latLngToPosition