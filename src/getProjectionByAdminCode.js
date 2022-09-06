import { find } from "lodash";
import adminCodes from "./adminCodes";

function getProjectionByAdminCode(code) {
  return find(adminCodes, { ma_tp: code })?.projection;
}

export default getProjectionByAdminCode;