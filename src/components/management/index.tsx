import { Outlet } from "react-router-dom";
import Menu from "../menu";

const ManagementGroupPage = () => {
  return (
    <div className="wrapper-main">
      <Menu />
      <Outlet />
    </div>
  );
};

export default ManagementGroupPage;
