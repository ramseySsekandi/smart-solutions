import { getAllContacts, getAllQuotations, getAllFeedback } from "@/app/actions/dashboard"
import RespondForm from "@/components/RespondForm"
import Link from "next/link"
import { FaEnvelope, FaFileInvoice, FaCommentDots, FaCheckCircle, FaRegCircle, FaSignOutAlt, FaHome, FaTachometerAlt } from "react-icons/fa"
import { logoutUser } from "@/app/actions/logout"

export default async function Page() {
  const contacts = await getAllContacts()
  const quotations = await getAllQuotations()
  const feedbacks = await getAllFeedback()

  const newMessages = contacts.filter(c => !c.responded).length + quotations.filter(q => !q.responded).length + feedbacks.filter(f => !f.responded).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-white flex flex-col items-stretch">
      {/* Sticky Top Navigation Bar */}
      <nav className="sticky top-0 z-30 w-full bg-gradient-to-r from-[#232526] to-[#0f2027] backdrop-blur shadow flex items-center justify-between px-10 py-4 mb-10 border-b border-[#2c5364]">
        <div className="flex items-center gap-3">
          <FaTachometerAlt className="text-[#00c6ff] text-2xl" />
          <span className="font-extrabold text-2xl tracking-tight text-white drop-shadow">Admin Dashboard</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 text-[#00c6ff] hover:text-[#fff] transition"><FaHome /> Home</Link>
          <Link href="/dashboard" className="flex items-center gap-2 text-[#00c6ff] hover:text-[#fff] transition"><FaTachometerAlt /> Dashboard</Link>
          <form action={logoutUser} method="post">
            <button type="submit" className="flex items-center gap-2 text-red-400 hover:text-red-200 transition"><FaSignOutAlt /> Logout</button>
          </form>
        </div>
      </nav>
      <header className="w-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between mb-10 gap-6 px-6">
        <h1 className="text-4xl font-extrabold tracking-tight flex items-center gap-3 text-[#00c6ff] drop-shadow">
          <FaTachometerAlt className="text-[#00c6ff]" /> Dashboard
        </h1>
        <span className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white rounded-full text-lg shadow-2xl font-bold animate-pulse border-2 border-white">
          <FaEnvelope className="text-2xl" /> {newMessages} New Messages
        </span>
      </header>
      <main className="w-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-6">
        {/* Contact Submissions */}
        <section className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-3xl shadow-2xl p-8 flex flex-col border-2 border-[#00c6ff]/30">
          <h2 className="font-bold text-2xl mb-6 text-[#00c6ff] flex items-center gap-3"><FaEnvelope /> Contact Submissions</h2>
          <ul className="space-y-6 overflow-y-auto max-h-[70vh] pr-2">
            {contacts.length === 0 && <li className="text-gray-400 text-lg">No contacts yet.</li>}
            {contacts.map(contact => (
              <li key={contact.id} className="border-b border-[#00c6ff]/20 pb-3 last:border-b-0">
                <div className="flex items-center gap-2 font-bold text-white">
                  <span>{contact.name}</span>
                  <span className="text-xs text-gray-300">({contact.email})</span>
                  {contact.responded ? <FaCheckCircle className="text-green-400 ml-1" title="Responded" /> : <FaRegCircle className="text-yellow-400 ml-1" title="Awaiting response" />}
                </div>
                <div className="text-base text-gray-200 mb-2">{contact.message}</div>
                {contact.responded ? (
                  <div className="text-green-400 text-xs">Responded: {contact.response}</div>
                ) : (
                  <RespondForm id={contact.id} type="contact" />
                )}
              </li>
            ))}
          </ul>
        </section>
        {/* Quotation Requests */}
        <section className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-3xl shadow-2xl p-8 flex flex-col border-2 border-[#00c6ff]/30">
          <h2 className="font-bold text-2xl mb-6 text-[#00c6ff] flex items-center gap-3"><FaFileInvoice /> Quotation Requests</h2>
          <ul className="space-y-6 overflow-y-auto max-h-[70vh] pr-2">
            {quotations.length === 0 && <li className="text-gray-400 text-lg">No quotations yet.</li>}
            {quotations.map(q => (
              <li key={q.id} className="border-b border-[#00c6ff]/20 pb-3 last:border-b-0">
                <div className="flex items-center gap-2 font-bold text-white">
                  <span>{q.name}</span>
                  <span className="text-xs text-gray-300">({q.email})</span>
                  {q.phone && <span className="text-xs">- {q.phone}</span>}
                  {q.responded ? <FaCheckCircle className="text-green-400 ml-1" title="Responded" /> : <FaRegCircle className="text-yellow-400 ml-1" title="Awaiting response" />}
                </div>
                <div className="text-base text-gray-200 mb-2">{q.details}</div>
                {q.responded ? (
                  <div className="text-green-400 text-xs">Responded: {q.response}</div>
                ) : (
                  <RespondForm id={q.id} type="quotation" />
                )}
              </li>
            ))}
          </ul>
        </section>
        {/* Feedback */}
        <section className="bg-gradient-to-br from-[#232526] to-[#414345] rounded-3xl shadow-2xl p-8 flex flex-col border-2 border-[#00c6ff]/30">
          <h2 className="font-bold text-2xl mb-6 text-[#00c6ff] flex items-center gap-3"><FaCommentDots /> Feedback</h2>
          <ul className="space-y-6 overflow-y-auto max-h-[70vh] pr-2">
            {feedbacks.length === 0 && <li className="text-gray-400 text-lg">No feedback yet.</li>}
            {feedbacks.map(fb => (
              <li key={fb.id} className="border-b border-[#00c6ff]/20 pb-3 last:border-b-0">
                <div className="flex items-center gap-2 font-bold text-white">
                  <span>{fb.name}</span>
                  <span className="text-xs text-gray-300">({fb.email})</span>
                  {fb.responded ? <FaCheckCircle className="text-green-400 ml-1" title="Responded" /> : <FaRegCircle className="text-yellow-400 ml-1" title="Awaiting response" />}
                </div>
                <div className="text-base text-gray-200 mb-2">{fb.message}</div>
                {fb.responded ? (
                  <div className="text-green-400 text-xs">Responded: {fb.response}</div>
                ) : (
                  <RespondForm id={fb.id} type="feedback" />
                )}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
