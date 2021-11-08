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
    setLoader(true); //I seted the loader here to every time then onChange is called, appers the loading component

    await BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;

      if (oldShelf !== undefined && newShelf !== "none") {
        //In this part, I called only the books that already have a shelf and are going to a new one
        setShelves({
          ...shelves,
          [newShelf]: [...shelves[newShelf], book], //newShelf request
          [oldShelf]: shelves[oldShelf].filter((item) => item.id !== book.id), //oldShelf remove
        });
      } else if (oldShelf !== undefined) {
        //In this part, I called only the books that are moving out of it shelf and aren't going to a new one, resuming, books that the user remove
        setShelves({
          ...shelves,
          [oldShelf]: shelves[oldShelf].filter((item) => item.id !== book.id),
        });
      } else {
        //Here the user call the books on search page, and put in their own shelves
        setShelves({
          ...shelves,
          [newShelf]: [...shelves[newShelf], book],
        });
      }
    });
    setLoader(false); //Here I confirmed the Loader in onChange
  };

  return (
    <>
      <Header />
      {
        loader && (
          <Loader />
        ) /*using the loader component when onChange is called*/
      }
      <div className="background">
        <Route
          exact
          path="/"
          render={() => (
            <Home
              shelves={shelves}
              onChange={
                onChange
              } /*creating a route for the home page and passing the components */
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search
              onChange={
                onChange
              } /*creating a route for the search page and passing the components */
            />
          )}
        />
      </div>
    </>
  );
}

export default App;
