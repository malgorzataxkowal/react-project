import { combineReducers } from "redux";
import shoeReducer from "./shoeReducer";
import authorReducer from "./authorReducer";

const rootReducer = combineReducers({
  shoes: shoeReducer,
  authors: authorReducer,
});

export default rootReducer;
