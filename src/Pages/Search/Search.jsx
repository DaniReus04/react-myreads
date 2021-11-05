import "./Search.css";
import { Link } from "react-router-dom";
import BackArrow from "../../utils/BackArrow.png";

function Search({ onChange, query }) {
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
          onChange={onChange}
        />
        <button className="search-button"> &#x1F50D; </button>
      </div>
    </>
  );
}

export default Search;
