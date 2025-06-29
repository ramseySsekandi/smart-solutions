"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/lib/zod";
import { registerUser } from "@/app/actions/register";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaUserPlus } from "react-icons/fa";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { email: "", name: "", password: "", confirmPassword: "" },
  });

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    setLoading(true);
    try {
      const res = await registerUser(data);
      if (res.error) toast.error(res.error);
      else if (res.success) {
        toast.success(res.success);
        form.reset();
        router.push("/dashboard");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-4 md:p-8 border-2 border-[#00c6ff]/40 ring-1 ring-white/30">
      <h1 className="text-xl sm:text-3xl font-bold text-[#00c6ff] mb-4 flex items-center gap-2 justify-center">
        <FaUserPlus /> Register a new account
      </h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Input
          {...form.register("name")}
          placeholder="Name"
          type="text"
          disabled={loading}
        />
        {form.formState.errors.name && (
          <div className="text-red-400 text-xs mt-1">{form.formState.errors.name.message as string}</div>
        )}
        <Input
          {...form.register("email")}
          placeholder="Email"
          type="email"
          disabled={loading}
        />
        {form.formState.errors.email && (
          <div className="text-red-400 text-xs mt-1">{form.formState.errors.email.message as string}</div>
        )}
        <Input
          {...form.register("password")}
          placeholder="Password"
          type="password"
          disabled={loading}
        />
        {form.formState.errors.password && (
          <div className="text-red-400 text-xs mt-1">{form.formState.errors.password.message as string}</div>
        )}
        <Input
          {...form.register("confirmPassword")}
          placeholder="Confirm Password"
          type="password"
          disabled={loading}
        />
        {form.formState.errors.confirmPassword && (
          <div className="text-red-400 text-xs mt-1">{form.formState.errors.confirmPassword.message as string}</div>
        )}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </Button>
      </form>
      <div className="mt-6 text-center text-sm">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-[#00c6ff] hover:underline"
        >
          Login
        </a>
      </div>
    </div>
  );
}