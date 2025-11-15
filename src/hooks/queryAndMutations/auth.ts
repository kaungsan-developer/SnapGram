import { useMutation } from "@tanstack/react-query";
import {
  accountLogin,
  accountLogout,
  createNewAccount,
} from "@/lib/appwrite/api";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useAuthContext } from "@/context/AuthContext";

export function useCreateNewAccount() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: { email: string; name: string; password: string }) =>
      createNewAccount(data),
    onSuccess: () => {
      toast.success("Account created successfully!");
      navigate("/auth/sign-in");
    },
    onError: (error) => {
      console.log(error.message);
      toast.error(`Error: ${error.message}`);
    },
  });
}

export function useAccountLogin() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthContext();
  return useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      accountLogin(data),
    onSuccess: () => {
      toast.success("Logged in successfully!");
      setIsAuthenticated(true);
      navigate("/");
    },
    onError: (error) => {
      console.log(error.message);
      toast.error(`Error: ${error.message}`);
    },
  });
}

export function useAccountLogout() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthContext();

  return useMutation({
    mutationFn: () => accountLogout(),
    onSuccess: () => {
      toast.success("Logged out successfully!");
      setIsAuthenticated(false);
      navigate("/auth/sign-in");
    },
    onError: (error) => {
      console.log(error.message);
      toast.error(`Error: ${error.message}`);
    },
  });
}
