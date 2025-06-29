import { getAllFeedback } from "@/app/actions/dashboard";
import RespondForm from "@/components/RespondForm";
import Link from "next/link";
import { FaCommentDots, FaTachometerAlt } from "react-icons/fa";
import LogoutButton from "@/components/LogoutButton";

export default async function FeedbackPage() {
  const feedbacks = await getAllFeedback();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-white">
      <nav className="sticky top-0 z-30 w-full bg-gradient-to-r from-[#232526] to-[#0f2027] backdrop-blur shadow flex items-center justify-between px-0 md:px-10 py-4 mb-10 border-b border-[#2c5364]">
        <div className="flex items-center gap-3 pl-2 md:pl-0">
          <FaTachometerAlt className="text-[#00c6ff] text-2xl" />
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white drop-shadow">Feedback</span>
        </div>
        <div className="flex items-center gap-4 md:gap-8 pr-2 md:pr-0">
          <Link href="/dashboard" className="flex items-center gap-2 text-[#00c6ff] hover:text-[#fff] transition"><FaTachometerAlt /> Dashboard</Link>
          <LogoutButton />
        </div>
      </nav>
      <main className="w-full md:max-w-5xl md:mx-auto px-0 md:px-6 mt-10">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight flex items-center gap-3 text-[#00c6ff] drop-shadow mb-8 pl-2 md:pl-0">
          <FaCommentDots className="text-[#00c6ff]" /> Feedback
        </h1>
        <ul className="space-y-4 md:space-y-6 overflow-y-auto max-h-[70vh] pr-0 md:pr-2 w-full">
          {feedbacks.length === 0 && <li className="text-gray-400 text-lg pl-2 md:pl-0">No feedback yet.</li>}
          {feedbacks.map(fb => (
            <li key={fb.id} className="w-full bg-[#232526] rounded-none md:rounded-xl shadow p-2 md:p-6 flex flex-col border border-[#00c6ff]/10">
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 font-bold text-white text-base md:text-lg">
                <span>{fb.name}</span>
                <span className="text-xs md:text-sm text-gray-300">({fb.email})</span>
                {fb.responded ? <span className="text-green-400 ml-0 md:ml-1">Responded</span> : <span className="text-yellow-400 ml-0 md:ml-1">Awaiting response</span>}
              </div>
              <div className="text-sm md:text-base text-gray-200 mb-2">{fb.message}</div>
              {fb.responded ? (
                <div className="text-green-400 text-xs md:text-sm">Responded: {fb.response}</div>
              ) : (
                <RespondForm id={fb.id} type="feedback" />
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
} 