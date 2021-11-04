import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "../Components/Header/Header";
import Search from "../Pages/Search/Search";
import * as BooksAPI from "../API/BooksAPI";
import Home from "../Pages/Home/Home.jsx";

function App() {
  const [shelves, setShelves] = useState({
    currentlyReading: [],
    wantToRead: [],
    read: [],
  });
  const [loader, setLoader] = useState(true);

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
  }, []);

  const onChange = async (e, book, oldShelf) => {
    e.preventDefault();
    const newShelf = e.target.value;
    setLoader(true);

    await BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;

      setShelves({
        ...shelves,
        [newShelf]: [...shelves[newShelf], book],
        [oldShelf]: shelves[oldShelf].filter((item) => item.id !== book.id),
      });

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
      <div className="library">
        {loader && (
          <div
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              zIndex: 1,
              height: "100%",
              width: "100%",
              backgroundColor: "white",
              opacity: 0.86,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              fontSize: 25,
              color: "black",
            }}
          >
            ...loading
          </div>
        )}
        <Route
          exact
          path="/"
          render={() => (
            <Home
              currentlyReading={shelves.currentlyReading}
              wantToRead={shelves.wantToRead}
              read={shelves.read}
              onChange={onChange}
            />
          )}
        />
        <Route path="/search" render={() => <Search />} />
      </div>
    </>
  );
}

export default App;
