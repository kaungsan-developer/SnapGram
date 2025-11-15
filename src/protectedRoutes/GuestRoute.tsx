import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

const GuestRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthContext().isAuthenticated;

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

export default GuestRoute;
