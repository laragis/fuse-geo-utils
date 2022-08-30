import flip from '@turf/flip'
import { getCoords } from '@turf/invariant'
import { flow } from 'lodash'

function toLatLngs(geojson) {
  return flow([
    getCoords,
    flip
  ])(geojson)
}

export default toLatLngs