import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Home.css";
import Shelves from "../../Components/Shelves/Shelves";

//Here a seted it shelf to their correct status and created a Link to the search page

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

Home.propTypes = {
  shelves: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Home;
