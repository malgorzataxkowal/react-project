import { combineReducers } from "@reduxjs/toolkit";
import { shoeReducer } from "./shoeReducer";
import { authorReducer } from "./authorReducer";
import { apiCallReducer } from "./apiCallReducer";

const rootReducer = combineReducers({
  shoes: shoeReducer,
  authors: authorReducer,
  apiCalls: apiCallReducer,
});

export default rootReducer;
