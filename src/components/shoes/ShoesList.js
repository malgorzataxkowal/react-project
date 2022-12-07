import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { creatShoe, deleteShoe } from "../../redux/action/shoesAction";

function ShoesList() {
  let initialShoe = { title: "", price: "0" };
  const [state, setState] = useState(initialShoe);

  const listOfShoes = useSelector((state) => state.shoes);
  const dispatch = useDispatch();

  function handleChnage(event) {
    return setState((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(creatShoe(state));
    setState(() => initialShoe);
  }
  function handleRemove(event) {
    event.preventDefault();
    const shoeId = event.target.parentElement.getAttribute("data_id");
    dispatch(deleteShoe(shoeId));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Shoes</h2>
        <h2>Add shoe:</h2>
        <input type="text" value={state.title} onChange={handleChnage} />
        <input type="submit" value="Add" />
      </form>
      <ul>
        {listOfShoes.map((shoe) => (
          <li data_id={shoe.title} key={shoe.title}>
            {shoe.title}
            <button id="removeBtn" onClick={handleRemove}>
              REMOVE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoesList;
