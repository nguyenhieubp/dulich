import React from "react";
import User from "./User";
import { format } from "date-fns";

const Bill = ({ date, diffDays, name, total }) => {
  return (
    <div className="border-2 border-black p-2 mb-[3rem] mt-[1rem]">
      <User></User>
      <h2>
        Từ Ngày:{" "}
        {`${format(date[0].startDate, "dd/MM//yyyy")}     Đến     ${format(
          date[0].endDate,
          "dd/MM/yyyy"
        )}`}
      </h2>
      <h2>Địa Điểm: {name}</h2>
      <h2>Số Ngày: {diffDays}</h2>
      <h2>Tổng Tiền: {total * diffDays}vnđ</h2>
    </div>
  );
};

export default Bill;
