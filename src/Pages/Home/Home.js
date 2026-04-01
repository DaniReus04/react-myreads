import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Home.css";
import Shelves from "../../Components/Shelves/Shelves";

//Here a seted it shelf to their correct status and created a Link to the search page

const shelfConfig = [
  { key: "currentlyReading", title: "Currently Reading" },
  { key: "wantToRead", title: "Want to Read" },
  { key: "read", title: "Read" },
];

function Home({ shelves, onChange }) {
  return (
    <div className="home-page">
      {shelfConfig.map(({ key, title }) => (
        <section key={key} className="shelf-section">
          <div className="shelf-section-header">
            <h2 className="shelf-section-title">{title}</h2>
            <span className="shelf-section-count">
              {shelves[key].length}{" "}
              {shelves[key].length === 1 ? "book" : "books"}
            </span>
          </div>
          <Shelves shelves={shelves[key]} onChange={onChange} />
        </section>
      ))}

      <Link className="search-fab" to="/search" aria-label="Search books">
        <svg viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </Link>
    </div>
  );
}

Home.propTypes = {
  shelves: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Home;
