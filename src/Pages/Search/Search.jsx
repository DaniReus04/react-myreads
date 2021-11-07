import { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import * as BooksAPI from "../../API/BooksAPI";
import BackArrow from "../../utils/BackArrow.png";
import BooksList from "../../Components/BooksList/BooksList";
import Loader from "../../Components/Loader/Loader";
import { DebounceInput } from "react-debounce-input";

function Search({ onChange }) {
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState({
    query: "",
    books: [],
  });
  const [booksError, setBooksError] = useState(false);

  const onChangeSearch = async (e) => {
    setLoader(true);
    const query = e.target.value;
    setSearch({ query: query });

    if (query.trim()) {
      const yourSearch = await BooksAPI.search(query);
      if (yourSearch.error) {
        setBooksError(true);
        setSearch({ books: [] });
      } else {
        setBooksError(false);
        setSearch({ books: yourSearch });
      }
    }
    setLoader(false);
  };

  return (
    <>
      <div className="search-section">
        <Link className="go-back" to="/">
          <img src={BackArrow} alt="Back" />
        </Link>
        {/* <input
          className="search-box"
          type="text"
          placeholder="Type your book here..."
          disabled={loader}
          value={search.query}
          onChange={onChangeSearch}
        /> */}
        <DebounceInput
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
          {booksError && <p>Something went wrong!</p>}
          {search.books && search.books.length > 0 && (
            <ul className="books-ul">
              {search.books.map((books) => {
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

export default Search;
