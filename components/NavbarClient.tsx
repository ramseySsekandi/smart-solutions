"use client"
import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logoutUser } from "@/app/actions/logout";

// Types for navigation
interface NavItem {
  name: string;
  href?: string;
  children?: { name: string; href: string }[];
}

interface NavbarClientProps {
  navigation: NavItem[];
  servicesData: { id: string; title: string }[];
}

export default function NavbarClient({ navigation, servicesData }: NavbarClientProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Desktop dropdown close handler
  const closeDesktopDropdown = useCallback(() => setDesktopDropdown(null), []);
  // Mobile dropdown close handler
  const closeMobileDropdown = useCallback(() => setMobileDropdown(null), []);
  const closeMobile   = useCallback(() => setMobileOpen(false), []);
  const closeAll      = useCallback(() => {
    closeDesktopDropdown();
    closeMobileDropdown();
    closeMobile();
  }, [closeDesktopDropdown, closeMobileDropdown, closeMobile]);

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
        setDesktopDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper for checking auth (simple: check for session cookie)
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (typeof document !== "undefined") {
      setIsAuth(document.cookie.includes("session="));
    }
  }, [pathname]);

  const handleLogout = async () => {
    await logoutUser();
    window.location.href = "/login?loggedOut=1";
  };

  return (
    <nav className="z-[100] relative bg-white border-b border-green-500 dark:bg-gray-900 dark:border-green-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="flex items-center space-x-1 rtl:space-x-reverse">
          <img src="/logo.png" className="h-12 dark:invert" alt="Logo" />
        </Link>
        {/* Desktop nav: inline with logo on large screens */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <ul className="flex flex-row font-medium md:p-0 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-green-700">
            {navigation.map((item) =>
              item.children ? (
                <li className="relative" key={item.name}>
                  <button
                    type="button"
                    onClick={() => setDesktopDropdown(desktopDropdown === item.name ? null : item.name)}
                    className={`flex items-center justify-between w-full py-2 px-3 relative transition-colors duration-200
                      ${desktopDropdown === item.name ? "text-green-600" : "text-gray-900 dark:text-white"}
                      after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:rounded-full
                      after:bg-green-600 after:transition-all after:duration-300
                      ${desktopDropdown === item.name ? "after:scale-x-100 after:opacity-100" : "after:scale-x-0 after:opacity-0"}
                      hover:text-green-700 dark:hover:text-green-400
                    `}
                    aria-expanded={desktopDropdown === item.name}
                  >
                    {item.name}
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>
                  <div
                    ref={dropdownRef}
                    className={`${desktopDropdown === item.name ? "block" : "hidden"} absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-56 dark:bg-gray-700 dark:divide-gray-600`}
                  >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link 
                            href={child.href}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => setDesktopDropdown(null)}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link 
                    href={item.href!}
                    className={`block py-2 px-3 relative transition-colors duration-200
                      ${isActive(item.href!) ? "text-green-600" : "text-gray-900 dark:text-white"}
                      after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:rounded-full
                      after:bg-green-600 after:transition-all after:duration-300
                      ${isActive(item.href!) ? "after:scale-x-100 after:opacity-100" : "after:scale-x-0 after:opacity-0"}
                      hover:text-green-700 dark:hover:text-green-400
                    `}
                    aria-current={isActive(item.href!) ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
            {isAuth && (
              <li>
                <button onClick={handleLogout} className="ml-4 px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition-colors">Logout</button>
              </li>
            )}
          </ul>
        </div> {/* End desktop nav */}
        {/* Mobile menu button */}
        <div className="flex items-center md:order-2 space-x-3">
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
          {isAuth && (
            <button onClick={handleLogout} className="ml-2 px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition-colors">Logout</button>
          )}
        </div>
      </div>
      {/* Mobile menu slides down from navbar, only on small screens */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden w-full bg-white dark:bg-gray-900 shadow-lg z-[101]'`}> 
        <ul className="flex flex-col font-medium p-4 border-t border-gray-100 rounded-b-lg bg-gray-50 dark:bg-gray-800 dark:border-green-700">
          {navigation.map((item) =>
            item.children ? (
              <li className="relative" key={item.name}>
                <button
                  type="button"
                  onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
                  className={`flex items-center justify-between w-full py-2 px-3 rounded-sm ${mobileDropdown === item.name || pathname.startsWith("/services") ? "bg-green-700 text-white dark:bg-green-600" : "text-gray-900 dark:text-white"}`}
                  aria-expanded={mobileDropdown === item.name}
                >
                  {item.name}
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button>
                <div
                  className={`${mobileDropdown === item.name ? "block" : "hidden"} w-full bg-white dark:bg-gray-700 shadow-lg z-[102]`}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link 
                          href={child.href}
                          className={`block px-4 py-2 rounded-sm ${pathname === child.href ? "bg-green-700 text-white dark:bg-green-600" : "text-gray-900 dark:text-white"} hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                          onClick={() => setTimeout(() => { setMobileOpen(false); setMobileDropdown(null); }, 50)}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href!}
                  className={`block py-2 px-3 rounded-sm ${isActive(item.href!) ? "bg-green-700 text-white dark:bg-green-600" : "text-gray-900 dark:text-white"}`}
                  aria-current={isActive(item.href!) ? "page" : undefined}
                  onClick={() => setTimeout(() => { setMobileOpen(false); setMobileDropdown(null); }, 50)}
                >
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
