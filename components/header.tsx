"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <div>
          <Link href="#" className="text-xl font-bold text-gray-900 hover:text-primary">
            Brener Silva Lima
          </Link>
        </div>

        <div
          className={`fixed top-[60px] left-0 right-0 bg-white p-4 transition-all duration-300 md:static md:block md:p-0 ${menuOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <li>
              <Link href="#home" className="text-gray-700 hover:text-primary" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-gray-700 hover:text-primary" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="text-gray-700 hover:text-primary" onClick={() => setMenuOpen(false)}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="#work" className="text-gray-700 hover:text-primary" onClick={() => setMenuOpen(false)}>
                Work
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-700 hover:text-primary" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-primary">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </header>
  )
}
