import React from "react";
import PropTypes from "prop-types";
import "./Shelves.css";
import BooksList from "../BooksList/BooksList.jsx";

//Here I created the shelves list to put in the home page 

function Shelves({ shelves, onChange }) {
  return (
    <ul className="shelves">
      {shelves && shelves.length > 0 ? (
        shelves.map((item) => {
          return <BooksList key={item.id} item={item} onChange={onChange} />;
        })
      ) : (
        <p>You don't have books here!</p>
      )}
    </ul>
  );
}

Shelves.propTypes = {
  shelves: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Shelves;
