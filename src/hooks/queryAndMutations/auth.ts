import { useMutation, useQuery } from "@tanstack/react-query";
import {
  accountLogin,
  accountLogout,
  createNewAccount,
} from "@/lib/appwrite/api";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export function useCreateNewAccount() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: { email: string; name: string; password: string }) =>
      createNewAccount(data),
    onSuccess: () => {
      toast.success("Account created successfully!");
      navigate("/");
    },
    onError: (error) => {
      console.log(error.message);
      toast.error(`Error: ${error.message}`);
    },
  });
}

export function useAccountLogin() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      accountLogin(data),
    onSuccess: () => {
      toast.success("Logged in successfully!");
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
  return useMutation({
    mutationFn: () => accountLogout(),
    onSuccess: () => {
      toast.success("Logged out successfully!");
      navigate("/auth/sign-in");
    },
    onError: (error) => {
      console.log(error.message);
      toast.error(`Error: ${error.message}`);
    },
  });
}
