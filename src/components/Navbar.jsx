import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/journey", label: "Journey" },
  { to: "/#tips", label: "Tips" },
  { to: "/#about", label: "About" },
  { to: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-ink sticky top-0 z-50 border-b border-ink-border">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gold rounded-md flex items-center justify-center text-ink font-display font-bold text-xl">
            T
          </div>
          <h1 className="font-display text-2xl font-semibold text-parchment">
            TechSphere{" "}
            <span className="text-parchment-dim text-lg font-medium">
              by Samantha
            </span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-parchment-dim font-medium">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `hover:text-gold transition-colors ${
                  isActive ? "text-gold" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-parchment-dim"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-ink border-t border-ink-border">
          <div className="flex flex-col px-6 py-6 gap-5 text-lg text-parchment-dim">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="hover:text-gold"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
