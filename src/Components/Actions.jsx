import "./Actions.css";

function Actions(onChange) {
  return (
    <div>
    <select className="books-actions" onChange={onChange} >
      <option>Reading</option>
      <option>Going to Read</option>
      <option>Read</option>
      <option>None</option>
    </select>
  </div>
  );
}

export default Actions;
