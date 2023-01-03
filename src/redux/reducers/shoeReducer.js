import * as types from "../action/actionTypes";
import { initialState } from "./initialState";

export default function shoeReducer(state = [], action) {
  switch (action.type) {
    case types.CREAT_SHOE_SUCCESS:
      return [...state, action.shoe];

    case types.UPDATE_SHOE_SUCCESS:
      return state.map((shoe) =>
        shoe.id === action.shoe.id ? action.shoe : shoe
      );

    case types.LOAD_SHOES_SUCCESS:
      return action.shoes;

    case types.DELETE_SHOE:
      return state.filter((shoe) => shoe.title != action.shoeId);

    default:
      return state;
  }
}
