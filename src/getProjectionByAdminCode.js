import { find } from "lodash";
import adminCodes from "./adminCodes";

function getProjectionByAdminCode() {
  return find(adminCodes, { ma_tp: code })?.projection;
}

export default getProjectionByAdminCode;