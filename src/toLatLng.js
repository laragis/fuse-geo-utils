import toPosition from './toPosition'

function toLatLngs(geojson) {
  const position = toPosition(geojson)

  return {
    lat: position[0],
    lng: position[1]
  }
}

export default toLatLngs