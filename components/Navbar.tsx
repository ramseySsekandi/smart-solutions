"use client";
import React, { useCallback, useRef, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ChevronDown, Cpu } from "lucide-react";
import { servicesData } from "@/lib/utils";
import { usePathname } from 'next/navigation';
import { useClickOutside } from "@/lib/hooks/useClickOutside";

export default function SiteHeader() {
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      children: servicesData.map(service => ({
        name: service.title,
        href: `/services/${service.id}`,
      })),
    },
    { name: "Our Location", href: "/location" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Feedback", href: "/feedback" },
    { name: "Inquiries & Quotation", href: "/inquiries" },
  ];

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeAllMenus = useCallback(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, []);

  const toggleDropdown = useCallback((name: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setOpenDropdown(prevState => prevState === name ? null : name);
  }, []);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeAllMenus();
    }
  }, [closeAllMenus]);

  useClickOutside(dropdownRef, closeAllMenus);

  const isCurrentPage = useCallback((href: string) => {
    return pathname === href;
  }, [pathname]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full max-w-screen-xl flex-wrap justify-between mx-auto px-4">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link 
            href="/" 
            onClick={closeAllMenus}
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Smart Solutions</span>
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
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">
              {mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            </span>
            <Bars3Icon aria-hidden="true" className="h-8 w-9 text-gray-300" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.children ? (
                <button
                  onClick={(e) => toggleDropdown(item.name, e)}
                  onKeyDown={handleKeyPress}
                  aria-expanded={openDropdown === item.name}
                  aria-controls={`dropdown-${item.name}`}
                  className={`text-sm font-bold leading-6 text-gray-200 hover:text-green-500 hover:underline transition-all duration-500 underline-offset-4 decoration-2 flex items-center gap-1 ${
                    openDropdown === item.name ? 'text-green-500' : ''
                  }`}
                >
                  {item.name}
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${
                      openDropdown === item.name ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  onClick={closeAllMenus}
                  onKeyDown={handleKeyPress}
                  aria-current={isCurrentPage(item.href) ? 'page' : undefined}
                  className={`text-sm font-bold leading-6 transition-all duration-500 underline-offset-4 decoration-2 ${
                    isCurrentPage(item.href) 
                      ? 'text-green-500 underline' 
                      : 'text-gray-200 hover:text-green-500 hover:underline'
                  }`}
                >
                  {item.name}
                </Link>
              )}
              {item.children && openDropdown === item.name && (
                <div 
                  id={`dropdown-${item.name}`}
                  ref={dropdownRef}
                  className="absolute left-0 mt-2 w-48 bg-gray-300 shadow-lg rounded-md z-50 overflow-hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby={`dropdown-button-${item.name}`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={closeAllMenus}
                      onKeyDown={handleKeyPress}
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        isCurrentPage(child.href)
                          ? 'bg-green-100 text-green-700'
                          : 'text-gray-700 hover:bg-green-100'
                      }`}
                      role="menuitem"
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
        as="div"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden relative"
      >
        <div className="fixed inset-0 bg-black/20 z-40" aria-hidden="true" />
        <DialogPanel 
          className="fixed inset-x-0 top-[75px] z-50 w-11/12 mx-auto bg-white shadow-lg rounded-lg sm:ring-1 sm:ring-gray-900/10 min-h-fit max-h-[calc(100vh-100px)] overflow-y-auto"
          id="mobile-menu"
        >
          <div className="p-6">
            <div className="divide-y divide-gray-500/10">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.children ? (
                      <button
                        onClick={(e) => toggleDropdown(item.name, e)}
                        onKeyDown={handleKeyPress}
                        aria-expanded={openDropdown === item.name}
                        aria-controls={`mobile-dropdown-${item.name}`}
                        className={`w-full text-left text-sm font-bold leading-6 transition-all duration-500 underline-offset-4 decoration-2 flex items-center justify-between ${
                          openDropdown === item.name 
                            ? 'text-green-500' 
                            : 'text-gray-900 hover:text-green-500 hover:underline'
                        }`}
                      >
                        {item.name}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeAllMenus}
                        onKeyDown={handleKeyPress}
                        aria-current={isCurrentPage(item.href) ? 'page' : undefined}
                        className={`block w-full text-sm font-bold leading-6 transition-all duration-500 underline-offset-4 decoration-2 ${
                          isCurrentPage(item.href)
                            ? 'text-green-500 underline'
                            : 'text-gray-900 hover:text-green-600 hover:underline'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                    {item.children && openDropdown === item.name && (
                      <div
                        id={`mobile-dropdown-${item.name}`}
                        className="mt-2 ml-4 space-y-2 border-l-2 border-gray-200 pl-4"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby={`mobile-dropdown-button-${item.name}`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => {
                              closeAllMenus();
                            }}
                            onKeyDown={handleKeyPress}
                            className={`block text-sm transition-colors duration-200 py-2 ${
                              isCurrentPage(child.href)
                                ? 'text-green-500'
                                : 'text-gray-700 hover:text-green-500'
                            }`}
                            role="menuitem"
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