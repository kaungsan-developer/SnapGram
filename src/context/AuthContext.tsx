import { createContext, useContext, useEffect, useState } from "react";
import type { INIT_USER_TYPE, AuthContextType } from "@/types/types";
import { useNavigate } from "react-router";
import { getCurrentUser } from "@/lib/appwrite/api";

const INIT_USER: INIT_USER_TYPE = {
  $id: "",
  name: "",
  email: "",
  imageURL: "",
  bio: "",
};

const INIT_STATE: AuthContextType = {
  user: INIT_USER,
  setUser: () => {},
  isLoading: false,
  isAuthenticated: false,
  setIsAuthenticated: () => {},
};
const AuthContext = createContext<AuthContextType>(INIT_STATE);

export function useAuthContext() {
  return useContext(AuthContext);
}

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState(INIT_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  async function checkAuthStatus() {
    try {
      setIsLoading(true);
      const authUser = await getCurrentUser();
      console.log(authUser);
      if (!authUser) {
        navigate("/auth/sign-in");
        return;
      }
      setUser({
        $id: authUser.$id,
        name: authUser.name,
        email: authUser.email,
        imageURL: authUser.imageURL,
        bio: authUser.bio,
      });
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }

  const values = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    setIsLoading,
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
