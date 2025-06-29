import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full text-white">
      <div className="w-full max-w-7xl mx-auto md:px-6">
        {children}
      </div>
    </div>
  );
} 