import React from "react";
import "./Shelves.css";
import BooksList from "../BooksList/BooksList.jsx";

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

export default Shelves;
