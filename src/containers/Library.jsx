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
    console.log("Daniel")
    BooksAPI.getAll().then((res) => {
      console.log("Daniel2", res)
      setReading(res.filter(item => item.shelf === "currentlyReading" ))
      setGoingToRead(res.filter(item => item.shelf === "wantToRead"))
      setRead(res.filter(item => item.shelf === "read"))
      setNone(res.filter(item => item.shelf === ""))
    })
  },[])

  console.log("Daniel3", reading)
  console.log("teste", none)

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