import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoesList from "./ShoesList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";

import {
  deleteShoeThunk,
  loadShoesThunk,
} from "../../redux/action/shoesAction";
import { loadAuthorsThunk } from "../../redux/action/authorsAction";

function ShoesPage() {
  const listOfShoes = useSelector((state) => state.shoes);
  const listOfAuthors = useSelector((state) => state.authors);
  const callsInprogress = useSelector((state) => state.apiCalls);
  const dispatch = useDispatch();
  const [redirection, setRedirection] = useState(false);

  useEffect(() => {
    if (listOfAuthors.length === 0) {
      dispatch(loadAuthorsThunk()).catch((e) => {
        throw e;
      });
    }
    if (listOfShoes.length === 0) {
      dispatch(loadShoesThunk()).catch((e) => {
        throw e;
      });
    }
  }, []);

  function handleRemove(event) {
    event.preventDefault();
    const shoeId =
      event.target.parentElement.parentElement.getAttribute("data_id");
    dispatch(deleteShoeThunk(shoeId));
  }
  function handleAddShoe() {
    setRedirection(true);
  }
  return (
    <>
      {redirection && <Redirect to={"/shoe"} />}
      <h2>List of shoes</h2>
      <button type="button" className="btn btn-primary" onClick={handleAddShoe}>
        Add shoe
      </button>
      {callsInprogress > 0 ? (
        <Spinner />
      ) : (
        <ShoesList shoesList={listOfShoes} handleRemove={handleRemove} />
      )}
    </>
  );
}

export default ShoesPage;
