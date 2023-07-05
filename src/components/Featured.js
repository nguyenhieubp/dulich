import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Data } from "../context.js";
import {
  DatalistItemHomePage2,
  DatalistItemHomePage1,
  DatalistItemSearch,
} from "../DataImage.js";
import { useNavigate } from "react-router-dom";
import imageFlag from "../image/user/flagVietNam.png";

const Featured = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    backgroun: "black",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleChooseImage = ({ id, image, name, desc, address }) => {
    navigate("/hotel/" + name, {
      state: {
        index: id,
        image,
        name,
        desc,
        address,
      },
    });
  };

  return (
    <div className="lg:mt-0 mt-[18rem]">
      <div>
        <div className="lg:mx-0 mx-[1rem]">
          <h1 className="text-[2rem] font-bold ">Khám Phá Việt Nam</h1>
          <p className="pb-[1rem]">Các điểm đến phổ biến</p>
        </div>
        <div className="lg:ml-0 ml-[2rem]">
          <Slider {...settings}>
            {DatalistItemSearch.map((item, index) => (
              <div className="mr-[3rem]  " key={index}>
                <img
                  onClick={() => handleChooseImage(item)}
                  className="lg:w-[250px] w-[310px] h-[200px] object-cover"
                  src={item.ImageSearch[0]}
                  alt=""
                />
                <h1 className="font-bold text-2xl">{item.address}</h1>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="mt-[2rem]">
        <h1 className="text-[2rem] py-[2rem] font-bold lg:mx-0 mx-[1rem]">
          Tìm theo loại chỗ nghỉ
        </h1>
        <div className="lg:ml-0 ml-[2rem]">
          <Slider {...settings}>
            {DatalistItemSearch.map((item, index) => (
              <div key={index}>
                <img
                  onClick={() => handleChooseImage(item)}
                  className="lg:w-[250px] w-[310px] h-[200px] object-cover"
                  src={item.ImageSearch[0]}
                  alt=""
                />
                <h1 className="font-bold text-2xl">{item.address}</h1>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="mt-[6rem] ">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 px-[1rem] ">
          {DatalistItemHomePage1.map((item) => (
            <div
              onClick={() => handleChooseImage(item)}
              className="h-[227px] relative"
            >
              <img
                className="h-[100%] w-[100%] object-cover rounded-2xl"
                src={item.image}
                alt=""
              />
              <div className="flex  absolute top-[12px] left-[0.5rem]">
                <img
                  className="w-[6rem] h-[3rem] object-cover"
                  src={imageFlag}
                  alt=""
                />
                <h1 className="font-bold text-3xl ml-[0.25rem] text-white">
                  {item.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:grid grid-cols-3 gap-12 mt-[3rem] hidden">
          {DatalistItemHomePage2.map((item) => (
            <div
              onClick={() => handleChooseImage(item)}
              className="h-[227px] relative"
            >
              <img
                className="h-[100%] w-[100%] object-cover rounded-2xl"
                src={item.image}
                alt=""
              />
              <div className="flex  absolute top-[12px] left-[0.5rem]">
                <img
                  className="w-[6rem] h-[3rem] object-cover"
                  src={imageFlag}
                  alt=""
                />
                <h1 className="font-bold text-3xl ml-[0.25rem] text-white">
                  {item.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[1.8rem]"></div>
      </div>
      <div className="mt-[2rem]">
        <h1 className="text-[2rem] py-[2rem] font-bold lg:mx-0 mx-[1rem] ">
          Tìm theo loại chỗ nghỉ
        </h1>
        <div className="lg:ml-0 ml-[2rem]">
          <Slider {...settings}>
            {DatalistItemSearch.map((item, index) => (
              <div key={index}>
                <img
                  onClick={() => handleChooseImage(item)}
                  className="lg:w-[250px] w-[310px] h-[200px] object-cover"
                  src={item.ImageSearch[0]}
                  alt=""
                />
                <h1 className="font-bold text-2xl">{item.address}</h1>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Featured;
