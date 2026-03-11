"use client"

import { useState } from "react"
import SidebarSlider from "@/components/SidebarSlider"
import { GiHamburgerMenu } from "react-icons/gi"

export default function GlobalNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      {/* top bar with brand and menu button */}
      <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-3 bg-neutral-900/80 backdrop-blur">
        <div className="flex items-center space-x-2">
          <button
            className="p-2 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open navigation menu"
          >
            <GiHamburgerMenu size={24} />
          </button>
          <span className="text-white font-semibold text-lg">Menno Coolen</span>
        </div>
      </div>

      {/* SidebarSlider component */}
      <SidebarSlider isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <nav className="flex flex-col space-y-4 text-white">
          <a href="/home" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/project1" className="hover:underline">Project</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/login" className="hover:underline">Login</a>
        </nav>
      </SidebarSlider>
    </>
  )
}
