import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "../Components/Header/Header";
import Search from "../Pages/Search/Search";
import * as BooksAPI from "../API/BooksAPI";
import Home from "../Pages/Home/Home.jsx";
import Loader from "../Components/Loader/Loader";

function App() {
  const [shelves, setShelves] = useState({
    //Here I created my books state
    currentlyReading: [],
    wantToRead: [],
    read: [],
  });
  const [loader, setLoader] = useState(true); //A loader for the returning from API

  useEffect(() => {
    BooksAPI.getAll().then((res) => {
      setShelves({
        currentlyReading: res.filter(
          (item) => item.shelf === "currentlyReading"
        ),
        wantToRead: res.filter((item) => item.shelf === "wantToRead"),
        read: res.filter((item) => item.shelf === "read"),
      });
      setLoader(false);
    });
  }, []); //I get the books with the shelf property, and pass then to the correct state shelf

  const onChange = async (e, book, oldShelf) => {
    e.preventDefault();
    const newShelf = e.target.value;
    setLoader(true);

    await BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;

      if (oldShelf !== undefined && newShelf !== "none") {
        setShelves({
          ...shelves,
          [newShelf]: [...shelves[newShelf], book],
          [oldShelf]: shelves[oldShelf].filter((item) => item.id !== book.id),
        });
      } else if (oldShelf !== undefined) {
        setShelves({
          ...shelves,
          [oldShelf]: shelves[oldShelf].filter((item) => item.id !== book.id),
        });
      } else {
        setShelves({
          ...shelves,
          [newShelf]: [...shelves[newShelf], book],
        });
      }
      // switch (newShelf) {
      //   case "currentlyReading":
      //     console.log("123");
      //     setShelves({
      //       ...shelves,
      //       currentlyReading: [...shelves.currentlyReading, book],
      //       [oldShelf]: shelves[oldShelf].filter((item) => item.id !== book.id),
      //     });
      //     break;

      //   case "wantToRead":
      //     setShelves({
      //       ...shelves,
      //       wantToRead: [...shelves.wantToRead, book],
      //       [oldShelf]: shelves[oldShelf].filter((item) => item.id !== book.id),
      //     });
      //     break;

      //   case "read":
      //     setShelves({
      //       ...shelves,
      //       read: [...shelves.read, book],
      //       [oldShelf]: shelves[oldShelf].filter((item) => item.id !== book.id),
      //     });
      //     break;

      //   default:
      //     break;
      // }
    });
    setLoader(false);
  };

  return (
    <>
      <Header />
      {loader && <Loader />}
      <div className="background">
        <Route
          exact
          path="/"
          render={() => <Home shelves={shelves} onChange={onChange} />}
        />
        <Route path="/search" render={() => <Search onChange={onChange} />} />
      </div>
    </>
  );
}

export default App;
