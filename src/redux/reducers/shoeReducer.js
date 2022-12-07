export default function shoeReducer(state = { shoes: [], count: 0 }, action) {
  switch (action.type) {
    case "CREAT_SHOE":
      return {
        ...state,
        shoes: [...state.shoes, action.shoe],
        count: state.count + 1,
      };
    case "DELETE_SHOE": {
      debugger;
      return {
        shoes: state.shoes.filter((shoe) => shoe.title != action.shoeId),
        count: state.count - 1,
      };
    }
    default:
      return state;
  }
}
