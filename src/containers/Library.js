import "./Library.css";
import Header from "../header/Header";

function App() {
  this.set.State = {
    library: [],
  }
  return (
    <>
    <Header />
    <div className="library">
      <h1>
        <strong>Hello Word!</strong>
      </h1>
    </div></>
  );
}

export default App;
