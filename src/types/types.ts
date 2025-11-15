import { z } from "zod";

export const SignInFormSchema = z.object({
  email: z.email("Invalid email address").nonempty("Email is required"),
  password: z
    .string()
    .min(8, "Password Must be atleast 8 characters")
    .max(100, "Password must be less than 100 characters"),
});

export const SignUpFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name Must be atleast 2 characters")
    .max(50, "Name must be less than 50 characters"),

  email: z.email("Invalid email address").nonempty("Email is required"),
  password: z
    .string()
    .min(8, "Password Must be atleast 8 characters")
    .max(100, "Password must be less than 100 characters"),
});

export type SignInFormValues = z.infer<typeof SignInFormSchema>;
export type SignUpFormValues = z.infer<typeof SignUpFormSchema>;

export type NewAccountResponse = {
  $id: string;
  email: string;
  name: string;
};
