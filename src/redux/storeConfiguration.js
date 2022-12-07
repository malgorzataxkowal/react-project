import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/shoeReducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

const composeEnh = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnh(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
