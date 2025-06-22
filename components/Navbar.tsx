// components/SiteHeader.tsx
"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
    children: servicesData.map((s) => ({
      name: s.title,
      href: `/services/${s.id}`,
    })),
  },
  { name: "Our Location", href: "/location" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Feedback", href: "/feedback" },
  { name: "Inquiries & Quotation", href: "/inquiries" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close handlers
  const closeDropdown = useCallback(() => setOpenDropdown(null), []);
  const closeMobile   = useCallback(() => setMobileOpen(false), []);
  const closeAll      = useCallback(() => {
    closeDropdown();
    closeMobile();
  }, [closeDropdown, closeMobile]);

  // navigation helper
  const go = useCallback(
    (href?: string) => {
      if (!href) return;
      closeAll();
      router.push(href);
    },
    [closeAll, router]
  );

  // Helper for active link
  const isActive = (href: string) => pathname === href;

  // Desktop: close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="z-[100] relative bg-white border-b border-green-500 dark:bg-gray-900 dark:border-green-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="flex items-center space-x-1 rtl:space-x-reverse">
          <img src="/logo.png" className="h-12 dark:invert" alt="Logo" />
        </Link>
        {/* Desktop nav: inline with logo on large screens */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <ul className="flex flex-row font-medium md:p-0 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-green-700">
            <li>
              <Link 
                href="/" 
                className={`block py-2 px-3 relative transition-colors duration-200
                  ${isActive("/") ? "text-green-600" : "text-gray-900 dark:text-white"}
                  after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:rounded-full
                  after:bg-green-600 after:transition-all after:duration-300
                  ${isActive("/") ? "after:scale-x-100 after:opacity-100" : "after:scale-x-0 after:opacity-0"}
                  hover:text-green-700 dark:hover:text-green-400
                `}
                aria-current={isActive("/") ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
                className={`flex items-center justify-between w-full py-2 px-3 relative transition-colors duration-200
                  ${openDropdown === "services" ? "text-green-600" : "text-gray-900 dark:text-white"}
                  after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:rounded-full
                  after:bg-green-600 after:transition-all after:duration-300
                  ${openDropdown === "services" ? "after:scale-x-100 after:opacity-100" : "after:scale-x-0 after:opacity-0"}
                  hover:text-green-700 dark:hover:text-green-400
                `}
                aria-expanded={openDropdown === "services"}
              >
                Services
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              <div className={`${openDropdown === "services" ? "block" : "hidden"} absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-56 dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {servicesData.map((service) => (
                    <li key={service.id}>
                      <Link 
                        href={`/services/${service.id}`} 
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {/* Other nav links */}
            { [
              { href: "/location", label: "Our Location" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact Us" },
              { href: "/feedback", label: "Feedback" },
              { href: "/inquiries", label: "Inquiries & Quotation" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-2 px-3 relative transition-colors duration-200
                    ${isActive(item.href) ? "text-green-600" : "text-gray-900 dark:text-white"}
                    after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:rounded-full
                    after:bg-green-600 after:transition-all after:duration-300
                    ${isActive(item.href) ? "after:scale-x-100 after:opacity-100" : "after:scale-x-0 after:opacity-0"}
                    hover:text-green-700 dark:hover:text-green-400
                  `}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div> {/* End desktop nav */}
        {/* Mobile menu button */}
        <div className="flex items-center md:order-2 space-x-3">
          {/* <ModeToggle /> */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-green-600"
            aria-controls="navbar-multi-level"
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu slides down from navbar, only on small screens */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden w-full bg-white dark:bg-gray-900 shadow-lg z-[101]`}> 
        <ul className="flex flex-col font-medium p-4 border-t border-gray-100 rounded-b-lg bg-gray-50 dark:bg-gray-800 dark:border-green-700">
          <li>
            <Link 
              href="/" 
              className={`block py-2 px-3 rounded-sm ${isActive("/") ? "bg-green-700 text-white dark:bg-green-600" : "text-gray-900 dark:text-white"}`}
              aria-current={isActive("/") ? "page" : undefined}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
              className={`flex items-center justify-between w-full py-2 px-3 rounded-sm ${openDropdown === "services" || pathname.startsWith("/services") ? "bg-green-700 text-white dark:bg-green-600" : "text-gray-900 dark:text-white"}`}
              aria-expanded={openDropdown === "services"}
            >
              Services
              <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <div className={`${openDropdown === "services" ? "block" : "hidden"} w-full bg-white dark:bg-gray-700 shadow-lg z-[102]`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                {servicesData.map((service) => (
                  <li key={service.id}>
                    <Link 
                      href={`/services/${service.id}`} 
                      className={`block px-4 py-2 rounded-sm ${pathname === `/services/${service.id}` ? "bg-green-700 text-white dark:bg-green-600" : "text-gray-900 dark:text-white"} hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          { [
              { href: "/location", label: "Our Location" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact Us" },
              { href: "/feedback", label: "Feedback" },
              { href: "/inquiries", label: "Inquiries & Quotation" },
            ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block py-2 px-3 rounded-sm ${isActive(item.href) ? "bg-green-700 text-white dark:bg-green-600" : "text-gray-900 dark:text-white"}`}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
