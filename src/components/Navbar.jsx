"use client";
import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!");
    navigate("/auth/login");
  };
  console.log(user)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary text-base-200 shadow-lg"
          : "bg-primary text-white backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-tight">PropertyHub</div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { name: "Home", href: "/" },
              { name: "All Properties", href: "/properties" },
              { name: "Add Properties", href: "/properties/create" },
              { name: "My Properties", href: "/properties/my-properties" },
              { name: "My Ratings", href: "/my-ratings" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`transition-colors duration-200 hover:text-secondary ${
                  isScrolled ? "text-base-200" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {!user ? (
              <div className="flex gap-3">
                <Link
                  to="/auth/login"
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                    isScrolled
                      ? "bg-base-200 text-primary hover:bg-white"
                      : "bg-secondary hover:bg-white hover:text-primary"
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/auth/signup"
                  className={`px-5 py-2.5 rounded-lg font-medium border transition-all duration-200 ${
                    isScrolled
                      ? "border-base-200 text-base-200 hover:bg-base-200 hover:text-primary"
                      : "border-white text-white hover:bg-white hover:text-primary"
                  }`}
                >
                  Signup
                </Link>
              </div>
            ) : (
              <div className="relative">
                <img
                  src={
                    user.photoURL
                  }
                  referrerPolicy="no-referrer"
                  alt="User"
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-secondary"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />

                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-white text-gray-700 rounded-lg shadow-lg border border-gray-100 z-50">
                    <div className="p-4 border-b">
                      <p className="font-semibold">{user.displayName}</p>
                      <p className="text-sm text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-b-lg transition-colors"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            )}
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
                { name: "Add Properties", href: "/properties/create" },
                { name: "My Properties", href: "/properties/my-properties" },
                { name: "My Ratings", href: "/my-ratings" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="hover:bg-secondary/20 px-4 py-3 rounded-lg transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}

              {!user ? (
                <>
                  <Link
                    to="/auth/login"
                    className="bg-secondary hover:bg-white hover:text-primary px-4 py-3 rounded-lg font-medium transition-colors duration-200 mt-2 text-center"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/signup"
                    className="border border-secondary text-secondary hover:bg-secondary hover:text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 mt-2 text-center"
                  >
                    Signup
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 mt-2 text-center"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
