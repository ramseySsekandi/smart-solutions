"use client";

import CardWrapper from "./card-wrapper";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import { LoginSchema } from "@/lib/zod";
import { loginUser } from "@/app/actions/login";
import toast from "react-hot-toast";
import GoogleLogin from "./google-button";

const LoginForm = () => {
    const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
     try {
        setLoading(true);
        loginUser(data)
          .then((res) => {
            if (res.error) {
              toast.error(res.error);
            } if (res.success) {
              toast.success(res.success);
            }
          })
          .catch((error) => {
            console.error("Error during login:", error);
          });
      } catch (error) {
        
      } finally{
        setLoading(false);
      }
  };

  const { pending } = useFormStatus();
  return (
    <CardWrapper
      label="Login to your account"
      title="Login"
      backButtonHref="/register"
      backButtonLabel="Don't have an account? Register here."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="johndoe@gmail.com"
                    />
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
                    <Input {...field} type="password" placeholder="******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" disabled={pending}>
            {loading ? "Logging In..." : "Login"}
          </Button>
        </form>
      </Form>
      <GoogleLogin />
    </CardWrapper>
  );
};

export default LoginForm;