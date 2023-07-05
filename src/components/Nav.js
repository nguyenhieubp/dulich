import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import imageFlagVietName from "../image/user/flagVietNam.png";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import HailIcon from "@mui/icons-material/Hail";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
const Nav = () => {
  const { user } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart.cart);

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Menu></Menu>
    </Box>
  );
  //bg-[#CEECEE]
  return (
    <>
      <div className="header flex justify-between items-center lg:px-[200px] py-[1rem]  ">
        <span className="font-bold text-2xl lg:ml-0 ml-[1rem]">
          {" "}
          <Link to="/">DuLichViet.Com</Link>
        </span>
        <div className="lg:hidden p-[0.2rem]">
          <Button onClick={toggleDrawer("right", true)}>
            <MenuIcon sx={{ color: "black" }}></MenuIcon>
          </Button>
          <SwipeableDrawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            {list("right")}
          </SwipeableDrawer>
        </div>
        <div className=" items-end lg:flex hidden">
          <div className="mr-[3rem] flex items-center">
            <span className="mr-[0.25rem]">VIE</span>
            <img
              className="w-[2rem] h-[2rem] rounded-full object-cover "
              src={imageFlagVietName}
              alt=""
            />
          </div>
          <Link
            to={"/blog"}
            className="flex items-end cursor-pointer mr-[3rem]"
          >
            <h3 className="mr-[0.25rem]">Blog</h3>
            <BookOutlinedIcon fontSize="medium"></BookOutlinedIcon>
          </Link>
          <Link
            to={"/contact"}
            className="flex items-end cursor-pointer mr-[3rem]"
          >
            <h3 className="mr-[0.25rem]">Liên Hệ</h3>
            <CallOutlinedIcon fontSize="medium"></CallOutlinedIcon>
          </Link>
          <Link
            to={"/introduce"}
            className="flex items-end cursor-pointer mr-[3rem]"
          >
            <h3 className="mr-[0.25rem]">Giới Thiệu</h3>
            <HailIcon fontSize="medium"></HailIcon>
          </Link>
          <Link to={"/FAQ"} className="flex items-end cursor-pointer mr-[3rem]">
            <h3 className="mr-[0.25rem]">FAQ</h3>
            <ErrorOutlineIcon></ErrorOutlineIcon>
          </Link>
          {user ? (
            <Link to="/cart">
              <div className="flex items-end cursor-pointer">
                <h3>Giỏ Hàng</h3>
                <div className="relative  ">
                  <div className="px-[0.25rem] py-[0.25rem] ">
                    <ShoppingBasketIcon></ShoppingBasketIcon>
                  </div>
                  {cart.length === 0 ? (
                    ""
                  ) : (
                    <div className="absolute bg-red-600 rounded-full w-[1.5rem] h-[1.5rem] top-0 right-[-0.75rem] text-center">
                      {cart.length}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="mx-[0.25rem] px-[1rem]  bg-white text-blue-600 border-2 border-solid border-white">
                  Đăng nhập
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
