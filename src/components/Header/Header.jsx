import React from "react";

const Header = ({ logo }) => {
  // console.log(logo);
  return (
    <div>
      <img src={logo} alt="" width={"200px"} />
    </div>
  );
};

export default Header;
