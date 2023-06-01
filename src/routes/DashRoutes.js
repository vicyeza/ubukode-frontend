import { Navigate, Outlet } from "react-router-dom";
import Dashlayout from "../components/Dashlayout";

const DashRoutes = () => {
  let auth = { token: true };

  return auth.token ? (
    <Dashlayout>
      <Outlet />
    </Dashlayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default DashRoutes;
