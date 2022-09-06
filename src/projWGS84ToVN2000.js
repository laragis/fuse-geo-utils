import proj4 from 'proj4'
import getProjectionByAdminCode from "./getProjectionByAdminCode";

function projWgs84ToVn2000(position, code) {
  return proj4('EPSG:4326', getProjectionByAdminCode(code), position.reverse()).reverse()
}

export default projWgs84ToVn2000
