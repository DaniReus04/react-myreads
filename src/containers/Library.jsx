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
  const [myBooks, setMyBooks] = useState([reading, read, goingToRead]);

  useEffect(() => {
    BooksAPI.getAll().then((res) => {
      setReading(res.filter((item) => item.shelf === "currentlyReading"));
      setGoingToRead(res.filter((item) => item.shelf === "wantToRead"));
      setRead(res.filter((item) => item.shelf === "read"));
      setNone(res.filter((item) => item.shelf === ""));
    });
  }, []);

  function onChangeBook(e, book, currShelf, none) {
    e.preventDefault();
    const changeShelf = e.target.value;

    BooksAPI.update(book, changeShelf).then(() => {
      book.shelf = changeShelf;

      setMyBooks((prevShelf) => {
        if (changeShelf !== none) prevShelf.myBooks[changeShelf].push(book);
        else {
        if (currShelf)
            prevShelf.myBooks[currShelf].filter((item) => item.id !== book.id);
        }
      });
    });
  }

  return (
    <>
      <Header />
      <div className="library">
        <Shelves
          onChange={onChangeBook}
          myBooks={myBooks}
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
