"use client";
import React, { useEffect, useRef, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ChevronDown, Cpu } from "lucide-react";

export default function SiteHeader() {
  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      children: [
        { name: "Tech/IT Services", href: "/services" },
        { name: "Event Management", href: "/" },
        { name: "Property Management", href: "/services" },
        { name: "Charity Foundation", href: "/services" },
        { name: "Tours & Travel", href: "/services" },
        { name: "Real Estate", href: "/services" },
        { name: "Consultancy", href: "/services" },
        { name: "Transport & Logistics", href: "/services" },
        { name: "Publishing", href: "/services" },
        { name: "Media Comm & Entertainment", href: "/services" },
      ],
    },
    { name: "Our Location", href: "/location" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Feedback", href: "/feedback" },
    { name: "Inquiries & Quotation", href: "/inquiries" },
  ];

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleLinkClick = () => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
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
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Car Care Gate</span>
            {/* <img alt="" src="./logo.png" className="h-12 w-auto" /> */}
    <div className="flex items-center gap-2 lg:gap-4">
    <Cpu
        className="text-green-500 bg-green-900/30 p-2 rounded-lg" 
        size={48} 
      />
      <h1 className="text-xl lg:text-2xl font-bold text-green-300">
        Smart Solutions
      </h1>
    </div>
    
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-8 w-9 text-gray-300" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.children ? (
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="text-sm font-bold leading-6 text-gray-200 hover:text-green-500 hover:underline transition-all duration-500 underline-offset-4 decoration-2 flex items-center gap-1"
                >
                  {item.name}
                  <ChevronDown size={16} />
                </button>
              ) : (
                <Link
                  href={item.href}
                  onClick={handleLinkClick} // Close dropdown on link click
                  className="text-sm font-bold leading-6 text-gray-200 hover:text-green-500 hover:underline transition-all duration-500 underline-offset-4 decoration-2"
                >
                  {item.name}
                </Link>
              )}
              {item.children && openDropdown === item.name && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-300 shadow-lg rounded-md z-50"
                ref={mobileDropdownRef}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={handleLinkClick} // Close dropdown on link click
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden caret-lime-400 p-6"
      >
        <div className="fixed flex items-center z-50 inset-0 " />
        <DialogPanel className="fixed mx-auto inset-0 top-[75px] right-0 shadow-lg left-0 z-50 w-11/12 overflow-y-auto bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10 h-max">
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-5 py-6">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.children ? (
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="text-sm font-bold leading-6 text-gray-900 hover:text-green-500 hover:underline transition-all duration-500 underline-offset-4 decoration-2 flex items-center gap-1"
                      >
                        {item.name}
                        <ChevronDown size={16} />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={handleLinkClick} // Close mobile menu on link click
                        className="text-sm font-bold leading-6 text-gray-900 hover:text-green-600 hover:underline transition-all duration-500 underline-offset-4 decoration-2"
                      >
                        {item.name}
                      </Link>
                    )}
                    {item.children && openDropdown === item.name && (
                      <div
                        className="absolute left-0 mt-2 w-48 bg-gray-200 shadow-lg rounded-md z-50"
                        ref={mobileDropdownRef}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={handleLinkClick} // Close mobile menu on link click
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-green-300"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
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