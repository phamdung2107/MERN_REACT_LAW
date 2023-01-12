import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./AllProducts.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  deleteProduct,
  getAdminProduct,
  getCreatorProduct,
} from "../../actions/ProductActions";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import MetaData from "../../more/Metadata";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SideBar from "./Sidebar";
import { ToastContainer, toast } from "react-toastify";
import { DELETE_PRODUCT_RESET } from "../../constans/ProductConstans";

const AllProducts = () => {
  const history = useNavigate();

  const dispatch = useDispatch();

  const { error, posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.user);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteProduct
  );

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success("Product Deleted Successfully");
      history("/dashboard");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }
    if(user.role === "admin"){
      dispatch(getAdminProduct());
    }
    if(user.role === "creator"){
      dispatch(getCreatorProduct());
    }
  }, [dispatch, error,user.role, deleteError, isDeleted, history]);

  const columns = [
    { field: "id", headerName: "Post ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Tiêu Đề",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "description",
      headerName: "Nội Dung",
      minWidth: 300,
      flex: 0.3,
    },

    {
      field: "luat",
      headerName: "Luật",
      minWidth: 100,
      flex: 0.3,
    },

    {
      field: "trichdan",
      headerName: "Trích Dẫn",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "user",
      headerName: "User ",
      minWidth: 70,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/edit/product/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  posts &&
    posts.forEach((item) => {
      rows.push({
        id: item._id,
        description: item.description,
        trichdan: item.trichdan,
        luat: item.luat,
        user: item.user,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL PRODUCTS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
};

export default AllProducts;
