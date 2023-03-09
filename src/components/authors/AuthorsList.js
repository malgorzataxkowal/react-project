import React from "react";
import { PropTypes } from "prop-types";

function Authors_List({ authorsList, displayAuthorsBooks }) {
  return (
    <div className="authorsList">
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
}

function arePropsEqual(p1, p2) {
  return p1.authorsList.length === p2.authorsList.length;
}
const AuthorsList = React.memo(Authors_List, arePropsEqual);

Authors_List.prototype = {
  authorsList: PropTypes.array.isRequired,
};
export default AuthorsList;
