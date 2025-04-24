"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { useRouter } from 'next/navigation'
import { Dialog } from "@headlessui/react"

type NavigationItem = {
  name: string
  href?: string
  children?: { name: string; href: string }[]
}

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  navigation: NavigationItem[]
  currentPath: string
}

export function MobileMenu({ open, onClose, navigation, currentPath }: MobileMenuProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (!open) {
      setOpenDropdown(null)
    }
  }, [open])

  const isCurrentPage = (href: string) => href === currentPath

  const handleLinkClick = (href: string) => {
    onClose()
    setOpenDropdown(null)
    
    // Navigate after menu closes
    setTimeout(() => {
      router.push(href)
    }, 10)
  }

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setOpenDropdown(openDropdown === name ? null : name)
  }

  if (!open) return null

  return (
    <div className="lg:hidden">
      <Dialog 
        open={open} 
        onClose={onClose}
        className="relative z-50"
        static
      >
        <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
        
        <div className="fixed inset-0 flex">
          <Dialog.Panel className="relative w-full">
            <div
              className="fixed inset-x-0 top-[75px] w-11/12 mx-auto bg-white shadow-lg rounded-lg sm:ring-1 sm:ring-gray-900/10 min-h-fit max-h-[calc(100vh-100px)] overflow-y-auto"
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
                            aria-expanded={openDropdown === item.name}
                            aria-controls={`mobile-dropdown-${item.name}`}
                            className="w-full text-left text-sm font-bold leading-6 flex items-center justify-between"
                          >
                            {item.name}
                            <ChevronDown
                              size={16}
                              className={`transition-transform duration-200 ${
                                openDropdown === item.name ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        ) : (
                          <button
                            onClick={() => handleLinkClick(item.href || "/")}
                            className="block w-full text-left text-sm font-bold leading-6"
                          >
                            {item.name}
                          </button>
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
                              <button
                                key={child.name}
                                onClick={() => handleLinkClick(child.href)}
                                className="block w-full text-left text-sm py-2"
                                role="menuitem"
                              >
                                {child.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}
