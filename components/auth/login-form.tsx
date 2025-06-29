"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/zod";
import { loginUser } from "@/app/actions/login";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaSignInAlt } from "react-icons/fa";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setLoading(true);
    try {
      const res = await loginUser(data);
      if (res.error) toast.error(res.error);
      else if (res.success) {
        toast.success(res.success);
        router.push("/dashboard");
      }
    } catch {
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-4 md:p-8 border-2 border-[#00c6ff]/40 ring-1 ring-white/30">
      <h1 className="text-xl sm:text-3xl font-bold text-[#00c6ff] mb-4 flex items-center gap-2 justify-center">
        <FaSignInAlt /> Login to your account
      </h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Input
          {...form.register("email")}
          placeholder="Email"
          type="email"
          disabled={loading}
        />
        <Input
          {...form.register("password")}
          placeholder="Password"
          type="password"
          disabled={loading}
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </Button>
      </form>
      <div className="mt-6 text-center text-sm">
        Don&apos;t have an account?{" "}
        <a
          href="/register"
          className="text-[#00c6ff] hover:underline"
        >
          Register
        </a>
      </div>
    </div>
  );
}