import { combineReducers } from "redux";
import shoeReducer from "./shoeReducer";

const rootReducer = combineReducers({ reducer: shoeReducer });

export default rootReducer;
