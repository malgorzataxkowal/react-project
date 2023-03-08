import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Shoes_List = ({
  shoesList,
  handleRemove,
  errors = {},
  deleting,
  isRefetchingShoes,
}) => {
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

const arePropsEqual = (prev, current) => {
  return (
    prev.isRefetchingShoes === current.isRefetchingShoes ||
    prev.isRefetchingShoes === false
  );
};

Shoes_List.propTypes = {
  shoesList: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  errors: PropTypes.object,
  deleting: PropTypes.bool.isRequired,
  isRefetchingShoes: PropTypes.bool.isRequired,
};

const ShoesList = React.memo(Shoes_List, arePropsEqual);
export default ShoesList;
