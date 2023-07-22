import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function PrivateRouter({ children }) {
  console.log("true");
  const { user } = useAuth();
  const location = useLocation();
  if (user?.email) {
    return <>{children}</>; // Wrap children in JSX syntax
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRouter;
