import { Routes, Route } from "react-router";
import SignUpForm from "./auth/forms/SignUpForm";
import SignInForm from "./auth/forms/SignInForm";
import AuthLayout from "./auth/AuthLayout";
import HomePage from "./root/pages/HomePage";
import RootLayout from "./root/RootLayout";
import GuestRoute from "./protectedRoutes/GuestRoute";
import AuthRoute from "./protectedRoutes/AuthRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/auth"
          element={
            <GuestRoute>
              <AuthLayout />
            </GuestRoute>
          }
        >
          <Route path="/auth/sign-in" element={<SignInForm />} />
          <Route path="/auth/sign-up" element={<SignUpForm />} />
        </Route>

        <Route
          path="/"
          element={
            <AuthRoute>
              <RootLayout />
            </AuthRoute>
          }
        >
          <Route path="/" index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
