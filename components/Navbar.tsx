"use client";
import React, { useCallback, useRef, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { ChevronDown, Cpu } from "lucide-react";
import { servicesData } from "@/lib/utils";
import { usePathname } from 'next/navigation';
import { MobileMenu } from "./mobile-menu";

export default function SiteHeader() {
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeAllMenus = useCallback(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setMobileMenuOpen(prev => !prev);
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

  const isCurrentPage = useCallback((href: string) => {
    return pathname === href;
  }, [pathname]);

  const handleLinkClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    closeAllMenus();
    
    const href = (e.currentTarget as HTMLAnchorElement).href;
    if (href) {
      setTimeout(() => {
        window.location.href = href;
      }, 0);
    }
  }, [closeAllMenus]);

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

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full max-w-screen-xl flex-wrap justify-between mx-auto px-4">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link 
            href="/" 
            onClick={handleLinkClick}
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
            onClick={toggleMobileMenu}
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
                  className={`text-sm font-bold leading-6 text-gray-200 hover:text-green-500 hover:underline transition-all duration-500 underline-offset-4 decoration-2 flex items-center gap-1`}
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
                  onClick={handleLinkClick}
                  onKeyDown={handleKeyPress}
                  aria-current={isCurrentPage(item.href) ? 'page' : undefined}
                  className={`text-sm font-bold leading-6 transition-all duration-500 underline-offset-4 decoration-2 text-gray-200 hover:text-green-500 hover:underline`}
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
                      onClick={handleLinkClick}
                      onKeyDown={handleKeyPress}
                      className={`block px-4 py-2 text-sm transition-colors duration-200 text-gray-700 hover:bg-green-100`}
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

      <MobileMenu
        open={mobileMenuOpen}
        onClose={closeAllMenus}
        navigation={navigation}
        currentPath={pathname || ""}
      />
    </header>
  );
}