import React from "react";
import Itemsearch from "./ItemSearch";
import { Data } from "../context";
import { useContext } from "react";
import { useSelector } from "react-redux";
function ListItemSearch() {
  const textFind = useSelector((state) => state.textFind.textFind);

  const { DatalistItemSearch } = useContext(Data);

  return (
    <div className="mt-[25rem] lg:mt-0 lg:pl-[400px] lg:pr-[200px] pb-[5rem]">
      {DatalistItemSearch.filter((item) => {
        if (textFind === "") {
          return item;
        } else {
          return item.name.toLowerCase().includes(textFind.toLowerCase());
        }
      }).map((item) => (
        <div key={item.id} className="mt-[4rem]">
          <Itemsearch
            address={item.address}
            image={item.image}
            name={item.name}
            desc={item.desc}
            dataIndex={item.id}
          ></Itemsearch>
        </div>
      ))}
    </div>
  );
}

export default ListItemSearch;
