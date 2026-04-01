import PropTypes from "prop-types";
import "./BooksList.css";
import NoImage from "../../utils/noimage.png";

//In this page I created the books list to use in the Home and Search page when the books are beeing requested

function BooksList({ item, onChange }) {
  return (
    <li className="book-card" key={item.id}>
      <div className="book-card-inner">
        <div className="book-cover-wrapper">
          <figure>
            <img
              src={
                item.imageLinks && item.imageLinks.thumbnail
                  ? item.imageLinks.thumbnail
                  : NoImage
              }
              alt={item.title}
            />
          </figure>
          <div className="book-shelf-badge">
            <select
              className="books-actions-select"
              value={item.shelf ? item.shelf : "none"}
              onChange={(e) => onChange(e, item, item.shelf)}
            >
              <option disabled>Move to...</option>
              <option value="currentlyReading">Reading</option>
              <option value="wantToRead">Going to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-info">
          <p className="book-title">{item.title}</p>
          <p className="book-author">
            {item.authors
              ? Array.isArray(item.authors)
                ? item.authors.join(", ")
                : item.authors
              : "Unknown author"}
          </p>
        </div>
      </div>
    </li>
  );
}

BooksList.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BooksList;
