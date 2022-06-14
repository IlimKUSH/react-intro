import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  console.log(item);
  return (
    <div>
      <h2 className="model">{item.model}</h2>
      <img className="car-image" src={item.image} alt="" />
    </div>
  );
};

export default Card;
