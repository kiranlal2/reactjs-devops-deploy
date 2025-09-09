import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaAlignRight } from "react-icons/fa";
import { useState } from "react";
import Logo from "/logo-red-white.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    // { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Category", path: "/category" },
    { label: "Stock", path: "/stock" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: <FaShoppingCart />, path: "/cart" },
  ];

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header>
      <div className="flex justify-between items-center relative py-4 px-6 bg-inherit text-white shadow-lg shadow-red-500/25">
        <NavLink to="/" className="text-2xl font-bold">
            <img src={Logo} alt="Logo" width={200} />
        </NavLink>

        {/* Desktop */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                    `hover:text-red-400 transition ${
                    isActive ? "text-red-500 font-bold" : ""
                    }`
                }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          <FaAlignRight />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute bg-[#121212] w-full text-white flex flex-col p-4 space-y-2 shadow-lg shadow-red-500/25" >
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              onClick={toggleMenu}
              className="hover:text-red-500"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
