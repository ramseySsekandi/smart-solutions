"use client";
import { useState } from "react";
import { respondToContactWithEmail, respondToQuotationWithEmail, respondToFeedbackWithEmail } from "@/app/actions/respond";
import { useRouter } from "next/navigation";

export default function RespondForm({ id, type }: { id: string; type: "contact" | "quotation" | "feedback" }) {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleRespond = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (type === "contact") await respondToContactWithEmail(id, response);
    if (type === "quotation") await respondToQuotationWithEmail(id, response);
    if (type === "feedback") await respondToFeedbackWithEmail(id, response);
    setLoading(false);
    setResponse("");
    router.refresh();
    // Optionally, refresh the page or show a toast
  };
  return (
    <form onSubmit={handleRespond} className="flex gap-1 md:gap-2 mt-2 w-full">
      <input
        className="border-0 md:border rounded-none md:rounded px-0 md:px-2 py-1 text-xs flex-1 bg-[#1a1a1a] text-white focus:outline-none"
        placeholder="Type your response..."
        value={response}
        onChange={e => setResponse(e.target.value)}
        disabled={loading}
      />
      <button type="submit" className="bg-blue-600 text-white px-1 md:px-2 py-1 rounded-none md:rounded text-xs w-20 md:w-auto" disabled={loading || !response}>
        {loading ? "Sending..." : "Respond"}
      </button>
    </form>
  );
}
