import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { DateRange } from "react-date-range";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useState } from "react";
import { format } from "date-fns";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { Data } from "../context";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../redux/textFind";
import { changeAdult, changeChildren, changeDate } from "../redux/numberGuests";
const Cardsearch = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [address, setAddress] = useState(location.state.valueFormInput);
  const [dates, setDates] = useState(location.state.date);
  const [room, setRoom] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const handleFind = () => {
    dispatch(search(address));
  };

  const handleSetRoom = (operator, type) => {
    if (type === "adult") {
      if (operator === "i") {
        dispatch(changeAdult(Number(room[type]) + 1));
      } else if (type === "m") {
        dispatch(changeAdult(Number(room[type]) - 1));
      }
    } else if (type === "children") {
      if (operator === "i") {
        dispatch(changeChildren(Number(room[type]) + 1));
      } else if (type === "m") {
        dispatch(changeChildren(Number(room[type]) - 1));
      }
    }
    setRoom((prev) => {
      return {
        ...prev,
        [type]: operator === "i" ? room[type] + 1 : room[type] - 1,
      };
    });
  };
  return (
    <div className="lg:fixed lg:top-[2.75rem] left-[200px] ">
      <div className="ml-[1rem] mt-[3rem] w-[360px] h-[auto] px-[1rem] py-[1.4rem] bg-[#CEECEE] absolute top-[40px] left-[0px]">
        <h1 className="text-2xl">Tìm</h1>
        <div>
          <p>Tên chỗ nghỉ / điểm đến:</p>
          <div className="relative">
            <input
              autoComplete="off"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              value={address}
              className="border-2 focus:border-blue-600 outline-none h-[35px] pl-[2.5rem] w-[100%]"
              type="text"
              name=""
              id="formInput"
            />
            <SearchIcon className="absolute top-1 left-1"></SearchIcon>
          </div>
        </div>
        <p>Nhận phòng ngay</p>
        <div className="w-[100%] h-[35px] bg-white"></div>
        <div>
          <div className="relative flex items-center cursor-pointer">
            <div
              className="cursor-pointer"
              onClick={() => setOpenDate(!openDate)}
            >
              <CalendarTodayIcon className="absolute  left-1 bottom-[0.25rem]"></CalendarTodayIcon>
            </div>
            <div
              onSelect={() =>
                setDates(
                  `${format(dates[0].startDate, "dd/MM/yyyy")}  Đến  ${format(
                    dates[0].endDate,
                    "dd/MM/yyyy"
                  )}`
                )
              }
              className="pl-[3rem] mt-[-2rem] "
            >
              {`${format(dates[0].startDate, "dd/MM/yyyy")}  Đến  ${format(
                dates[0].endDate,
                "dd/MM/yyyy"
              )}`}
            </div>
          </div>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => {
                dispatch(changeDate([item.selection]));
                setDates([item.selection]);
              }}
              moveRangeOnFirstSelection={false}
              ranges={dates}
            />
          )}
        </div>
        <div className="mt-[2rem] cursor-pointer">
          <div
            onClick={() => setOpenOptions(!openOptions)}
            className="flex w-[100%] h-[35px] bg-white pt-[0.35rem] pl-[0.75rem]"
          >
            <GroupAddIcon></GroupAddIcon>
            <div className="ml-[1rem]">
              Nguười lớn : {room.adult} | Trẻ em: {room.children}
            </div>
          </div>
          <div>
            {openOptions && (
              <div className="mt-[1rem] z-10 select-none left-[0rem] w-[325px] h-[auto] bg-white ">
                <div className="flex justify-between px-[3rem] py-[2rem] items-center">
                  <h1>Người Lớn : </h1>
                  <div className="ml-[2.5rem]">
                    <button
                      className="border-solid border-2 border-blue-500 p-[0.25rem] h-[2rem] w-[2rem] leading-4"
                      onClick={() => handleSetRoom("i", "adult")}
                    >
                      +
                    </button>
                    <span className="mx-[1rem]">{room.adult}</span>
                    <button
                      disabled={room.adult <= 1}
                      className="border-solid border-2 border-blue-500 p-[0.25rem] h-[2rem] w-[2rem] leading-4"
                      onClick={() => handleSetRoom("m", "adult")}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="flex justify-between px-[3rem] py-[1rem]">
                  <h1>Trẻ Em : </h1>
                  <div className="ml-[2rem]">
                    <button
                      className="border-solid border-2 border-blue-500 p-[0.25rem] h-[2rem] w-[2rem] leading-4"
                      onClick={() => handleSetRoom("i", "children")}
                    >
                      +
                    </button>
                    <span className="mx-[1rem]">{room.children}</span>
                    <button
                      disabled={room.children <= 0}
                      className="border-solid border-2 border-blue-500  p-[0.25rem] h-[2rem] w-[2rem] leading-4"
                      onClick={() => handleSetRoom("m", "children")}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={handleFind}
          className="w-[100%] h-[2.4rem] text-2xl text-center font-bold mt-[2rem] py-[0.25rem] bg-blue-800 text-white"
        >
          Tìm
        </button>
      </div>
    </div>
  );
};

export default Cardsearch;
