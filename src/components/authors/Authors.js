import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLoadAuthorsQuery } from "../../features/authors/authorSlice";
import {
  selectShoesByAuthorID,
  useLoadShoesQuery,
} from "../../features/shoes/shoesSlice";
import AuthorsList from "./AuthorsList";
import AuthorShoesList from "./AuthorShoesList";
import Spinner from "../common/Spinner";

export default function Authors() {
  const {
    data: authorsList,
    isLoading: loadingAuthors,
    isSuccess,
  } = useLoadAuthorsQuery();
  const [selectedAuthor, setSelectedAuthor] = useState();
  const authorsShoess = useSelector((state) =>
    selectShoesByAuthorID(state, selectedAuthor)
  );
  const { data: shoesForSelectShoesByAuthorID } = useLoadShoesQuery();
  const currentSelectedAuthor = authorsList?.find(
    (author) => author.id == selectedAuthor
  );
  const handleDisplayAuthorsBooks = useCallback(
    (event) => {
      event.preventDefault();
      const author =
        event.target.parentElement.parentElement.getAttribute("data_id");
      author !== selectedAuthor && setSelectedAuthor(author);
    },
    [selectedAuthor]
  );
  return (
    <>
      {loadingAuthors && <Spinner />}
      {isSuccess && (
        <AuthorsList
          authorsList={authorsList}
          displayAuthorsBooks={handleDisplayAuthorsBooks}
        />
      )}
      {selectedAuthor &&
        (authorsShoess.length > 0 ? (
          <AuthorShoesList
            author={currentSelectedAuthor.name}
            authorShoes={authorsShoess}
          />
        ) : (
          <p>This author doesnt have any created shoes </p>
        ))}
    </>
  );
}
