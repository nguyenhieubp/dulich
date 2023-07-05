import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
const Contact = () => {
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
        <h1 className="text-[2.5rem] font-bold text-[#3152a3]">Liên Hệ</h1>
      </div>
      <div className="mt-[2rem]">
        <h2 className="text-[1.8rem]">Liên hệ với chúng tôi</h2> <br />
        <p>
          Cảm ơn bạn đã quan tâm đến dulichviet.com! Chúng tôi luôn sẵn lòng
          lắng nghe và hỗ trợ bạn với mọi câu hỏi, ý kiến và góp ý liên quan đến
          trang web và các dịch vụ du lịch.
        </p>
        <br />
        <p>
          Để liên hệ với chúng tôi, bạn có thể sử dụng các thông tin dưới đây:
        </p>
        <ul>
          <li>
            Địa chỉ: Toà nhà Đại học Công nghệ Đông Á, P. Trịnh Văn Bô, Xuân
            Phương, Nam Từ Liêm, Hà Nội{" "}
          </li>
          <li>Điện thoại: 0123456789</li>
          <li>
            Email: <a href="#">...@dulichviet.com</a>
          </li>
        </ul>
        <br />
        <br />
        <p>
          Rất mong muốn được nghe từ bạn và sẵn lòng hỗ trợ bạn trong mọi yêu
          cầu và nhu cầu du lịch của bạn. Hãy liên hệ ngay để chúng tôi có thể
          đồng hành cùng bạn trên hành trình khám phá Việt Nam!
        </p>
        <p>Xin cảm ơn và chúc bạn có một chuyến đi đáng nhớ!</p>
      </div>
    </div>
  );
};

export default Contact;
