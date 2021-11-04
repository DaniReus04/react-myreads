import React from "react";
import Shelf from "../../Pages/Home/Home";

function Shelves(shelves, onChange) {
  return (
    <ul>
      {shelves &&
        shelves.length > 0 &&
        shelves.map((item) => {
          return <Shelf key={item.id} item={item} onChange={onChange} />;
        })}
    </ul>
  );
}

export default Shelves;
