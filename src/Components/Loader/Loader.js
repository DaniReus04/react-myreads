//This is the loader I used for onChangeSearch and onChange
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="loader-spinner" />
        <p className="loader-text">Loading books...</p>
      </div>
    </div>
  );
};

export default Loader;
