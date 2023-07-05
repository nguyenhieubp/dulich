import React from "react";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <div className="lg:p-[4rem] p-2">
      <div className="flex items-center ">
        <Link to="/">
          <h1 className="text-[2.5rem] font-bold">Home</h1>
        </Link>
        <ArrowForwardIosOutlinedIcon
          fontSize="large"
          className="mx-[1rem]"
        ></ArrowForwardIosOutlinedIcon>
        <h1 className="text-[2.5rem] font-bold text-[#3152a3]">Blog</h1>
      </div>
      <p className="mt-[2rem]">
        <b className="text-[2rem]">Xin chào mọi người!</b> <br /> Trang web là
        một công cụ quan trọng để quảng bá và kinh doanh trong ngành du lịch.
        Tuy nhiên, để tạo một trang web đi di lịch thành công, bạn cần có những
        yếu tố quan trọng. Trong bài viết này, chúng ta sẽ khám phá những điều
        cần thiết để xây dựng một trang web đi di lịch hiệu quả.
        <br />
        <br />
        1. Thiết kế hấp dẫn và dễ sử dụng: Giao diện trang web đi di lịch cần
        phải hấp dẫn và thu hút người dùng ngay từ cái nhìn đầu tiên. Màu sắc,
        hình ảnh và văn bản phải tạo cảm giác mơ mộng và hứng thú cho khách
        hàng. Đồng thời, trang web cũng cần dễ sử dụng và dễ điều hướng để người
        dùng có thể tìm kiếm thông tin và đặt chỗ một cách thuận tiện. <br />{" "}
        <br /> 2.Nội dung thông tin phong phú: Trang web đi di lịch cần cung cấp
        thông tin phong phú về các địa điểm du lịch, hoạt động và trải nghiệm.
        Bạn nên đưa ra mô tả chi tiết về các điểm đến, lời khuyên du lịch, thông
        tin về khách sạn, nhà hàng, các hoạt động giải trí và văn hóa. Đảm bảo
        rằng nội dung của bạn chính xác, hữu ích và thu hút người đọc. <br />{" "}
        <br /> 3.Hình ảnh và video hấp dẫn: Hình ảnh và video là một phần quan
        trọng để giới thiệu địa điểm du lịch và thu hút sự quan tâm của khách
        hàng. Hãy sử dụng hình ảnh chất lượng cao và video đẹp mắt để tạo ấn
        tượng và giúp khách hàng hình dung rõ hơn về trải nghiệm du lịch của họ.{" "}
        <br /> <br /> 4.Đặt chỗ và thanh toán trực tuyến: Một tính năng quan
        trọng để cung cấp sự tiện lợi cho khách hàng là tích hợp chức năng đặt
        chỗ và thanh toán trực tuyến. Điều này giúp khách hàng dễ dàng đặt tour
        du lịch, vé máy bay, đặt phòng khách sạn và thanh toán một cách nhanh
        chóng và an toàn.
        <br /> <br /> 5. Liên kết xã hội và chia sẻ
      </p>
    </div>
  );
};

export default Blog;
