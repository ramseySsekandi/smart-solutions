"use client";
import { useState } from "react";
import { respondToContact, respondToQuotation, respondToFeedback } from "@/app/actions/dashboard";

export default function RespondForm({ id, type }: { id: string; type: "contact" | "quotation" | "feedback" }) {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const handleRespond = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (type === "contact") await respondToContact(id, response);
    if (type === "quotation") await respondToQuotation(id, response);
    if (type === "feedback") await respondToFeedback(id, response);
    setLoading(false);
    setResponse("");
    // Optionally, refresh the page or show a toast
  };
  return (
    <form onSubmit={handleRespond} className="flex gap-2 mt-2">
      <input
        className="border rounded px-2 py-1 text-xs flex-1"
        placeholder="Type your response..."
        value={response}
        onChange={e => setResponse(e.target.value)}
        disabled={loading}
      />
      <button type="submit" className="bg-blue-600 text-white px-2 py-1 rounded text-xs" disabled={loading || !response}>
        {loading ? "Sending..." : "Respond"}
      </button>
    </form>
  );
}
