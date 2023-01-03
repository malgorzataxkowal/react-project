import * as shoeAPi from "../../api/shoesApi";
import * as types from "./actionTypes";

function createShoesSuccess(shoe) {
  return { type: types.CREAT_SHOE_SUCCESS, shoe };
}
function updateShoesSuccess(shoe) {
  return { type: types.UPDATE_SHOE_SUCCESS, shoe };
}
function deleteShoe(shoeId) {
  return { type: types.DELETE_SHOE, shoeId };
}

function loadShoesSuccess(shoes) {
  return { type: types.LOAD_SHOES_SUCCESS, shoes };
}

function loadShoesThunk() {
  return async function (dispatch) {
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

export { saveShoesThunk, deleteShoe, loadShoesThunk, loadShoesSuccess };
