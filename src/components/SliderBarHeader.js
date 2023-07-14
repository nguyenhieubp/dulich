import React, { useState } from "react";
import BedIcon from "@mui/icons-material/Bed";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonIcon from "@mui/icons-material/Person";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Listcontent from "./ListContent.js";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../redux/textFind.js";
import {
  changeAdult,
  changeChildren,
  changeDate,
} from "../redux/numberGuests.js";

const Sliderbarheader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [valueFormInput, setValueFormInput] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const handleOpenDate = () => {
    setOpenDate(!openDate);
  };
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    children: 0,
  });

  const handleCount = (operator, type) => {
    if (type === "adult") {
      if (operator === "i") {
        dispatch(changeAdult(Number(options[type]) + 1));
      } else if (type === "m") {
        dispatch(changeAdult(Number(options[type]) - 1));
      }
    } else if (type === "children") {
      if (operator === "i") {
        dispatch(changeChildren(Number(options[type]) + 1));
      } else if (type === "m") {
        dispatch(changeChildren(Number(options[type]) - 1));
      }
    }
    setOptions((prev) => {
      return {
        ...prev,
        [type]: operator === "i" ? options[type] + 1 : options[type] - 1,
      };
    });
  };
  const handleSearch = () => {
    dispatch(search(valueFormInput));
    navigate("/location", { state: { valueFormInput, options, date } });
  };
  return (
    <>
      <div>
        <div className="relative pb-[8rem] backgroundImage">
          <div className="lg:px-[200px]  absolute lg:left-[0rem] left-2 bottom-[-15rem] lg:bottom-[-2rem] ">
            <div className="bg-white lg:flex items-center block">
              <div className="border-4 px-[1.4rem] h-[64px] py-[1rem] text-gray-500 lg:w-[300px] w-[375px] border-solid lg:border-black border-l-black border-t-black border-r-black ">
                <BedIcon></BedIcon>
                <input
                  onChange={(e) => {
                    setValueFormInput(e.target.value);
                  }}
                  className="border-none outline-none pl-[1rem] "
                  placeholder="Bạn muốn đến đâu"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className=" select-none border-4 px-[1.4rem] h-[64px] py-[1rem] border-solid lg:border-black border-l-black border-t-black border-r-black ">
                <div className="relative border-none outline-none text-gray-400 w-[260px] flex items-center">
                  <DateRangeIcon onClick={handleOpenDate}></DateRangeIcon>
                  <div className="pl-[1rem] flex items-center">
                    {`${format(
                      date[0].startDate,
                      "dd/MM//yyyy"
                    )}     Đến     ${format(date[0].endDate, "dd/MM/yyyy")}`}
                  </div>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => {
                        dispatch(changeDate([item.selection]));
                        setDate([item.selection]);
                      }}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className={
                        "absolute  select-none top-[2.85rem] left-[-2.5rem] z-10"
                      }
                    />
                  )}
                </div>
              </div>
              <div className="lg:w-[300px] w-[375px] cursor-pointer select-none relative border-4 px-[1.4rem] text-gray-400 h-[64px] py-[1rem] border-solid  lg:border-black border-l-black border-t-black border-r-black ">
                <div onClick={() => setOpenOptions(!openOptions)}>
                  <div className=" border-none outline-none   flex items-center ">
                    <PersonIcon></PersonIcon>
                    <div className="pl-[1rem] flex text-[1rem] items-center">
                      {`${options.adult} Người lớn | ${options.children} trẻ nhỏ `}
                      <GroupAddIcon className="ml-[0.5rem]"></GroupAddIcon>
                    </div>
                  </div>
                </div>
                {openOptions && (
                  <div className="absolute top-[3.75rem] z-10 select-none left-[0rem] lg:w-[300px] w-[350px] h-[auto] bg-white ">
                    <div className="flex px-[3rem] py-[2rem] items-center ">
                      <h1>Người Lớn : </h1>
                      <div className="ml-[1rem]">
                        <button
                          className="border-solid border-2 border-blue-500 p-[0.25rem] h-[2rem] w-[2rem] leading-4"
                          onClick={() => handleCount("i", "adult")}
                        >
                          +
                        </button>
                        <span className="mx-[1rem]">{options.adult}</span>
                        <button
                          disabled={options.adult <= 1}
                          className="border-solid border-2 border-blue-500 p-[0.25rem] h-[2rem] w-[2rem] leading-4"
                          onClick={() => handleCount("m", "adult")}
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <div className="flex px-[3rem] py-[2rem]">
                      <h1>Trẻ Em : </h1>
                      <div className="ml-[2.65rem]">
                        <button
                          className="border-solid border-2 border-blue-500 p-[0.25rem] h-[2rem] w-[2rem] leading-4"
                          onClick={() => handleCount("i", "children")}
                        >
                          +
                        </button>
                        <span className="mx-[1rem]">{options.children}</span>
                        <button
                          disabled={options.children <= 1}
                          className="border-solid border-2 border-blue-500  p-[0.25rem] h-[2rem] w-[2rem] leading-4"
                          onClick={() => handleCount("m", "children")}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                onClick={handleSearch}
                className="bg-[#16a34a] cursor-pointer  leading-6 text-white text-center text-[1.4rem] font-bold  border-4 px-[1.4rem] h-[64px] py-[1rem] border-solid border-black"
              >
                Tìm
              </div>
            </div>
          </div>
        </div>
        <Listcontent></Listcontent>
      </div>
    </>
  );
};
export default Sliderbarheader;
