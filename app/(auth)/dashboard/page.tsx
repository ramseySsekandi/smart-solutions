import Link from "next/link"
import { FaEnvelope, FaFileInvoice, FaCommentDots, FaTachometerAlt } from "react-icons/fa"
import LogoutButton from "@/components/LogoutButton"

export default function DashboardHome() {
  return (
    <div className="h-dvh bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-white">
      <nav className="sticky top-0 z-30 w-full bg-gradient-to-r from-[#232526] to-[#0f2027] backdrop-blur shadow flex items-center justify-between px-4 md:px-10 py-4 mb-10 border-b border-[#2c5364]">
        <div className=" hidden sm:items-center sm:flex gap-3">
          <FaTachometerAlt className="text-[#00c6ff]text-xl md:text-2xl" />
          <span className="font-extrabold text-xl md:text-2xl tracking-tight text-white drop-shadow">Admin Dashboard</span>
        </div>
        <div className="flex max-sm:w-full justify-between items-center gap-8">
          <Link href="/" className="flex items-center gap-2 text-[#00c6ff] hover:text-[#fff] transition"><FaTachometerAlt /> Home</Link>
          <Link href="/dashboard" className="flex items-center gap-2 text-[#00c6ff] hover:text-[#fff] transition"><FaTachometerAlt /> Dashboard</Link>
          <LogoutButton />
        </div>
      </nav>
      <main className="w-full max-w-full md:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 px-2 md:px-6 mt-10 md:mt-20">
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight flex items-center gap-3 text-[#00c6ff] drop-shadow mb-8 col-span-1 md:col-span-2 lg:col-span-3">
          <FaTachometerAlt className="text-[#00c6ff]" /> Dashboard Overview
        </h1>
        <Link href="/dashboard/contacts" className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col items-center border-2 border-[#00c6ff]/30 hover:scale-105 transition">
          <FaEnvelope className="text-3xl md:text-4xl mb-2 text-[#00c6ff]" />
          <span className="font-bold text-lg md:text-xl">Contacts</span>
        </Link>
        <Link href="/dashboard/quotations" className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col items-center border-2 border-[#00c6ff]/30 hover:scale-105 transition">
          <FaFileInvoice className="text-3xl md:text-4xl mb-2 text-[#00c6ff]" />
          <span className="font-bold text-lg md:text-xl">Quotations</span>
        </Link>
        <Link href="/dashboard/feedback" className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col items-center border-2 border-[#00c6ff]/30 hover:scale-105 transition">
          <FaCommentDots className="text-3xl md:text-4xl mb-2 text-[#00c6ff]" />
          <span className="font-bold text-lg md:text-xl">Feedback</span>
        </Link>
      </main>
    </div>
  )
}
