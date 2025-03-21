 
"use client";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

 
export default function SiteHeader() {
  const navigation = [
  { name: "Technology", href: "/technology" },
  {
    name: "Consultancy",href: "/consultancy",
  },
  { name: "Real Estate", href: "/contact" },
  { name: "Event Management", href: "/experience" },
  { name: "Transport & Logistics", href: "/market-experience" },
  { name: "Media", href: "/sustainability" },
  { name: "Tours and Travel", href: "/insights" },
  { name: "Publishing", href: "/careers" },
  { name: "Foundation", href: "/faq" },
];

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
      
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full max-w-screen-xl flex-wrap justify-between mx-auto px-4">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          {/* <Logo href="/" labelShown={false} /> */}
            <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Car Care Gate</span>
            <img
              alt=""
              src="./logo.png"
              className="h-12 w-auto"
              
            />
            </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-8 w-9 text-gray-400" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-bold leading-6 text-gray-900 lg:text-white hover:text-blue-400
                hover:underline transition-all duration-500 underline-offset-4 decoration-2"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden caret-lime-400 p-6"
        ref={dropdownRef}
      >
        <div className="fixed flex items-center z-50 inset-0 " />
        <DialogPanel className="fixed mx-auto inset-0 top-[75px] right-0 shadow-lg left-0 z-50 w-11/12 overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* <Logo href="/" labelShown={false} /> */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-5 py-6">
              {navigation.map((item) => (
                      <div key={item.name} className="relative">
                      <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="font-bold leading-6 text-[#444444] lg:text-white hover:text-blue-400 hover:underline transition-all duration-500 underline-offset-4 decoration-2"
                        >
                          {item.name}
                        </Link>
                    </div>
          ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
 