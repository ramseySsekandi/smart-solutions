"use client";
import LoginForm from "@/components/auth/login-form"
import Link from "next/link"
import { FaHome, FaSignInAlt } from "react-icons/fa"
import { useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import toast from "react-hot-toast"

export default function Page() {
  return (
    <Suspense>
      <LoginPageContent />
    </Suspense>
  );
}

function LoginPageContent() {
  const searchParams = useSearchParams();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      // Only handle login success toast
      if (url.searchParams.get("loginSuccess")) {
        if (!(window as any).__loginToastShown) {
          toast.success("Login successful!");
          (window as any).__loginToastShown = true;
          url.searchParams.delete("loginSuccess");
          window.history.replaceState({}, document.title, url.pathname + url.search);
        }
      } else {
        (window as any).__loginToastShown = false;
      }
    }
  }, []); // Only run on mount

  return (
    <div className="min-h-svh w-full md:max-w-5xl flex flex-col bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-white">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-30 w-full px-4 sm:px-10 bg-gradient-to-r from-[#232526] to-[#0f2027] backdrop-blur shadow flex items-center justify-between py-4 border-b border-[#2c5364]">
        <div className="flex items-center gap-3">
          <FaSignInAlt className="text-[#00c6ff] text-2xl" />
          <span className="font-extrabold text-2xl tracking-tight text-white drop-shadow">Login</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 text-[#00c6ff] hover:text-[#fff] transition"><FaHome /> Home</Link>
        </div>
      </nav>
      <main className="flex px-4 sm:px-10 min-h-[calc(100vh-4.5rem)] w-full items-center justify-center ">
        <div className="flex max-w-2xl flex-col items-center w-full">
          <LoginForm />
        </div>
      </main>
    </div>
  );
}
