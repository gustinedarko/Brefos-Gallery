import { useState } from "react";
import Logo from "../assets/images/img-white-logo.png";
import { useLocation } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar
  const handleToggle = () => setIsOpen(!isOpen);

  // Close sidebar when a link is clicked (common mobile UX)
  const handleLinkClick = () => setIsOpen(false);

  // Highlight active page
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between sticky top-0 w-full px-6 transition-all duration-300 shadow z-50 bg-[#263b27]">
      {/* Logo */}
      <div>
        <a
          className="nav-text font-bold text-slate-800 hover:text-[#4CAF50] transition-colors duration-200"
          href="/"
        >
          <div>
            <img
              src={Logo}
              alt="Brefo Logo"
              className="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
            />
          </div>
        </a>
      </div>

      {/* Hamburger (visible only on small screens) */}
      <div className="md:hidden">
        <button
          onClick={handleToggle}
          className="nav-text text-[#4CAF50] focus:outline-none transition-colors duration-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar / Nav links */}
      <div
        className={`text-white p-4 md:p-0 md:text-sm font-semibold fixed inset-y-0 left-0 w-[300px] flex flex-col items-start gap-8 bg-[#03090D] shadow-xl z-40 transition-transform duration-300 ease-in-out
        md:static md:flex-row md:w-auto md:max-w-none md:bg-transparent md:shadow-none md:z-auto md:gap-10 md:items-center ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >
        {/* Close button (only visible on mobile) */}
        <button
          onClick={handleToggle}
          className="absolute top-4 right-4 md:hidden focus:outline-none text-[#4CAF50]"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {[
          { href: "/", label: "Home" },
          { href: "/artist", label: "Artist" },
          { href: "/gallery-section", label: "Gallery" },
          { href: "/exhibition", label: "Exhibition" },
          { href: "/contact", label: "Contact" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={handleLinkClick}
            className={`nav-text transition-colors duration-200 ${location.pathname === item.href
                ? "text-[#4CAF50] font-bold underline"
                : "hover:text-[#4CAF50] hover:underline"
              }`}
          >
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}