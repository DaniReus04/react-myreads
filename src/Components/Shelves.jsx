import "./Shelves.css";
import book from "../Tools/manga1.png";

function Shelves({ reading, goingToRead, read, none }) {
  console.log("Daniel4", reading);

  return (
    <section className="shelves">
      <hr className="hr" />
      <ul className="reading">
        {reading.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.imageLinks.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </li>
          );
        })}
      </ul>
      <hr className="hr1" />
      <ul className="going-to">
        <li>
          <img src={book} alt="book" />
          <p>Livro</p>
        </li>
      </ul>
      <hr className="hr2" />
      <ul className="read">
        <li>
          <img src={book} alt="book" />
          <p>Livro</p>
        </li>
      </ul>
    </section>
  );
}

export default Shelves;
