!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@turf/center"),require("@turf/invariant"),require("@turf/flip"),require("lodash"),require("validator/lib/isLatLong.js"),require("@turf/bbox"),require("proj4")):"function"==typeof define&&define.amd?define(["exports","@turf/center","@turf/invariant","@turf/flip","lodash","validator/lib/isLatLong.js","@turf/bbox","proj4"],e):e((t||self).fuseGeoUtils={},t.center,t.invariant,t.flip,t.lodash,t.isLatLongStr,t.bbox,t.proj4)}(this,function(t,e,r,n,o,u,i,f){function a(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var l=/*#__PURE__*/a(e),s=/*#__PURE__*/a(n),d=/*#__PURE__*/a(u),p=/*#__PURE__*/a(i),c=/*#__PURE__*/a(f);function b(t){return d.default(t)?g(t):o.flow([l.default,s.default,r.getCoord])(t)}function g(t){var e=/^\s*?(-?[0-9]+\.?[0-9]+?)\s*,\s*(-?[0-9]+\.?[0-9]+?)\s*$/.exec(t);if(e&&3===e.length){var r=parseFloat(e[1]),n=parseFloat(e[2]);return r>=-90&&r<=90&&n>=-180&&n<=180?[r,n]:null}return null}t.parseLatLngStr=g,t.projVN2000ToWGS84=function(){},t.projWGS84ToVN2000=function(t){return c.default("EPSG:4326","EPSG:9210",t)},t.toBounds=function(t){var e=p.default(t);return[[e[1],e[0]],[e[3],e[2]]]},t.toLatLng=function(t){var e=b(t);return{lat:e[0],lng:e[1]}},t.toLatLngs=function(t){return o.flow([r.getCoords,s.default])(t)},t.toPosition=b});
//# sourceMappingURL=index.umd.js.map
