import React from "react";
import { PropTypes } from "prop-types";

const AuthorShoesList = ({ author, authorShoes }) => {
  return (
    <>
      <h3>Shoes created by : {author ?? ""}</h3>
      {authorShoes.map((item) => (
        <h4 key={item.id}>{item.title}</h4>
      ))}
    </>
  );
};
AuthorShoesList.prototype = {
  authorShoes: PropTypes.array.isRequired,
  author: PropTypes.object.isRequired,
};
export default AuthorShoesList;
