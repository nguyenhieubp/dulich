import React from "react";
import image from "../image/daodiepson/anh1.jpg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/user";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [valueEmail, setValueEmail] = React.useState("");
  const [valuePassword, setValuePassword] = React.useState("");
  const [isShowPass, setIsShowPass] = React.useState(false);
  const [validation, setValidation] = React.useState("");

  const handleChangeTypePassword = () => {
    setIsShowPass(!isShowPass);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!valueEmail.includes("@gmail.com") || valuePassword.length < 8) {
      return setValidation("Email Hoặc Mật Khẩu Không Đúng");
    }
    dispatch(login(true));
    navigate("/");
  };

  return (
    <div className="fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] lg:shadow-2xl rounded-3xl lg:pr-[2rem] ">
      <div className="flex items-start gap-[2rem]">
        <div className="lg:block hidden  w-[30rem] h-[30rem]">
          <img
            className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl "
            src={image}
            alt=""
          />
        </div>
        <div className="lg:block mx-[2rem]">
          <h2 className="font-bold text-[2rem]">Đăng Nhập</h2>
          <form
            onSubmit={handleLogin}
            className="mt-[2rem] lg:w-[25rem] w-[20rem]"
          >
            <h4 className="text-red-600">{validation}</h4>
            <div>
              <h2 className="text-[1.5rem]">Email</h2>
              <input
                onChange={(e) => setValueEmail(e.target.value)}
                className="border-2 border-black p-2 text-[1.4rem] rounded-lg w-full"
                type="text"
              />
            </div>
            <div>
              <div className="mt-[2rem] relative">
                <h2 className="text-[1.5rem]">Mật Khẩu</h2>
                <input
                  onChange={(e) => setValuePassword(e.target.value)}
                  className="border-2 border-black p-2 text-[1.4rem] rounded-lg w-full pr-[3rem]"
                  type={isShowPass ? "text" : "password"}
                />
                {isShowPass ? (
                  <VisibilityOffIcon
                    onClick={handleChangeTypePassword}
                    className="absolute bottom-[2.25rem] right-4  cursor-pointer"
                  ></VisibilityOffIcon>
                ) : (
                  <RemoveRedEyeIcon
                    onClick={handleChangeTypePassword}
                    className="absolute bottom-[2.25rem] right-4  cursor-pointer"
                  ></RemoveRedEyeIcon>
                )}
                <u className="cursor-pointer">Quên Mật Khẩu</u>
              </div>
              <button
                onClick={handleLogin}
                className="bg-black text-white w-full p-2 text-[1.4rem] mt-[2rem] rounded-2xl"
                type="submit"
              >
                Đăng Nhập
              </button>
            </div>
          </form>
          <div className="mt-[1rem]">
            <p>Chào Mừng Bạn Đến Với Trang Web</p>
            <b>Chúc Bạn Trải Nghiệm Vui Vẻ</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
