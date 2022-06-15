import React, { useState } from "react";
import Card from "../Card/Card";

const List = ({ cars }) => {
  const [activeCard, setActiveCard] = useState("");
  // console.log(cars);
  console.log(activeCard);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      {cars.map(item => (
        <Card
          key={item.id}
          item={item}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
      ))}
    </div>
  );
};

export default List;
