import { Outlet } from "react-router";
const AuthLayout = () => {
  return (
    <div className="pt-10">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
