import React from "react";
import { useNavigate } from "react-router-dom";
const Itemsearch = ({ image, name, desc, dataIndex, address }) => {
  const navigate = useNavigate();
  const handleChooseImage = () => {
    navigate("/hotel/" + name, {
      state: { index: dataIndex, image, name, desc, address },
    });
  };
  return (
    <div className="lg:px-0 px-[1rem]">
      <div
        onClick={handleChooseImage}
        className="lg:w-[735px] w-[22rem] lg:h-[250px] p-[15px] border-2 border-gray-500 cursor-pointer "
      >
        <div className="lg:flex block">
          <div className="lg:w-[200px] lg:h-[200px] w-full h-[10rem]">
            <img
              indeximage={dataIndex}
              className="object-cover pixelated w-full h-full overflow-hidden"
              src={image}
              alt=""
            />
          </div>
          <div className="lg:ml-[3rem] ml-0 lg:w-[535px] ">
            <h1 className="font-bold text-3xl text-blue-500 py-[1rem]">
              {name}
            </h1>
            <p className="h-[100px] pb-[0.4rem] overflow-hidden">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itemsearch;
