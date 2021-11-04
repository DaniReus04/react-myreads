import { Link } from "react-router-dom";
import "./Home.css";

function Home({ currentlyReading, wantToRead, read, onChange }) {
  return (
    <>
      <Link className="search-page-button" to="/search">
        &#x1F50D;
      </Link>
      <section className="shelves">
        <hr className="hr" />
        <ul className="reading">
          {currentlyReading.length > 0 ? (
            currentlyReading.map((item) => {
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
                      <select
                        className="books-actions-select"
                        value={item.shelf}
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
                      <p className="author">{item.authors}</p>
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <p> You don't have books here! </p>
          )}
        </ul>
        <hr className="hr1" />
        <ul className="going-to">
          {wantToRead.length > 0 ? (
            wantToRead.map((item) => {
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
                      <select
                        className="books-actions-select"
                        value={item.shelf}
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
                      <p className="author">{item.authors}</p>
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <p> You don't have books here! </p>
          )}
        </ul>
        <hr className="hr2" />
        <ul className="read">
          {read.length > 0 ? (
            read.map((item) => {
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
                      <select
                        className="books-actions-select"
                        value={item.shelf}
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
                      <p className="author">{item.authors}</p>
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <p>You don't have books here!</p>
          )}
        </ul>
      </section>
    </>
  );
}

export default Home;
