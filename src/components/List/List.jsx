import React from "react";
import Card from "../Card/Card";

const List = ({ cars }) => {
  console.log(cars);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      {cars.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
