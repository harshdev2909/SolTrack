"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-white"
              >
                <path d="M12 2v8" />
                <path d="m4.93 10.93 1.41 1.41" />
                <path d="M2 18h2" />
                <path d="M20 18h2" />
                <path d="m19.07 10.93-1.41 1.41" />
                <path d="M22 22H2" />
                <path d="m8 22 4-10 4 10" />
              </svg>
            </div>
            <span className="text-xl font-bold">SolTrack</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="#sdk" className="text-sm font-medium hover:text-primary">
            SDK & APIs
          </Link>
          <Link href="#verification" className="text-sm font-medium hover:text-primary">
            Smart Contracts
          </Link>
          <Link href="#components" className="text-sm font-medium hover:text-primary">
            UI Components
          </Link>
          <Link href="#docs" className="text-sm font-medium hover:text-primary">
            Docs
          </Link>
          <Link href="#community" className="text-sm font-medium hover:text-primary">
            Community
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button className="hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 md:inline-flex">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "absolute left-0 right-0 z-40 border-b border-border/40 bg-background/95 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden",
          isOpen ? "top-16 opacity-100" : "-top-96 opacity-0",
        )}
      >
        <div className="container flex flex-col space-y-4 px-4 py-6">
          <Link href="/" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="#sdk" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
            SDK & APIs
          </Link>
          <Link
            href="#verification"
            className="text-sm font-medium hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            Smart Contracts
          </Link>
          <Link href="#components" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
            UI Components
          </Link>
          <Link href="#docs" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
            Docs
          </Link>
          <Link href="#community" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
            Community
          </Link>
          <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}
