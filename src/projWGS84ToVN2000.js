import proj4 from 'proj4'

const hc_tinhs = [
  {ten_tp: '', ma_tp: '', kt_truc: 0, EPSG: ''}
]

function projWGS84ToVN2000(coord){
  return proj4('EPSG:4326', 'EPSG:9210',coord);
}

export default projWGS84ToVN2000