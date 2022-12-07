import * as types from "./actionTypes";

function creatShoe(shoe) {
  return { type: types.CREAT_SHOE, shoe };
}
function deleteShoe(shoeId) {
  return { type: types.DELETE_SHOE, shoeId };
}
export { creatShoe, deleteShoe };
