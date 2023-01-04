import * as shoeAPi from "../../api/shoesApi";
import * as types from "./actionTypes";
import { beginApiCall } from "./apiCallsAction";

function createShoesSuccess(shoe) {
  return { type: types.CREAT_SHOE_SUCCESS, shoe };
}
function updateShoesSuccess(shoe) {
  return { type: types.UPDATE_SHOE_SUCCESS, shoe };
}
function deleteShoeSuccess(shoeId) {
  return { type: types.DELETE_SHOE_SUCCESS, shoeId };
}

function loadShoesSuccess(shoes) {
  return { type: types.LOAD_SHOES_SUCCESS, shoes };
}
function deleteShoeThunk(shoeId) {
  return async function (dispatch) {
    dispatch(beginApiCall());
    return shoeAPi
      .deleteShoe(shoeId)
      .then(dispatch(deleteShoeSuccess(shoeId)))
      .catch((error) => {
        throw error;
      });
  };
}

function loadShoesThunk() {
  return async function (dispatch) {
    dispatch(beginApiCall());
    return shoeAPi
      .getShoes()
      .then((shoes) => {
        dispatch(loadShoesSuccess(shoes));
      })
      .catch((error) => {
        throw error;
      });
  };
}
function saveShoesThunk(shoe) {
  return async function (dispatch) {
    dispatch(beginApiCall());
    return shoeAPi
      .saveShoe(shoe)
      .then((response) => {
        shoe.id
          ? dispatch(updateShoesSuccess(shoe))
          : dispatch(createShoesSuccess(response));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export { saveShoesThunk, deleteShoeThunk, loadShoesThunk, loadShoesSuccess };
