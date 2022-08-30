import bbox from '@turf/bbox'

function toBounds(geojson) {
  let bboxArr = bbox(geojson)

  return [
    [bboxArr[1], bboxArr[0]],
    [bboxArr[3], bboxArr[2]]
  ]
}

export default toBounds