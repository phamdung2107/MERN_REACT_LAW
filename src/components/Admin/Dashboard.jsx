import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "./dashboard.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
// eslint-disable-next-line
import Chart from "chart.js/auto";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../more/Metadata";
import Loading from "../../more/Loader";
import { getAdminProduct , getCreatorProduct } from "../../actions/ProductActions";
import { getAllUsers } from "../../actions/userAction";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((state) => state.posts);

  const { users } = useSelector((state) => state.allUsers);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if(user.role === "admin"){
      dispatch(getAdminProduct());
    }
    if(user.role === "creator"){
      dispatch(getCreatorProduct());
    }
    dispatch(getAllUsers());
  }, [dispatch,user.role]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="dashboard">
          <MetaData title="Dashboard" />
          <Sidebar />

          <div className="dashboardContainer">
            <Typography component="h1">Dashboard</Typography>

            <div className="dashboardSummary">
              <div className="dashboardSummaryBox2">
                <Link to="/admin/products">
                  <p>Product</p>
                  <p>{posts && posts.length}</p>
                </Link>
                {user.role !== "admin" ? (
                  <></>
                ) : (
                  <Link to="/admin/users">
                    <p>Users</p>
                    <p>{users && users.length}</p>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Dashboard;
