import React from "react";
import Nav from "../components/Nav";
import ShowLocation from "../components/ShowLocation";
const Itemhouse = () => {
  window.scroll(0, 0);
  return (
    <div>
      <div className="relative z-[100]">
        <Nav></Nav>
      </div>
      <ShowLocation></ShowLocation>
    </div>
  );
};

export default Itemhouse;
