import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getAuthors } from "../../api/authorApi";

const loadAuthorsThunk = createAsyncThunk(
  "authors/loadAuthorsThunk",
  async () => {
    return getAuthors().catch((error) => {
      throw error;
    });
  }
);

const authorReducer = createReducer(initialState.authors, (builder) => {
  builder.addCase(loadAuthorsThunk.fulfilled, (state, action) => {
    return action.payload;
  });
});

export { loadAuthorsThunk, authorReducer };
