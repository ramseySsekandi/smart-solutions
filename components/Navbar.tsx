// components/SiteHeader.tsx
"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDown, Cpu } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { servicesData } from "@/lib/utils";

type NavItem = {
  name: string;
  href?: string;
  children?: { name: string; href: string }[];
};

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    children: servicesData.map((s) => ({ name: s.title, href: `/services/${s.id}` })),
  },
  { name: "Our Location", href: "/location" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Feedback", href: "/feedback" },
  { name: "Inquiries & Quotation", href: "/inquiries" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const desktopRef = useRef<HTMLDivElement>(null);

  const closeAll = useCallback(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (desktopRef.current && !desktopRef.current.contains(e.target as Node)) {
        closeAll();
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [closeAll]);

  const toggleDropdown = useCallback((name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdown((prev) => (prev === name ? null : name));
  }, []);

  const handleNav = useCallback(
    (href?: string) => {
      if (!href) return;
      closeAll();
      // slight delay so state updates before navigation
      setTimeout(() => window.location.assign(href), 10);
    },
    [closeAll]
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/50 backdrop-blur">
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between p-6">
        {/* Logo */}
        <Link href="/" onClick={() => handleNav("/")} className="flex items-center gap-2">
          <Cpu className="text-green-500 bg-green-900/30 p-2 rounded-lg" size={48} />
          <h1 className="text-2xl font-bold text-green-300">Smart Solutions</h1>
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={(e) => {
            e.stopPropagation();
            setMobileOpen((v) => !v);
          }}
        >
          <Bars3Icon className="h-8 w-8 text-gray-700" />
        </button>

        {/* Desktop nav */}
        <div ref={desktopRef} className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.children ? (
                <button
                  onClick={(e) => toggleDropdown(item.name, e)}
                  aria-expanded={openDropdown === item.name}
                  className="flex items-center gap-1 font-semibold text-gray-800 hover:text-green-500"
                >
                  {item.name}
                  <ChevronDown
                    className={`transition-transform ${
                      openDropdown === item.name ? "rotate-180" : ""
                    }`}
                    size={16}
                  />
                </button>
              ) : (
                <button
                  onClick={() => handleNav(item.href)}
                  className={`font-semibold hover:text-green-500 ${
                    pathname === item.href ? "underline" : ""
                  }`}
                >
                  {item.name}
                </button>
              )}

              {item.children && openDropdown === item.name && (
                <div className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg">
                  {item.children.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => handleNav(c.href)}
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-green-50"
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileOpen} onClose={closeAll} className="relative z-50 lg:hidden">
        <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
        <div className="fixed inset-0 flex justify-center items-start mt-24">
          <Dialog.Panel className="w-11/12 max-w-sm rounded-lg bg-white p-6 shadow-lg">
            {navigation.map((item) => (
              <div key={item.name} className="mb-4">
                {item.children ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenDropdown((prev) => (prev === item.name ? null : item.name));
                      }}
                      className="flex w-full justify-between font-semibold"
                    >
                      {item.name}
                      <ChevronDown
                        className={`transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                        size={16}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="mt-2 space-y-2 pl-4">
                        {item.children!.map((c) => (
                          <button
                            key={c.name}
                            onClick={() => handleNav(c.href)}
                            className="block w-full text-left"
                          >
                            {c.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleNav(item.href)}
                    className="w-full text-left font-semibold"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  );
}
