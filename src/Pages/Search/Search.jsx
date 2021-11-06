import "./Search.css";
import { Link } from "react-router-dom";
import BackArrow from "../../utils/BackArrow.png";
import BooksList from "../../Components/BooksList/BooksList";

function Search({ onChange, query, books, onChangeSearch }) {
  console.log("teste", books);
  return (
    <>
      <div className="search-section">
        <Link className="go-back" to="/">
          <img src={BackArrow} alt="Back" />
        </Link>
        <input
          className="search-box"
          type="text"
          placeholder="Type your book here..."
          value={query}
          onChange={onChangeSearch}
        />
        <button className="search-button"> &#x1F50D; </button>
      </div>
      <ul className="books-ul">
        {books && books.length >= 0 ? (
          books.map((books) => {
            return (
              <BooksList key={books.id} item={books} onChange={onChange} />
            );
          })
        ) : (
          <p>No books found!</p>
        )}
      </ul>
    </>
  );
}

export default Search;
