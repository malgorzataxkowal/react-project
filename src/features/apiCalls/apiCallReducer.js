import { initialState } from "../initialState";
import { createReducer } from "@reduxjs/toolkit";

const apiCallReducer = createReducer(initialState.apiCalls, (builder) => {
  builder
    .addMatcher(
      (action) => action.type.endsWith("/fulfilled"),
      (state) => --state
    )
    .addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state) => ++state
    )
    .addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state) => --state
    );
});
export { apiCallReducer };
