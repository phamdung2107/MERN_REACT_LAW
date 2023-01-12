// eslint-disable-next-line
import React, { useRef } from "react";
import "./Header.css";
import logo from "../../Assets/logo.jpg"
import { Link } from "react-router-dom";

const Header = () => {

const switcherTab = useRef(null);
  
window.addEventListener("scroll", () =>{
  if(window.pageYOffset > 100){
      document.querySelector(".navbar").classList.add("active");
  }
  else{
    document.querySelector(".navbar").classList.remove("active");
  }
})

  return (
    <div className="Header">
    {/* Header TopBar */}
    <div className="Header__topbar space__beetween">
      {/* Topbar Left */}
      <div className="logo pxy__10">
        <Link to="/">
          <img
            src={logo}
            alt=""
            className="logo"
            style={{
              width: 150,
              height: 100,
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        </Link>
      </div>
      {/* Topbar Middle */}

      <div
        className="searchBoxHome"
        style={{
          width: "50%",
          position: "relative",
        }}
      >
        <div
          className="inputBox"
          style={{
            display: "flex",
            alignItems: "center",
            height: "30px",
            width: "100%",
            background: "tomato",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              color: "#fff",
            }}
          >
            Công ty Luật TNHH Hanilaf chuyên cung cấp dịch vụ tư vấn pháp lý hoặc nhận ủy quyền tham gia tố tụng
          </span>
        </div>
      </div>

      <div
        className="flex align__items__center"
        style={{
          margin: "0px 10px",
        }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-envelope"
            viewBox="0 0 16 16"
            style={{
              color: "#53C08E",
            }}
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
        </div>
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: "1rem",
          }}
        >
          <a href="mail:hanilaf.new@gmail.com" style={{color:"black"}}>
            <strong style={{
              padding:"0px 5px"
            }}>Email:</strong> hanilaf.new@gmail.com
          </a>
        </span>
      </div>
    </div>
    {/* Header Navbar */}
    <div className="navbar flex pz__10 space__beetween" ref={switcherTab}>
      <div
       className="navigation"
       style={{
         padding:"0px 50px"
       }}
      >
        <ul
          style={{
            fontFamily: "sans-serif",
            cursor: "pointer",
            display: "flex",
            listStyle: "none",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/">
            <li>Trang chủ</li>
          </Link>
          <Link to="/about">
            <li>Giới thiệu</li>
          </Link>
          <Link to="/Posts">
            <li>Tư Vấn Pháp Lý</li>
          </Link>
          <Link to="/news">
            <li>Tin Tức</li>
          </Link>
          <Link to="/faq">
            <li>Quy Tắc</li>
          </Link>
          <Link to="/contact">
            <li>Liên Hệ</li>
          </Link>
        </ul>
      </div>

      <div className="rightOption flex align__items__center">
        <div>
          <Link to="/search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-search pxz__20 black pointer"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Link>
        </div>
        <div className="user__account flex pointer">
          <Link to="/login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-person pxz__20 black"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;


