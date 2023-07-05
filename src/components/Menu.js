import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HailIcon from "@mui/icons-material/Hail";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Menu = () => {
  const { user } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div>
      <Link
        to={"/blog"}
        className="flex items-center  cursor-pointer   mx-[1rem] my-[2rem] text-[1.4rem] "
      >
        <h3 className="mr-[0.25rem]">Blog</h3>
        <BookOutlinedIcon
          sx={{ width: "1.8rem", height: "1.8rem" }}
          fontSize="medium"
        ></BookOutlinedIcon>
      </Link>
      <hr />
      <Link
        to={"/contact"}
        className="flex items-center  cursor-pointer  mx-[1rem]  my-[2rem] text-[1.4rem]"
      >
        <h3 className="mr-[0.25rem]">Liên Hệ</h3>
        <CallOutlinedIcon
          sx={{ width: "1.8rem", height: "1.8rem" }}
          fontSize="medium"
        ></CallOutlinedIcon>
      </Link>
      <hr />
      <Link
        to={"/introduce"}
        className="flex items-center  cursor-pointer   mx-[1rem] my-[2rem] text-[1.4rem]"
      >
        <h3 className="mr-[0.25rem]">Giới Thiệu</h3>
        <HailIcon
          sx={{ width: "1.8rem", height: "1.8rem" }}
          fontSize="medium"
        ></HailIcon>
      </Link>
      <hr />
      <Link
        to={"/FAQ"}
        className="flex items-center  cursor-pointer  mx-[1rem] my-[2rem] text-[1.4rem]"
      >
        <h3 className="mr-[0.25rem]">FAQ</h3>
        <ErrorOutlineIcon
          sx={{ width: "1.8rem", height: "1.8rem" }}
        ></ErrorOutlineIcon>
      </Link>
      <hr />
      {user ? (
        <Link to="/cart">
          <div className="flex items-center  cursor-pointer  mx-[1rem] my-[2rem] text-[1.4rem]">
            <h3 className="mr-[0.25rem]">Giỏ Hàng</h3>
            <div className="relative  ">
              <div className="px-[0.25rem] py-[0.25rem] ">
                <ShoppingBasketIcon
                  sx={{ width: "1.8rem", height: "1.8rem" }}
                ></ShoppingBasketIcon>
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
            <button className="my-[2rem] mx-[0.25rem] px-[1rem]  bg-white text-blue-600 border-2 border-solid border-white">
              Đăng nhập
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Menu;
