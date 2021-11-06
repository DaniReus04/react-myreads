import { Link } from "react-router-dom";
import "./Home.css";
import Shelves from "../../Components/Shelves/Shelves";

function Home({ shelves, onChange }) {
  return (
    <>
      <div className="home-page">
        <Link className="search-page-button" to="/search">
          &#x1F50D;
        </Link>
        <hr className="hr" />
        <Shelves shelves={shelves.currentlyReading} onChange={onChange} />
        <hr className="hr1" />
        <Shelves shelves={shelves.wantToRead} onChange={onChange} />
        <hr className="hr2" />
        <Shelves shelves={shelves.read} onChange={onChange} />
      </div>
    </>
  );
}

export default Home;
