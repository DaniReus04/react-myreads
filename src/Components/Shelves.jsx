import "./Shelves.css";

function Shelves({ reading, goingToRead, read }) {
  console.log("testeteste", reading);

  return (
    <section className="shelves">
      <hr className="hr" />
      <ul className="reading">
        {reading.map((item) => {
          return (
            <li key={item.id}>
              <figure className="image">
                <img src={item.imageLinks.smallThumbnail} alt={item.title} />
              </figure>
              <div>
                <p className="title">{item.title}</p>
                <p className="author">{item.authors}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <hr className="hr1" />
      <ul className="going-to">
        {goingToRead.map((item) => {
          return (
            <li key={item.id}>
              <figure className="image">
                <img src={item.imageLinks.smallThumbnail} alt={item.title} />
              </figure>
              <div>
                <p className="title">{item.title}</p>
                <p className="author">{item.authors}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <hr className="hr2" />
      <ul className="read">
        {read.map((item) => {
          return (
            <li key={item.id}>
              <figure className="image">
                <img src={item.imageLinks.smallThumbnail} alt={item.title} />
              </figure>
              <div>
                <p className="title">{item.title}</p>
                <p className="author">{item.authors}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Shelves;
