import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export default function ShoesList({
  shoesList,
  handleRemove,
  errors = {},
  deleting,
}) {
  return (
    <div>
      {errors.onDelete && (
        <div className="alert alert-danger" role="alert">
          {errors.onDelete}
        </div>
      )}
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Shoe</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {shoesList.map((shoe, index) => (
            <tr key={shoe.id} data_id={shoe.id}>
              <th scope="row">{index}</th>

              <td>
                <Link to={`/shoe/${shoe.id}`}>{shoe.title}</Link>
              </td>
              <td>
                <button
                  disabled={deleting}
                  id="removeBtn"
                  onClick={(event) => handleRemove(event)}
                >
                  REMOVE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
ShoesList.propTypes = {
  shoesList: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
  errors: PropTypes.object,
  deleting: PropTypes.bool.isRequired,
};
