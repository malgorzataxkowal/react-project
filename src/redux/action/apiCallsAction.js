import * as types from "./actionTypes";

export function beginApiCall() {
  return { type: types.BEGIN_API_CALL };
}
export function errorApiCall() {
  return { type: types.ERROR_API_CALL };
}
