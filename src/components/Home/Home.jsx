import "./Home.css";
import Carousel from "react-material-ui-carousel";
import bg2 from "../../Assets/background2.jpg";
import Header from "./Header";
import MetaData from "../../more/Metadata";
import Footer from "../../more/Footer";
import BottomTab from "../../more/BottomTab";
import "react-toastify/dist/ReactToastify.css";
import "../about/About.css";
import img1 from "../../Assets/img1.jpg";
import map from "../../Assets/map.png";
import PhoneIcon from "@mui/icons-material/Phone";


const Home = () => {
  return (
    <>
      <MetaData title="Home" />
      <Header />
      {/* Carousel */}
      <div className="banner">
        <Carousel>
          <img alt="" src={img1} className="bgImg" />
          <img alt="" src={bg2} className="bgImg" />
        </Carousel>
        <div className="home__content">
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "Segoe Script",
                fontSize: "3em",
                fontWeight: "500",
              }}
            >
              luật sư
            </h2>
          </div>
          <div>
            <h2
              style={{
                fontSize: "4.5em",
                fontFamily: "Poppins,sans-serif",
                color: "#fff",
              }}
            >
              TƯ VẤN PHÁP LUẬT
            </h2>
          </div>
          <div>
            <h2
              style={{
                fontSize: "4.5em",
                fontWeight: "400",
                fontFamily: "Poppins,sans-serif",
                color: "#fff",
                lineHeight: "1.2",
              }}
            >
              DỊCH VỤ PHÁP LÝ
            </h2>
          </div>

          <div>
            <a href="#contact">
              <button
                type="submit"
                style={{
                  height: "50px",
                  border: "none",
                  background: "#3BB77E",
                  margin: "30px 0",
                  fontSize: "1.2vmax",
                  color: "#fff",
                  cursor: "pointer",
                }}
                className="Home__button"
              >
                Liên hệ ngay
              </button>
            </a>
          </div>
        </div>
      </div>

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
                  Chúng Tôi Là HANILAF
                </span>
                <p>
                  Chúng tôi là công ty luật quốc tế có hiểu biết về ngành, đa
                  dạng và có khát vọng đổi mới. Thế mạnh của chúng tôi là khả
                  năng áp dụng một kiểu tư duy mới và sử dụng các công nghệ pháp
                  lý tiên tiến để giúp khách hàng vượt qua những thách thức cạnh
                  tranh trong trật tự kinh tế thế giới mới ngày nay.
                </p>
                <p>
                  Danh tiếng của Công ty đã được chứng minh thông qua các kỹ
                  năng và kinh nghiệm tư vấn chuyên nghiệp của mình trong lĩnh
                  vực Doanh nghiệp và Bất động sản, Sở hữu trí tuệ, cũng như
                  trong lĩnh vực Giải quyết Tranh chấp. Với các luật sư, chuyên
                  gia và nhà tư vấn có năng lực, những người có kinh nghiệm tích
                  lũy lớn, Công ty chắc chắn có thể đưa ra các giải pháp khả thi
                  và toàn diện cho các vấn đề của khách hàng.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd verse */}
          <div className="second">
            <div className="heading">
              <h2>Những gì chúng tôi cung cấp</h2>
            </div>
            <div className="row flex">
              <div className="col__3">
                <div
                  style={{
                    padding: "10px",
                    border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px",
                  }}
                >
                  <div className="flex align__items__center justify__content__center image">
                    <img
                      alt=""
                      src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg"
                    />
                  </div>
                  <span>BẢO HỘ NHÃN HIỆU</span>
                  <p>
                    Tư vấn, hỗ trợ khách hàng đăng ký bảo hộ sở hữu trí tuệ đối
                    với nhãn hiệu và tên thương mại.
                  </p>
                </div>
              </div>
              <div className="col__3">
                <div
                  style={{
                    padding: "10px",
                    border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px",
                  }}
                >
                  <div className="flex align__items__center justify__content__center image">
                    <img
                      alt=""
                      src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg"
                    />
                  </div>
                  <span>THÀNH LẬP CÔNG TY</span>
                  <p>
                    Tư vấn, hỗ trợ, thay mặt khách hàng tiến hành mọi thủ tục
                    liên quan đến thành lập công ty và kê khai thuế sau thành
                    lập.
                  </p>
                </div>
              </div>
              <div className="col__3">
                <div
                  style={{
                    padding: "15px",
                    border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px",
                  }}
                >
                  <div className="flex align__items__center justify__content__center image">
                    <img
                      alt=""
                      src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg"
                    />
                  </div>
                  <span>GIẤY KHAI SINH</span>
                  <p>
                    Tư vấn, hỗ trợ, thay mặt khách hàng tiến hành thay đổi tên
                    khai sinh như mong muốn theo đúng quy định pháp luật.
                  </p>
                </div>
              </div>

              <div className="col__3">
                <div
                  style={{
                    padding: "15px",
                    border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px",
                  }}
                >
                  <div className="flex align__items__center justify__content__center image">
                    <img
                      alt=""
                      src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg"
                    />
                  </div>
                  <span>GIẤY KHAI SINH</span>
                  <p>
                    Thay mặt khách hàng tra cứu, trích lục giấy khai sinh trong
                    trường hợp bị hư hỏng, thất lạc
                  </p>
                </div>
              </div>

              <div className="col__3">
                <div
                  style={{
                    padding: "15px",
                    border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px",
                  }}
                >
                  <div className="flex align__items__center justify__content__center image">
                    <img
                      alt=""
                      src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg"
                    />
                  </div>
                  <span>TÌNH TRẠNG HÔN NHÂN</span>
                  <p>
                    Giấy xác nhận tình trạng hôn nhân được sử dụng để kết hôn
                    tại cơ quan có thẩm quyền của Việt Nam.
                  </p>
                </div>
              </div>

              <div className="col__3">
                <div
                  style={{
                    padding: "15px",
                    border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px",
                  }}
                >
                  <div className="flex align__items__center justify__content__center image">
                    <img
                      alt=""
                      src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg"
                    />
                  </div>
                  <span>LY HÔN NHANH</span>
                  <p>
                    Tư vấn, hỗ trợ, thay mặt khách hàng giải quyết các vấn đề
                    liên quan đến hôn nhân và ly hôn.
                  </p>
                </div>
              </div>

              <div className="col__3">
                <div
                  style={{
                    padding: "15px",
                    border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px",
                  }}
                >
                  <div className="flex align__items__center justify__content__center image">
                    <img
                      alt=""
                      src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg"
                    />
                  </div>
                  <span>TRANH TỤNG</span>
                  <p>
                    Tư vấn, đại diện khách hàng tiến hành thủ tục tố tụng để bảo
                    vệ quyền và lợi ích hợp pháp.
                  </p>
                </div>
              </div>

              <div className="col__3">
                <div
                  style={{
                    padding: "15px",
                    border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px",
                  }}
                >
                  <div className="flex align__items__center justify__content__center image">
                    <img
                      alt=""
                      src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg"
                    />
                  </div>
                  <span>DOANH NGHIỆP</span>
                  <p>
                    Thay mặt khách hàng làm việc với các cơ quan nhà nước trong
                    các lĩnh vực hành chính, đầu tư, kinh doanh.
                  </p>
                </div>
              </div>

              <div className="col__3">
                <div
                  style={{
                    padding: "15px",
                    border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px",
                  }}
                >
                  <div className="flex align__items__center justify__content__center image">
                    <img
                      alt=""
                      src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg"
                    />
                  </div>
                  <span>KHÁC...</span>
                  <p>
                    Ngoài ra chúng tôi còn cung cấp nhiều dịch vụ pháp lý khác.
                    Quý khách hàng xin vui lòng gọi Hotline để được hỗ trợ thêm.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/** 6nd verse */}
          <div className="row flex" id="contact">
            <div className="col__2">
              <div className="meta">
                <span
                  style={{
                    fontSize: "40px",
                    fontWeight: "700",
                    lineHeight: "1.2",
                  }}
                >
                  LIÊN HỆ DỊCH VỤ
                </span>
                <p>HOTLINE HANILAF</p>
                <p>
                  Hãy gọi ngay cho chúng tôi để được nhận hỗ trợ về pháp lý kịp
                  thời nhất. Quyền lợi của bạn là ưu tiên hàng đầu của chúng
                  tôi, Hãy gửi yêu cầu nếu bạn cần luật sư giải quyết mọi vấn đề
                  pháp lý của mình.
                </p>
                <button className="btn-contact">
                  <a href="tell:0962264737">
                    <PhoneIcon />
                    09.6226.4737
                  </a>
                </button>
              </div>
            </div>
            <div className="col__2">
              <a href="https://goo.gl/maps/CDAq4GTDA31yUyma7" target="_blank" rel="noreferrer"><img alt="" src={map} /></a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BottomTab />
    </>
  );
};

export default Home;
