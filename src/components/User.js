import React from "react";
import avatar from "../image/user/avatar.png";
import flagVietNam from "../image/user/flagVietNam.png";

const User = () => {
  return (
    <div className="flex ">
      <div className="w-[3rem] h-[3rem]">
        <img
          className="w-full h-full rounded-full object-cover"
          src={avatar}
          alt=""
        />
      </div>
      <div className="ml-[1rem]">
        <h2>Nguyễn Văn A</h2>
        <div className="mt-[0.2rem]">
          <img
            className="w-[1rem] h-[1rem] rounded-full object-cover "
            src={flagVietNam}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default User;
