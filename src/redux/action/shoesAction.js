function creatShoe(shoe) {
  return { type: "CREAT_SHOE", shoe };
}
function deleteShoe(shoeId) {
  return { type: "DELETE_SHOE", shoeId };
}
export { creatShoe, deleteShoe };
