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
import { LoaderCircle } from "lucide-react";
import { SignInFormSchema, type SignInFormValues } from "@/types/types";
import { useAccountLogin } from "@/hooks/queryAndMutations/auth";

const SignInForm = () => {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(SignInFormSchema),
  });
  const { mutate: signIn, isPending } = useAccountLogin();

  const onSubmit = (data: SignInFormValues) => {
    const loggedInUser = signIn(data);
    console.log(loggedInUser);
  };
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-3xl font-bold text-center my-2">Sign In</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-[300px]"
          >
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
                "Sign In"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignInForm;
