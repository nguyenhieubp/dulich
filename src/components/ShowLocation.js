import React from "react";
import { useState } from "react";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useContext } from "react";
import { Data } from "../context";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonIcon from "@mui/icons-material/Person";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { DateRange } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";
import SendIcon from "@mui/icons-material/Send";
import Pagination from "./Pagination";
import User from "./User";
import { Alert, Snackbar, TextField, Button } from "@mui/material";
import map from "../image/map.png";
import { addBill } from "../redux/cart";
//**** */
//**** */
//**** */
//**** */
const ShowLocation = () => {
  const dispatch = useDispatch();
  const [openDate, setOpenDate] = useState(false);
  const handleOpenDate = () => {
    setOpenDate(!openDate);
  };
  const handleCount = (operator, type) => {
    setOptions((prev) => {
      return {
        ...prev,
        [type]: operator === "i" ? options[type] + 1 : options[type] - 1,
      };
    });
  };

  //
  //
  //
  const data = useSelector((state) => state.numberGuests);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: data.adult,
    children: data.children,
  });
  const [date, setDate] = useState([
    {
      startDate: data.date[0]?.startDate || new Date(),
      endDate: data.date[0]?.endDate || new Date(),
      key: "selection",
    },
  ]);

  const startTime = date[0]?.startDate.getTime();
  const endTime = date[0]?.endDate.getTime();

  // Tính số ngày chênh lệch
  const diffTime = Math.abs(endTime - startTime);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  //*?
  //*?
  const { DatalistItemSearch } = useContext(Data);
  const location = useLocation();
  const indexImageShow = location.state.index;
  console.log(indexImageShow);
  const { name, desc, address } = location.state;
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState(0);
  const handleShowImage = (index) => {
    setShowImage(true);
    setImage(index);
  };
  const handleOffShowItemImage = () => {
    setShowImage(false);
  };
  const handleChangeImage = (oper) => {
    let newIndex = image;
    if (oper === "i") {
      newIndex = image + 1;
      if (
        newIndex >
        DatalistItemSearch[indexImageShow].ImageSearch.length - 1
      ) {
        newIndex = 0;
      }
    } else {
      newIndex = image - 1;
      if (newIndex < 0) {
        newIndex = DatalistItemSearch[indexImageShow].ImageSearch.length - 1;
      }
    }
    setImage(newIndex);
  };

  const [valueComment, setValueComment] = useState({ comment: "" });
  const [listComment, setListComment] = useState([]);

  const handleComment = (e) => {
    e.preventDefault();
    setListComment((pre) => {
      return [valueComment, ...pre];
    });
    setValueComment({ comment: "" });
  };

  //** */
  //** */
  //** */
  //** */
  const [open, setOpen] = React.useState(false);

  const handleBuy = () => {
    dispatch(
      addBill({
        date,
        name,
        total: (options.adult * 50 + options.children * 10) * 1000,
        diffDays: diffDays + 1,
      })
    );

    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      {showImage && (
        <div className="pt-[5rem] pb-[3rem] lg:px-[200px] px-[1rem]  fixed top-[0] left-0 w-[100%] h-[100%] selection:bg-none">
          <div
            className="fixed top-[0] left-0 w-[100%] opacity-50 -z-40 h-[100%]
           bg-[#fffbfb7b]"
          ></div>
          <div
            onClick={handleOffShowItemImage}
            className="fixed top-[75px] left-[1rem] p-[1rem] bg-slate-200 rounded-full z-50 "
          >
            <CloseIcon className=" font-bold cursor-pointer  z-50 text-black"></CloseIcon>
          </div>

          <div className="flex items-center  justify-between lg:mt-[2rem] mt-[5rem]">
            <div
              onClick={() => handleChangeImage("r")}
              className="p-[1rem] rounded-full cursor-pointer bg-slate-200"
            >
              <ArrowBackIosIcon className="font-bold text-2xl  "></ArrowBackIosIcon>
            </div>
            <div className="w-[870px] lg:h-[38rem] h-[25rem]">
              <img
                className="w-[100%] h-[100%] object-cover pixelated"
                src={DatalistItemSearch[indexImageShow].ImageSearch[image]}
                alt=""
              />
            </div>
            <div
              onClick={() => handleChangeImage("i")}
              className="p-[1rem] rounded-full cursor-pointer bg-slate-200"
            >
              <ArrowForwardIosIcon className="font-bold text-2xl   "></ArrowForwardIosIcon>
            </div>
          </div>
        </div>
      )}
      {!showImage && (
        <div className="lg:px-[200px] px-[1rem] mt-[2rem] pb-[5rem]">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[2rem] font-bold">{name}</div>
              <div className="flex  mt-[1rem] items-center">
                <AddLocationAltIcon></AddLocationAltIcon>
                <h3 className="ml-[0.5rem]">{address}</h3>
              </div>
              <div className="text-blue-600 font-bold text-xl leading-6 py-[0.75rem]">
                Hình Ảnh Cụ Thể
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-[0.5rem] mt-[0.5rem]">
              {DatalistItemSearch[indexImageShow].ImageSearch.map(
                (item, index) => (
                  <div
                    className="col-span-1 w-[100%] lg:h-[20rem] h-[15rem]"
                    key={index}
                  >
                    <img
                      onClick={() => handleShowImage(index)}
                      className="object-cover w-[100%] h-[100%]"
                      src={item}
                      alt=""
                    />
                  </div>
                )
              )}
            </div>
          </div>
          <p className="mt-[2rem]">{desc}</p>
          <div className="lg:flex  mt-[2rem] justify-between items-start">
            <div className=" border-2 lg:w-[30rem] w-[22rem] bg-[#e4f4ff]">
              <h2 className=" mt-[1rem] text-[1.4rem]  text-red-600 px-[1.5rem]">
                {(options.adult * 50 + options.children * 10) * (diffDays + 1)}{" "}
                Nghìn Đồng
              </h2>
              <div className="flex justify-between items-end select-none  px-[1.4rem] h-[64px] py-[1rem] ">
                <div className="relative border-none outline-none  w-[260px] flex items-center">
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
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className={
                        "absolute  select-none top-[2.85rem] lg:left-[-2.5rem] left-[-1rem] z-10"
                      }
                    />
                  )}
                </div>
              </div>
              <div className="cursor-pointer select-none relative  px-[1.4rem]  h-[64px] py-[1rem] ">
                <div onClick={() => setOpenOptions(!openOptions)}>
                  <div className=" border-none outline-none  w-[320px] flex items-center ">
                    <PersonIcon></PersonIcon>
                    <div className="pl-[1rem] flex text-[1rem] items-center">
                      {`${options.adult} Người lớn | ${options.children} trẻ nhỏ `}
                      <GroupAddIcon className="ml-[0.5rem]"></GroupAddIcon>
                    </div>
                  </div>
                </div>
                {openOptions && (
                  <div className="absolute top-[3.75rem] z-10 select-none left-[0rem] w-[350px] h-[auto] bg-white ">
                    <div className="flex px-[3rem] py-[2rem] items-center">
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
                          disabled={options.children <= 0}
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
              <div className=" px-[1.5rem] justify-between  mb-[2rem]">
                <div className=" mt-[1rem]">
                  <Button
                    sx={{ background: "#44444" }}
                    variant="outlined"
                    onClick={handleBuy}
                  >
                    Đặt Ngay
                  </Button>
                  <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={open}
                    autoHideDuration={4000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      sx={{
                        width: "100%",
                        backgroundColor: "#2dc258",
                        color: "",
                      }}
                    >
                      Đặt Vé Thành Công
                    </Alert>
                  </Snackbar>
                </div>
              </div>
            </div>
            <div className="lg:mt-0 mt-[2rem]">
              <div className="lg:w-[30rem] w-[22rem] h-[17rem] bg-red-600">
                <img className="w-full h-full object-cover" src={map} alt="" />
              </div>
              <h2 className="text-[1.5rem] mt-[1rem]">
                Bản Đồ <b>{name}</b>{" "}
              </h2>
            </div>
          </div>
          <div>
            <h2 className="mt-[2rem] text-[1.4rem]">
              Đọc xem khách yêu thích điều gì nhất:
            </h2>
            <div className="w-[100%] mt-[1rem] relative">
              <form onSubmit={handleComment}>
                <TextField
                  autoComplete="off"
                  value={valueComment.comment}
                  onChange={(e) => setValueComment(e.target.value)}
                  className="border-2 w-full p-2 mt-0"
                  id="outlined-basic"
                  label="Bình Luận"
                  variant="outlined"
                />
                <SendIcon
                  onClick={handleComment}
                  className="absolute right-4 top-4 cursor-pointer "
                  color="primary"
                ></SendIcon>
              </form>
            </div>
            <div className="mt-[1rem]">
              {listComment.map((item, index) => (
                <div>
                  <Comment key={index} comment={item}></Comment>
                </div>
              ))}
              <Comment comment={"Tôi Yêu Việt Nam"}></Comment>
              <Comment comment={"Đẹp Quá"}></Comment>
            </div>
            <Pagination></Pagination>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowLocation;
