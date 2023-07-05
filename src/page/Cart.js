import React from "react";
import Nav from "../components/Nav";
import Bill from "../components/Bill";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div>
      <Nav></Nav>
      <div className="lg:px-[200px] px-[1rem]">
        <h1 className="mt-[4rem] text-[2.2rem] font-bold">
          Các Đơn Bạn Đã Đặt
        </h1>
        <div>
          {cart.map((item, index) => (
            <Bill
              date={item.date}
              diffDays={item.diffDays}
              name={item.name}
              total={item.total}
              key={index}
            ></Bill>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
