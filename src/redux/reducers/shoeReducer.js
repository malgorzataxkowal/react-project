import * as types from "../action/actionTypes";

export default function shoeReducer(state = { shoes: [], count: 0 }, action) {
  switch (action.type) {
    case types.CREAT_SHOE:
      return {
        ...state,
        shoes: [...state.shoes, action.shoe],
        count: state.count + 1,
      };
    case types.DELETE_SHOE: {
      return {
        shoes: state.shoes.filter((shoe) => shoe.title != action.shoeId),
        count: state.count - 1,
      };
    }
    default:
      return state;
  }
}
