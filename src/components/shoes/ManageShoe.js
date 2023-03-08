import React, { useEffect, useState } from "react";
import ShoeForm from "./ShoeForm";
import Spinner from "../common/Spinner";
import {
  useLoadShoesQuery,
  useSaveShoeMutation,
} from "../../features/shoes/shoesSlice";
import { useLoadAuthorsQuery } from "../../features/authors/authorSlice";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const ManageShoe = () => {
  const { data: listOfShoes = [], isLoading: loadingShoes } =
    useLoadShoesQuery();
  const { data: listOfAuthors, isLoading: loadingAuthors } =
    useLoadAuthorsQuery();
  const { idParam } = useParams();
  const initialShoeID = listOfShoes.ids?.find(
    (id) => id === Number.parseInt(idParam)
  );
  const initialShoe = (!loadingShoes &&
    listOfShoes.entities[initialShoeID]) || {
    id: null,
    title: "",
    category: "",
  };
  const [shoe, setShoe] = useState(initialShoe);
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [saveShoe, { isLoading: saving }] = useSaveShoeMutation();

  useEffect(() => {
    setShoe(initialShoe);
  }, [listOfShoes.ids]);

  function isShoeValid() {
    const { title, authorId, category } = shoe;
    const errors = {};
    if (!title) errors.title = "Title is required";
    if (!authorId) errors.author = "AuthorId is required";
    if (!category) errors.category = "Category is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setShoe((prev) => ({ ...prev, [name]: value }));
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (!isShoeValid()) return;
    saveShoe(shoe)
      .unwrap()
      .then(toast.success("Shoe saved successfully"))
      .catch((error) =>
        console.log("saveShoes() rejectet with error: ", error)
      );
    history.push("/shoes");
  }

  return (
    <>
      {loadingAuthors || loadingShoes ? (
        <Spinner />
      ) : (
        <ShoeForm
          shoe={shoe}
          authors={listOfAuthors}
          onChange={handleChange}
          onSave={handleSubmit}
          saving={saving}
          errors={errors}
        />
      )}
    </>
  );
};

export default ManageShoe;
