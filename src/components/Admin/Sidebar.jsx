import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import logo from "../../Assets/logo.jpg"
import { useSelector } from "react-redux";

const Sidebar = () => {

  const {user} = useSelector(state => state.user)

  return (
    <div className="sidebar">
      <Link to="/">
        <img
          src={logo}
          style={{width: '150px', height: '120px'}}
          alt="Ecommerce"
        />
      </Link>
      <Link to="/dashboard">
        <p className="Dashboard__item" >
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link to="/admin/products">
        <p className="Dashboard__item">
          <PostAddIcon /> All Posts
        </p>
      </Link>

      <Link to="/admin/product">
        <p>
          <AddIcon />
          Create Post
        </p>
      </Link>
      {user.role !== "admin" ? (
        <></>
      ) : (
        <>
          <Link to="/admin/news">
          <p>
            <ListAltIcon />
            News
          </p>
        </Link>
        <Link to="/admin/users">
          <p>
            <PeopleIcon /> Users
          </p>
        </Link>
        </>
      )}
    </div>
  );
};

export default Sidebar;
