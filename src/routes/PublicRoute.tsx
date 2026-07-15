import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../auth/authContext";

const PublicRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Navigate to="/home" replace /> : <Outlet />;
};

export default PublicRoute;
