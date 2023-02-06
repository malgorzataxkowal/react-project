import { apiCallReducer } from "./apiCalls/apiCallReducer";
import { combineReducers } from "redux";
import { apiSlice } from "./api/apiSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  apiCalls: apiCallReducer,
});

export default rootReducer;
