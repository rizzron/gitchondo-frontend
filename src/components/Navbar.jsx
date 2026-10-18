
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" },
    { name: "Our Story", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="relative z-50 bg-[#FAF7F2]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-[#382D27]"
          onClick={() => setMenuOpen(false)}
        >
          Git<span className="text-[#A66D4F]">chondo.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#382D27] transition hover:text-[#A66D4F]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Order button */}
        <Link
          href="/products"
          className="hidden rounded-full bg-[#A66D4F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8D573D] md:inline-flex"
        >
          Order Now
        </Link>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#382D27] transition hover:bg-[#EFE6DC] md:hidden"
        >
          {menuOpen ? (
            /* Close icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-[#E8DED3] bg-[#FAF7F2] px-6 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 font-medium text-[#382D27] transition hover:bg-[#EFE6DC] hover:text-[#A66D4F]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
