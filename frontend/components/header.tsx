"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-700">HealthCare Plus</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                pathname === item.href ? "text-blue-700" : "text-gray-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-blue-700" />
            <span className="text-sm font-medium">(123) 456-7890</span>
          </div>
          <Button asChild className="bg-blue-700 hover:bg-blue-800">
            <Link href="/appointment">Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-white p-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-medium p-2 ${pathname === item.href ? "text-blue-700" : "text-gray-600"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-2 p-2">
                <Phone className="h-4 w-4 text-blue-700" />
                <span className="text-sm font-medium">(123) 456-7890</span>
              </div>
              <Button asChild className="bg-blue-700 hover:bg-blue-800 w-full">
                <Link href="/appointment" onClick={() => setIsMenuOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
