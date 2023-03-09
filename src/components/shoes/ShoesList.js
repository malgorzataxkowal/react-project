import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const ShoesList = ({ shoesList, handleRemove, errors = {}, deleting }) => {
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
          {shoesList.ids.map((id) => (
            <tr key={id} data_id={id}>
              <th scope="row">{id}</th>

              <td>
                <Link to={`/shoe/${id}`}>{shoesList.entities[id].title}</Link>
              </td>
              <td>
                <button
                  disabled={deleting}
                  id="removeBtn"
                  onClick={handleRemove}
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
};

ShoesList.propTypes = {
  shoesList: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  errors: PropTypes.object,
  deleting: PropTypes.bool.isRequired,
};
export default ShoesList;
