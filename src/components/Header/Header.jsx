import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = ({ logo, cars }) => {
  // console.log(cars);
  const styles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <img src={logo} alt="" width={"200px"} />
      <Navbar cars={cars} />
    </div>
  );
};

export default Header;
