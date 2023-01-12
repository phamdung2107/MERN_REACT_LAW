import "./App.css";
import Home from "./components/Home/Home";
import WebFont from "webfontloader";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/Product/ProductDetails";
import LoginSignup from "./components/Authentication/LoginSignup";
import UserData from "./more/UserData";
import { useSelector } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/userAction";
import Profile from "./components/user/Profile";
import ProtectedRoute from "./route/ProtectedRoute";
import UpdatePassword from "./components/user/UpdatePassword";
import EditProfile from "./components/user/EditProfile";
import About from "./components/about/About";
import Products from "./components/Product/Products";
import Search from "./components/Product/Search";
import Support from "./more/Support";

import MoreOption from "./components/user/MoreOption";
import CommingSoon from "./more/CommingSoon";
import Rules from "./more/Rules";
import Contact from "./more/Contact";

import Dashboard from './components/Admin/Dashboard';
import CreateProduct from './components/Admin/CreateProduct';
import AllProducts from './components/Admin/AllProducts';
import EditProduct from './components/Admin/EditProduct';
import AllUsers from './components/Admin/AllUsers';
import UpdateUser from './components/Admin/UpdateUser';
import ForgotPassword from "./components/user/ForgotPassword";
import ResetPassword from "./components/user/ResetPassword";
import OnTop from "./more/OnTop";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      {isAuthenticated && <UserData user={user} />}
      <OnTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/posts" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/posts/:keyword" element={<Products />} />
        <Route exact path="/support" element={<Support />} />
        <Route exact path="/post/:id" element={<ProductDetails />} />
        <Route exact path="/login" element={<LoginSignup />} />
        <Route exact path="/news" element={<CommingSoon />} />
        <Route exact path="/faq" element={<Rules />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/more" element={<MoreOption />} />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route exact path="/password/reset/:token" element={<ResetPassword />} />

        <Route
          path="/me"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          exact path="/me/update"
          element={
            <ProtectedRoute>
              <UpdatePassword />
            </ProtectedRoute>
          }
        />
        <Route
          exact path="/me/update/info"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />

        <Route
          exact path="/dashboard"
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          exact path="/admin/product"
          element={
            <ProtectedRoute isAdmin={true}>
              <CreateProduct />
            </ProtectedRoute>
          }
        />
        <Route
          exact path="/admin/products"
          element={
            <ProtectedRoute isAdmin={true}>
              <AllProducts />
            </ProtectedRoute>
          }
        />
        <Route
          exact path="/edit/product/:id"
          element={
            <ProtectedRoute isAdmin={true}>
              <EditProduct />
            </ProtectedRoute>
          }
        />
        <Route
          exact path="/admin/users"
          element={
            <ProtectedRoute isAdmin={true}>
              <AllUsers />
            </ProtectedRoute>
          }
        />
        <Route
          exact path="/admin/user/:id"
          element={
            <ProtectedRoute isAdmin={true}>
              <UpdateUser />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
