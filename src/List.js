import React from "react";

import "./Button.css";
import Hotel from "./HotelList";

function List() {
    let unique = [...new Set(Hotel.map(data => data.City))];
    console.log(unique);
  return (
    <>
      <p>Select Hotels</p> 

      <div>
        {unique.map((data ) => {
          return <button>{data}</button>;
        })}
      </div>
    </>
  );
}
export default List;
