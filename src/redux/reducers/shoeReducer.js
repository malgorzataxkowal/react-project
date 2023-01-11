import { initialState } from "./initialState";
import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { getShoes, saveShoe, deleteShoe } from "../../api/shoesApi";

const loadShoesThunk = createAsyncThunk("shoes/loadShoesThunk", async () => {
  return getShoes().catch((error) => {
    throw error;
  });
});
const saveShoesThunk = createAsyncThunk(
  "shoes/saveShoesThunk",
  async (shoe, thunkAPI) => {
    return saveShoe(shoe)
      .then((response) => {
        shoe.id
          ? thunkAPI.dispatch(updateShoesSuccess(shoe))
          : thunkAPI.dispatch(createShoesSuccess(response));
      })
      .catch((error) => {
        throw error;
      });
  }
);
const deleteShoeThunk = createAsyncThunk(
  "shoes/deleteShoeThunk",
  async (shoeId) => {
    return deleteShoe(shoeId).catch((error) => {
      throw error;
    });
  }
);

const createShoesSuccess = createAction("shoes/CREAT_SHOE_SUCCESS");

const updateShoesSuccess = createAction("shoes/UPDATE_SHOE_SUCCESS");

const shoeReducer = createReducer(initialState.shoes, (builder) => {
  builder
    .addCase(createShoesSuccess, (state, action) => {
      state.push(action.payload);
    })
    .addCase(updateShoesSuccess, (state, action) => {
      return state.map((shoe) =>
        shoe.id === action.payload.id ? action.payload : shoe
      );
    })
    .addCase(deleteShoeThunk.fulfilled, (state, action) => {
      return state.filter((shoe) => shoe.id != action.meta.arg);
    })
    .addCase(loadShoesThunk.fulfilled, (state, action) => {
      return state.concat(action.payload);
    });
});
export { shoeReducer, loadShoesThunk, saveShoesThunk, deleteShoeThunk };
