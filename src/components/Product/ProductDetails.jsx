import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProductDetails } from "../../actions/ProductActions";
import Footer from "../../more/Footer";
import MetaData from "../../more/Metadata";
import Header from "../Home/Header";
import "./ProductDetails.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import BottomTab from "../../more/BottomTab";
import Loading from "../../more/Loader";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { post, loading, error } = useSelector((state) => state.postDetails);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error]);

  const createMarkup = () => {
    return { __html: post.description };
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title={`${post.name}`} />
          <Header />
          <div className="ProductDetails">
            <div className="first__varse">
              {post.images &&
                post.images.map((item, i) => (
                  <img
                    className="CarouselImage"
                    key={i}
                    src={item.url}
                    alt={`${i} Slide`}
                  />
                ))}
            </div>
            <div className="varse__2">
              <div className="detailsBlock-1">
                <h2>{post.name}</h2>
              </div>
              <div className="detailsBlock">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "13px",
                      color: "tomato",
                      marginBottom: 20,
                    }}
                  >{`${post.luat}`}</h1>
                </div>

                <div dangerouslySetInnerHTML={createMarkup()} />
              </div>
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
          <Footer />
          <BottomTab />
        </>
      )}
    </>
  );
};

export default ProductDetails;
