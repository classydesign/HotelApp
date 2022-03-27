import React from "react";
import "./Card.css";
import Hotel from "./HotelList";

function Card() {
  return (
    <>
      {Hotel.map((data, key) => {
        return (
          <>
            <div className="wrapper" key={key}>
              <h1>{data.City}</h1>
              <div className="image i3"></div>
              <div className="details">
                <h1>
                  <em>{data.Location}</em>
                </h1>
                <h2>{data.HotelName}</h2>
                <p>{data.Duration}</p>
                <h1>{data.Price}</h1>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Card;
