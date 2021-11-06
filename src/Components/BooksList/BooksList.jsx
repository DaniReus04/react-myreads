import "./BooksList.css";

function BooksList({ item, onChange }) {
  return (
    <li className="shelf" key={item.id}>
      <div className="individual-shelf">
        <div className="image">
          <figure>
            <img
              src={item.imageLinks ? item.imageLinks.thumbnail : ""}
              alt={item.title}
            />
          </figure>
        </div>
        <div>
          <select
            className="books-actions-select"
            value="Move to..."
            onChange={(e) => onChange(e, item, item.shelf)}
          >
            <option disabled>Move to...</option>
            <option value="currentlyReading">Reading</option>
            <option value="wantToRead">Going to Read</option>
            <option value="read">Read</option>
            <option value="">None</option>
          </select>
        </div>
        <div>
          <p className="title">{item.title}</p>
          <p className="author">{item.authors ? item.authors : "No author"}</p>
        </div>
      </div>
    </li>
  );
}

export default BooksList;
