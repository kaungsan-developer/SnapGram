import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignUpFormSchema, type SignUpFormValues } from "@/types/types";
import { useCreateNewAccount } from "@/hooks/queryAndMutations/auth";
import { LoaderCircle } from "lucide-react";

const SignUpForm = () => {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(SignUpFormSchema),
  });
  const { mutate: signUp, isPending } = useCreateNewAccount();

  const onSubmit = (data: SignUpFormValues) => {
    const newUser = signUp(data);
    console.log(newUser);
  };
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-3xl font-bold text-center my-2">Sign Up</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-[300px]"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="abc@example.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="cursor-pointer float-end"
              disabled={isPending}
            >
              {isPending ? (
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
