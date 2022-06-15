import React, { useState } from "react";
import "./Card.css";

const Card = ({ item, activeCard, setActiveCard }) => {
  // console.log(item);
  const [like, setLike] = useState(false);
  return (
    <div
      style={{
        border: activeCard === item.id ? "4px solid blue" : "none",
        padding: "40px",
      }}
      onClick={() => setActiveCard(item.id)}>
      <h2 className="model">{item.model}</h2>
      <img className="car-image" src={item.image} alt="" />
      <div>
        {like ? (
          <img
            className="img-like2"
            onClick={() => setLike(!like)}
            alt="like"
            src="https://cdn-icons-png.flaticon.com/512/1216/1216686.png"
          />
        ) : (
          <img
            onClick={() => setLike(!like)}
            className="img-like"
            alt="like"
            src="https://cdn-icons-png.flaticon.com/512/2/2267.png"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
