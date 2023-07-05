import React from "react";
import Nav from "../components/Nav.js";
import Sliderbarheader from "../components/SliderBarHeader.js";
const Header = () => {
  return (
    <>
      <div className="truncate">
        <Nav></Nav>
        <Sliderbarheader></Sliderbarheader>
      </div>
    </>
  );
};

export default Header;
