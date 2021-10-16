import { useState, useEffect } from "react";
import "./Library.css";
import Header from "../Components/Header";
import Shelves from "../Components/Shelves";
import * as BooksAPI from "../API/BooksAPI";

function Library() {
  const [reading, setReading] = useState([]);
  const [goingToRead, setGoingToRead] = useState([]);
  const [read, setRead] = useState([]);
  const [none, setNone] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((res) => {
      setReading(res.filter((item) => item.shelf === "currentlyReading"));
      setGoingToRead(res.filter((item) => item.shelf === "wantToRead"));
      setRead(res.filter((item) => item.shelf === "read"));
      setNone(res.filter((item) => item.shelf === ""));
    });
  }, []);

  function onChange(e, book) {
    e.preventDefault();
    const changeShelf = e.target.value;

    BooksAPI.update(book, changeShelf).then(() => {
      book.shelf = changeShelf;
    });
  }

  return (
    <>
      <Header />
      <div className="library">
        <Shelves
          reading={reading}
          goingToRead={goingToRead}
          read={read}
          none={none}
        />
      </div>
    </>
  );
}

export default Library;
