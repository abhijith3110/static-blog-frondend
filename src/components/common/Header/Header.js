import React from "react";
import "./Header.css";
const Header = (props) => {
  return (
    <>
      <div className="heading-block">
        <h1 className="Header">{props.name}</h1>
      </div>
    </>
  );
};

export default Header;
