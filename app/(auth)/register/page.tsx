"use client";
import RegisterForm from "@/components/auth/RegisterForm"
import Link from "next/link"
import { FaHome, FaUserPlus } from "react-icons/fa"
import { Suspense } from "react"

const Page = () => {
  return (
    <Suspense>
      <div className="min-h-screen md:w-3xl flex flex-col bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-white">
        {/* Top Navigation Bar */}
        <nav className="sticky top-0 z-30 w-full bg-gradient-to-r from-[#232526] to-[#0f2027] backdrop-blur shadow flex items-center justify-between px-10 py-4 mb-10 border-b border-[#2c5364]">
          <div className="flex items-center gap-3">
            <FaUserPlus className="text-[#00c6ff] text-2xl" />
            <span className="font-extrabold text-2xl tracking-tight text-white drop-shadow">Register</span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 text-[#00c6ff] hover:text-[#fff] transition"><FaHome /> Home</Link>
          </div>
        </nav>
        <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#00c6ff]/10 to-[#0072ff]/10">
          <div className="flex flex-col items-center w-full px-4">
            <RegisterForm />
          </div>
        </main>
      </div>
    </Suspense>
  )
}

export default Page