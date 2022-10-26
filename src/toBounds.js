import bbox from '@turf/bbox'
import { isArray } from 'lodash'

function toBounds(geojson) {
  if(isArray(geojson)) return geojson

  let bboxArr = bbox(geojson)

  return [
    [bboxArr[1], bboxArr[0]],
    [bboxArr[3], bboxArr[2]]
  ]
}

export default toBounds