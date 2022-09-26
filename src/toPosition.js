import center from '@turf/center'
import { getCoord } from '@turf/invariant'
import flip from '@turf/flip'
import { flow, isString } from 'lodash'
import isLatLongStr from 'validator/lib/isLatLong.js';
import parseLatLngStr from './parseLatLngStr'

function toPosition(geojson) {
  if(isString(geojson) && isLatLongStr(geojson)) return parseLatLngStr(geojson)

  return flow([
    center, flip, getCoord
  ])(geojson)
}

export default toPosition