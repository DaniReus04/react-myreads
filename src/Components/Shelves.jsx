import "./Shelves.css";

function Shelves({ reading, goingToRead, read, onChange }) {
  return (
    <section className="shelves">
      <hr className="hr" />
      <ul className="reading">
        {reading.map((item) => {
          return (
            <li className="reading-books" key={item.id}>
              <div>
                <figure>
                  <img
                    className="image"
                    src={item.imageLinks.thumbnail}
                    alt={item.title}
                  />
                </figure>
                <div>
                  <p className="title">{item.title}</p>
                  <p className="author">{item.authors}</p>
                </div>
              </div>
              <div>
                <select
                  className="books-actions"
                  value={item.shelf}
                  onChange={(e) => onChange(e, item, item.shelf)}
                >
                  <option value="" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Reading</option>
                  <option value="wantToRead">Going to Read</option>
                  <option value="read">Read</option>
                  <option value="">None</option>
                </select>
              </div>
            </li>
          );
        })}
      </ul>
      <hr className="hr1" />
      <ul className="going-to">
        {goingToRead.map((item) => {
          return (
            <li className="going-to-books" key={item.id}>
              <div>
                <figure>
                  <img
                    className="image"
                    src={item.imageLinks.thumbnail}
                    alt={item.title}
                  />
                </figure>
                <div>
                  <p className="title">{item.title}</p>
                  <p className="author">{item.authors}</p>
                </div>
              </div>
              <div>
                <select
                  className="books-actions"
                  value={item.shelf}
                  onChange={(e) => onChange(e, item, item.shelf)}
                >
                  <option value="" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Reading</option>
                  <option value="wantToRead">Going to Read</option>
                  <option value="read">Read</option>
                  <option value="">None</option>
                </select>
              </div>
            </li>
          );
        })}
      </ul>
      <hr className="hr2" />
      <ul className="read">
        {read.map((item) => {
          return (
            <li className="read-books" key={item.id}>
              <div>
                <figure>
                  <img
                    className="image"
                    src={item.imageLinks.thumbnail}
                    alt={item.title}
                  />
                </figure>
                <div>
                  <p className="title">{item.title}</p>
                  <p className="author">{item.authors}</p>
                </div>
              </div>
              <div>
                <select
                  className="books-actions"
                  value={item.shelf}
                  onChange={(e) => onChange(e, item, item.shelf)}
                >
                  <option value="" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Reading</option>
                  <option value="wantToRead">Going to Read</option>
                  <option value="read">Read</option>
                  <option value="">None</option>
                </select>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Shelves;
