import { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as BooksAPI from "../../API/BooksAPI";
import BackArrow from "../../utils/BackArrow.png";
import BooksList from "../../Components/BooksList/BooksList.js";
import Loader from "../../Components/Loader/Loader";
import { DebounceInput } from "react-debounce-input";

// Here I created a Link to the home page and the input fild with query and the books list

function Search({ onChange, shelves }) {
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState({
    query: "",
    books: [],
  });
  const [booksError, setBooksError] = useState(false);

  const onChangeSearch = async (e) => {
    setLoader(true); //Activating the loader when onChangeSearch is requested
    const query = e.target.value;
    setSearch({ query: query });

    if (query.trim()) {
      const yourSearch = await BooksAPI.search(query);
      if (yourSearch.error) {
        //Here is saying then only when get error show no books
        setBooksError(true);
        setSearch({ books: [] });
      } else {
        setBooksError(false);
        setSearch({ books: yourSearch }); //Here is saying to when the search is Ok show the books
      }
    }
    setLoader(false); //Saying to use the loader only in onChangeSearch
  };

  return (
    <>
      <div className="search-section">
        <Link className="go-back" to="/">
          <img src={BackArrow} alt="Back" />
        </Link>
        <DebounceInput //Imported a DebounceInput to set a minLength of caracters and a timeout when the user stop typing to search the correct books
          className="search-box"
          placeholder="Type your book here..."
          minLength={1}
          disabled={loader}
          value={search.query}
          debounceTimeout={700}
          onChange={onChangeSearch}
        />
      </div>

      {loader ? (
        <Loader />
      ) : (
        <>
          {booksError && (
            <p
              style={{
                textAlign: "center",
                fontSize: "25px",
              }}
            >
              Something went wrong!
            </p>
          )}
          {search.books && search.books.length > 0 && (
            <ul className="books-ul">
              {search.books.map((books) => {
                const wantToShelf = Object.values(shelves.wantToRead).find(
                  (booksOnShelves) => booksOnShelves.id === books.id
                );
                const currentlyShelf = Object.values(
                  shelves.currentlyReading
                ).find((booksOnShelves) => booksOnShelves.id === books.id);
                const readShelf = Object.values(shelves.read).find(
                  (booksOnShelves) => booksOnShelves.id === books.id
                );

                if (wantToShelf) {
                  books.shelf = wantToShelf.shelf;
                } else if (currentlyShelf) {
                  books.shelf = currentlyShelf.shelf;
                } else if (readShelf) {
                  books.shelf = readShelf.shelf;
                } else {
                  books.shelf = "none";
                }
                return (
                  <BooksList key={books.id} item={books} onChange={onChange} />
                );
              })}
            </ul>
          )}
          {search.query && search.books.length === 0 && <p>No books found!</p>}
        </>
      )}
    </>
  );
}
Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Search;
