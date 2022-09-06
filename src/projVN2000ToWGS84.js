import proj4 from 'proj4'
import getProjectionByAdminCode from "./getProjectionByAdminCode";

function projVn2000ToWgs84(xy, code) {
  return proj4(getProjectionByAdminCode(code), 'EPSG:4326', xy.reverse()).reverse()
}

export default projVn2000ToWgs84
