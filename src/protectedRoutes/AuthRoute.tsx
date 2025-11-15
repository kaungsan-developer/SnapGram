import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthContext().isAuthenticated;

  if (!isAuthenticated) {
    return <Navigate to="/auth/sign-in" replace />;
  }
  return <>{children}</>;
};

export default AuthRoute;
