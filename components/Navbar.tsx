"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const navigation = [
  { name: "Home", href: "/vendor" },
  {
    name: "About Us",
    href: "#",
    children: [
      { name: "Our Team", href: "/about/team" },
      { name: "Our Mission", href: "/about/mission" },
    ],
  },
  {
    name: "Our Solutions",
    href: "#",
    children: [
      { name: "Solution 1", href: "/solutions/1" },
      { name: "Solution 2", href: "/solutions/2" },
    ],
  },
  { name: "Our Experience", href: "/experience" },
  { name: "Market Experience", href: "/market-experience" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Insights", href: "/insights" },
  { name: "Careers", href: "/careers" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="hidden lg:flex lg:gap-x-7 relative">
      {navigation.map((item) => (
        <div key={item.name} className="relative">
          {item.children ? (
            <button
              onClick={() => toggleDropdown(item.name)}
              className="text-sm font-bold leading-6 text-gray-900 lg:text-white hover:text-blue-400 hover:underline transition-all duration-500 underline-offset-4 decoration-2 flex items-center gap-1"
            >
              {item.name}
              <ChevronDown size={16} />
            </button>
          ) : (
            <Link
              href={item.href}
              className="text-sm font-bold leading-6 text-gray-900 lg:text-white hover:text-blue-400 hover:underline transition-all duration-500 underline-offset-4 decoration-2"
            >
              {item.name}
            </Link>
          )}
          {item.children && openDropdown === item.name && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
              {item.children.map((child) => (
                <Link
                  key={child.name}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {child.name}
                </Link>
                
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
