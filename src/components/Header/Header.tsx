import { useState } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-[80px] w-full">
      <div className="mx-auto max-w-[1240px] px-8 h-full flex">
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-end">
            <img src={logo} />
            <span className="italic"> &nbsp;imeWrite</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-gray-700 hover:text-black">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Contact
            </a>
          </nav>
          <Link
            to="/login"
            className="hidden md:block bg-stone-900 text-white px-6 py-2 rounded cursor-pointer hover:bg-stone-800 transition"
          >
            Get Started
          </Link>
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t py-4 space-y-2">
            <a href="#" className="block text-gray-700">
              Home
            </a>
            <a href="#" className="block text-gray-700">
              About
            </a>
            <a href="#" className="block text-gray-700">
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
