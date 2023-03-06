import React from "react";
import { PropTypes } from "prop-types";

const AuthorsList = React.memo(function AuthorsList({
  authorsList,
  displayAuthorsBooks,
}) {
  return (
    <div>
      <h2>List of authors: </h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Author name:</th>
          </tr>
        </thead>
        <tbody>
          {authorsList.map((author) => (
            <tr key={author.id} data_id={author.id}>
              <td>
                <button onClick={displayAuthorsBooks}>{author.name}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

AuthorsList.prototype = {
  authorsList: PropTypes.array.isRequired,
};
export default AuthorsList;
