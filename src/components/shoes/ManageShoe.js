import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoeForm from "./ShoeForm";
import Spinner from "../common/Spinner";

import { loadShoesThunk, saveShoesThunk } from "../../redux/action/shoesAction";
import { loadAuthorsThunk } from "../../redux/action/authorsAction";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

function ManageShoe() {
  const listOfShoes = useSelector((state) => state.shoes);
  const listOfAuthors = useSelector((state) => state.authors);
  const dispatch = useDispatch();
  const { id } = useParams();
  const initialShoe = listOfShoes.find((shoe) => shoe.id.toString() === id) || {
    id: null,
    title: "",
    category: "",
  };
  const [shoe, setShoe] = useState(initialShoe);
  const history = useHistory();
  const [saving, setSaving] = useState(false);

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

  useEffect(() => {
    setShoe(initialShoe);
  }, [listOfShoes]);

  function handleChange(event) {
    const { name, value } = event.target;
    setShoe((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    dispatch(saveShoesThunk(shoe)).then(() => {
      toast.success("Successfully saved");
      history.push("/shoes");
    });
  }

  return (
    <>
      {listOfAuthors.length === 0 || listOfShoes.length === 0 ? ( //TO DO: fix the problem of missing data in storage and desire of adding the first item
        <Spinner />
      ) : (
        <ShoeForm
          shoe={shoe}
          authors={listOfAuthors}
          onChange={handleChange}
          onSave={handleSubmit}
          saving={saving}
        />
      )}
    </>
  );
}

export default ManageShoe;
