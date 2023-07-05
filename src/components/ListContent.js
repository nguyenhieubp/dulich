import React from "react";
import Footer from "./Footer.js";
import Feature from "./Featured";

const Listcontent = () => {
  return (
    <>
      <div className="lg:px-[200px] mt-[8rem]">
        <Feature></Feature>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Listcontent;
