"use client";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary text-base-200 shadow-lg"
          : "bg-transparent text-white backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight">
            PropertyHub
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { name: "Home", href: "/" },
              { name: "All Properties", href: "/properties" },
              { name: "Add Properties", href: "/add-property" },
              { name: "My Properties", href: "/my-properties" },
              { name: "My Ratings", href: "/my-ratings" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors duration-200 hover:text-secondary ${
                  isScrolled ? "text-base-200" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="/login"
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                isScrolled
                  ? "bg-base-200 text-primary hover:bg-white"
                  : "bg-secondary hover:bg-white hover:text-primary"
              }`}
            >
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled ? "hover:bg-base-200/20" : "hover:bg-white/10"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/10 py-4">
            <div className="flex flex-col gap-2">
              {[
                { name: "Home", href: "/" },
                { name: "All Properties", href: "/properties" },
                { name: "Add Properties", href: "/add-property" },
                { name: "My Properties", href: "/my-properties" },
                { name: "My Ratings", href: "/my-ratings" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:bg-secondary/20 px-4 py-3 rounded-lg transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/login"
                className="bg-secondary hover:bg-white hover:text-primary px-4 py-3 rounded-lg font-medium transition-colors duration-200 mt-2 text-center"
              >
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
