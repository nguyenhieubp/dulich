import React from "react";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Link } from "react-router-dom";

const FAQ = () => {
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
        <h1 className="text-[2.5rem] font-bold text-[#3152a3]">FAQ</h1>
      </div>
      <h1 className="mt-[2rem] text-[1.8rem]">Câu hỏi thường gặp</h1>
      <div className="mt-[1rem]">
        <h2>1. Làm thế nào để đặt tour du lịch?</h2>
        <p>
          Bạn có thể đặt tour du lịch trực tuyến thông qua trang web của chúng
          tôi. Chỉ cần chọn tour mong muốn, điền đầy đủ thông tin cá nhân và
          thanh toán trực tuyến. Sau đó, bạn sẽ nhận được xác nhận đặt tour qua
          email.
        </p>
        <br />
        <h2>2. Làm sao để tìm thông tin về các điểm đến?</h2>
        <p>
          Trang web của chúng tôi cung cấp thông tin chi tiết về các điểm đến.
          Bạn có thể tìm kiếm theo địa điểm, hoạt động, loại hình du lịch và
          nhiều tiêu chí khác. Bạn cũng có thể tìm kiếm qua hệ thống danh mục
          hoặc sử dụng công cụ tìm kiếm.
        </p>

        <br />
        <h2>3. Tôi có thể hủy tour đã đặt không?</h2>
        <p>
          Để biết thông tin về chính sách hủy tour, vui lòng liên hệ với chúng
          tôi qua số điện thoại hoặc email được cung cấp trên trang Liên hệ.
          Chúng tôi sẽ hỗ trợ bạn và cung cấp thông tin chi tiết về chính sách
          hủy tour.
        </p>

        <br />
        <h2>4. Làm thế nào để liên hệ với chúng tôi?</h2>
        <p>
          Bạn có thể liên hệ với chúng tôi qua số điện thoại +1234567890 hoặc
          gửi email cho chúng tôi tại info@dulichviet.com. Chúng tôi sẵn lòng hỗ
          trợ bạn với mọi câu hỏi và yêu cầu của bạn.
        </p>
      </div>

      <br />
      <h2>5. Có sẵn các chương trình du lịch tùy chỉnh không?</h2>
      <p>
        Vâng, chúng tôi cung cấp dịch vụ tùy chỉnh tour du lịch. Bạn có thể liên
        hệ với chúng tôi và nêu rõ yêu cầu của bạn. Chúng tôi sẽ làm việc cùng
        bạn để tạo ra một chương trình du lịch phù hợp với mong muốn và nhu cầu
        của bạn.
      </p>
    </div>
  );
};

export default FAQ;
