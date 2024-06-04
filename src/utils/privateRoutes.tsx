import { Navigate, Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Header from "../components/layouts/header";
import Navbar from "../components/layouts/navbar";

const PrivateRoutes: React.FC = () => {
  const check = localStorage.getItem("token");
  return check ? (
    <Fragment>
      <Navbar />
      <div className="App__right">
        <Header /> <Outlet />
      </div>
    </Fragment>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
