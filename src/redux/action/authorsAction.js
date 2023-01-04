import { LOAD_AUTHORS_SUCCESS } from "./actionTypes";
import { getAuthors } from "../../api/authorApi";
import { beginApiCall, errorApiCall } from "./apiCallsAction";

function loadAuthorsSuccess(authors) {
  return { type: LOAD_AUTHORS_SUCCESS, authors };
}

function loadAuthorsThunk() {
  return async function (dispatch) {
    dispatch(beginApiCall());
    return getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        dispatch(errorApiCall());
        throw error;
      });
  };
}
export { loadAuthorsThunk };
