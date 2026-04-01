import React from "react";
import PropTypes from "prop-types";
import "./Shelves.css";
import BooksList from "../BooksList/BooksList.js";

//Here I created the shelves list to put in the home page

function Shelves({ shelves, onChange }) {
  return (
    <ul className="shelves">
      {shelves && shelves.length > 0 ? (
        shelves.map((item) => {
          return <BooksList key={item.id} item={item} onChange={onChange} />;
        })
      ) : (
        <li className="shelves-empty">
          <span className="shelves-empty-icon">📚</span>
          <p className="shelves-empty-text">No books on this shelf yet</p>
          <p className="shelves-empty-hint">
            Use the search button to find and add books
          </p>
        </li>
      )}
    </ul>
  );
}

Shelves.propTypes = {
  shelves: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Shelves;
