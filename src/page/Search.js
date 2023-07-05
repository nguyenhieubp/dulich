import React, { useEffect } from "react";
import Nav from "../components/Nav";
import Cardsearch from "../components/CardSearch";
import ListItemSearch from "../components/ListItemSearch";
import { useSelector } from "react-redux";
const Search = () => {
  window.scroll(0, 0);
  return (
    <div>
      <Nav> </Nav>
      <div className="lg:mx-[200px] mx-0">
        <Cardsearch></Cardsearch>
        <ListItemSearch></ListItemSearch>
      </div>
    </div>
  );
};

export default Search;
