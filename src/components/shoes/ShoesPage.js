import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoesList from "./ShoesList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

import {
  loadShoesThunk,
  deleteShoeThunk,
} from "../../redux/reducers/shoeReducer";
import { loadAuthorsThunk } from "../../redux/reducers/authorReducer";

function ShoesPage() {
  const listOfShoes = useSelector((state) => state.shoes);
  const listOfAuthors = useSelector((state) => state.authors);
  const dispatch = useDispatch();
  const [redirection, setRedirection] = useState(false);
  const [errors, setErrors] = useState({});
  const [deleting, setDeleting] = useState(false);

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
    setDeleting(true);
    dispatch(deleteShoeThunk(shoeId))
      .then(() => {
        setDeleting(false);
        toast.success("Successfully removed");
      })
      .catch((error) => {
        setDeleting(false);
        setErrors({ onDelete: error.message });
      });
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
      {listOfShoes.length === 0 && listOfAuthors.length === 0 ? (
        <Spinner />
      ) : (
        <ShoesList
          shoesList={listOfShoes}
          handleRemove={handleRemove}
          errors={errors}
          deleting={deleting}
        />
      )}
    </>
  );
}

export default ShoesPage;
