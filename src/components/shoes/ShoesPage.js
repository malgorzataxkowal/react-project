import React, { useState } from "react";
import ShoesList from "./ShoesList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import {
  useLoadShoesQuery,
  useDeleteShoeMutation,
} from "../../features/shoes/shoesSlice";

function ShoesPage() {
  const { data: listOfShoes, isLoading: loadingShoes } = useLoadShoesQuery();
  const [redirection, setRedirection] = useState(false);
  const [errors, setErrors] = useState({});
  const [deleteShoeById, { isLoading: deleting }] = useDeleteShoeMutation();

  function handleRemove(event) {
    event.preventDefault();
    const shoeId =
      event.target.parentElement.parentElement.getAttribute("data_id");
    deleteShoeById(shoeId)
      .unwrap()
      .then(toast.success("Successfully removed"))
      .catch((error) => setErrors({ onDelete: error }));
  }
  function handleAddShoe() {
    setRedirection(true);
  }
  if (redirection) return <Redirect to={"/shoe"} />;
  if (loadingShoes) return <Spinner />;
  return (
    <div className="listOfShoes">
      <h2>List of shoes</h2>
      <button
        type="button"
        id="addShoe"
        className="btn btn-primary"
        onClick={handleAddShoe}
      >
        Add shoe
      </button>
      <ShoesList
        shoesList={listOfShoes}
        handleRemove={handleRemove}
        errors={errors}
        deleting={deleting}
      />
    </div>
  );
}

export default ShoesPage;
