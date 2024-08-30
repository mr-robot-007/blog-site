import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute() {
  const {authenticated} = useAuth();
  return authenticated ? <Outlet/> : <Navigate to="/signin" />;

}

export default ProtectedRoute;