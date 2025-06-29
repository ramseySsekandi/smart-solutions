"use client";
import { FaSignOutAlt } from "react-icons/fa";
import { logoutUser } from "@/app/actions/logout";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const result = await logoutUser();
      if (result.success) {
        router.push(result.redirect);
      }
    } catch (error) {
      console.error("Logout failed:", error);
      // Fallback to direct navigation
      router.push("/login?loggedOut=1");
    }
  };

  return (
    <button 
      onClick={handleLogout} 
      className="flex items-center gap-2 text-red-400 hover:text-red-200 transition"
    >
      <FaSignOutAlt /> Logout
    </button>
  );
} 