import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../auth/authContext";
import { Loader } from "../views";

const PublicRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return isAuthenticated ? <Navigate to="/home" replace /> : <Outlet />;
};

export default PublicRoute;
