import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../more/Footer";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import "./About.css";
import img1 from "../../Assets/img1.jpg";
import map from "../../Assets/map.png";
import BottomTab from "../../more/BottomTab";

const About = () => {
  const { loading } = useSelector((state) => state.profile);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="About" />
          <div>
            <Header />
            <div
              style={{
                width: "90%",
                margin: "0px auto",
              }}
            >
              <div className="about__page">
                {/* 1st verse */}
                <div className="row flex">
                  <div className="col__2">
                    <img
                      alt=""
                      src={img1}
                      style={{
                        width: "90%",
                      }}
                    />
                  </div>
                  <div className="col__2">
                    <div className="meta">
                      <span
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                        }}
                      >
                        HANILAF
                      </span>
                      <p>
                        Thành thạo trong ngành, HANILAF là sự kết hợp của đội
                        ngũ chuyên gia luật, được công nhận với sự nhạy bén và
                        khát khao mang lại công lý và sự hài lòng cho khách hàng
                        kịp thời.
                      </p>
                      <p>
                        Điều làm cho chúng tôi trở nên khác biệt là khả năng
                        sáng tạo, sáng tạo và tính hợp lý nhạy bén để giúp khách
                        hàng thắng thế trước mọi khó khăn và thách thức nảy sinh
                        từ các thị trường đầy biến động toàn cầu của chúng tôi.
                      </p>
                      <p>
                        Chuyên môn của FIRM của chúng tôi là tư vấn kỹ năng và
                        kinh nghiệm giải quyết các vấn đề từ nhiều vấn đề kinh
                        doanh, chẳng hạn như Doanh nghiệp và Bất động sản, Sở
                        hữu trí tuệ, cũng như Giải quyết Tranh chấp.
                      </p>
                      <p>
                        Với việc có một đội ngũ luật sư, luật sư và luật sư có
                        trình độ, những người đã tích lũy đáng kể kinh nghiệm và
                        kỹ năng, chúng tôi cam kết cung cấp đại diện pháp lý
                        hiệu quả, quan tâm và nhân ái để giúp đỡ các khách hàng
                        quý giá của chúng tôi.
                      </p>
                    </div>
                  </div>
                </div>


                {/** 6nd verse */}
                <div className="row flex">
                  <div className="col__2">
                    <div className="meta">
                      <span
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                        }}
                      >
                        Cam kết của chúng tôi đối với hoạt động kinh doanh có
                        trách nhiệm
                      </span>
                      <p>
                        Chúng tôi tin rằng doanh nghiệp phải đóng vai trò trung
                        tâm trong việc thúc đẩy và thúc đẩy tính bền vững. Chúng
                        tôi tự hào tận dụng tài năng, sự đổi mới và các mối quan
                        hệ của mình để tạo ra tác động xã hội tích cực và bền
                        vững cho khách hàng, con người của chúng tôi và thế
                        giới. Chúng tôi là những công dân toàn cầu và nhận thức
                        rằng pháp quyền là nền tảng thiết yếu cho tăng trưởng và
                        phát triển kinh tế. Khi pháp quyền mạnh mẽ, các nhà lãnh
                        đạo doanh nghiệp có thể cảm thấy lạc quan về việc đầu tư
                        vào tương lai.
                      </p>
                      <p>
                        Do đó, Công ty của chúng tôi cam kết thực hiện Hiệp ước
                        Toàn cầu của Liên hợp quốc, các Mục tiêu Phát triển Bền
                        vững. Đầu tư vào những nỗ lực này không chỉ là hoạt động
                        kinh doanh tốt mà còn là điều đúng đắn cần làm.
                      </p>
                    </div>
                  </div>
                  <div className="col__2">
                    <img alt="" src={map} />
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <BottomTab />
        </>
      )}
    </>
  );
};

export default About;
