import { BEGIN_API_CALL } from "../action/actionTypes";
import { initialState } from "./initialState";

export default function apiCallReducer(state = initialState.apiCalls, action) {
  const successAction =
    action.type.substr(action.type.length - 7) === "SUCCESS";

  if (action.type == BEGIN_API_CALL) {
    return state + 1;
  } else if (successAction) {
    return state - 1;
  } else return state;
}
