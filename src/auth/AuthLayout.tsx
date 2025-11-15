import { Outlet, Link } from "react-router";
const AuthLayout = () => {
  return (
    <div>
      <div className="flex items-center px-5 py-3 border-b mb-8">
        <h1 className="text-xl font-bold  flex-1">SnapGram</h1>
        <div className="flex  gap-4 items-center">
          <Link to="/auth/sign-in">Sign In</Link>
          <Link to="/auth/sign-up">Sign Up</Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default AuthLayout;
