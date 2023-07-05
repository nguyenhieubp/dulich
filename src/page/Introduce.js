import React from "react";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Link } from "react-router-dom";

const Introduce = () => {
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
        <h1 className="text-[2.5rem] font-bold text-[#3152a3]">Giới Thiệu</h1>
      </div>
      <p className="mt-[2rem]">
        Chào mừng bạn đến với dulichviet.com - Trang web du lịch hàng đầu dành
        cho những người yêu thích khám phá vẻ đẹp tuyệt vời của Việt Nam!
        <br /> <br /> Tại dulichviet.com, chúng tôi tự hào là một cộng đồng đam
        mê du lịch, và trang web blog này được tạo ra với mục đích chia sẻ kiến
        thức, trải nghiệm và gợi ý du lịch để giúp bạn có những chuyến đi thú vị
        và đáng nhớ. <br /> <br /> Với dulichviet.com, bạn sẽ được khám phá
        những điểm đến nổi tiếng và ít biết đến trong cả thành phố sôi động và
        thiên nhiên tươi đẹp của Việt Nam. Chúng tôi cung cấp thông tin chi tiết
        về các điểm đến hấp dẫn như Hà Nội, Sài Gòn, Đà Nẵng, vịnh Hạ Long, rừng
        quốc gia Cúc Phương và vườn quốc gia Phong Nha-Kẻ Bàng. Bên cạnh đó, bạn
        cũng sẽ tìm thấy các bài viết về văn hóa, ẩm thực và lịch sử độc đáo của
        Việt Nam.
        <br /> <br />
        Dulichviet.com cam kết mang đến cho bạn những bài viết chất lượng, hình
        ảnh đẹp mắt và thông tin đáng tin cậy. Trang web blog này sẽ trở thành
        nguồn cảm hứng và hướng dẫn cho bạn trong hành trình khám phá Việt Nam.
        Hãy cùng nhau khám phá những điểm đến thú vị và tận hưởng những khoảnh
        khắc đáng nhớ tại dulichviet.com!
      </p>
    </div>
  );
};

export default Introduce;
