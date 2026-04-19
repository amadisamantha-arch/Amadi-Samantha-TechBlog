import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <h1 className="text-2xl font-bold text-white">
            TechSphere{" "}
            <span className="text-indigo-400 text-lg font-medium">
              by Samantha
            </span>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-400">
          <a href="/" className="hover:text-indigo-400 transition-colors">
            Home
          </a>
          <a href="/" className="hover:text-indigo-400 transition-colors">
            My Journey
          </a>
          <a href="/" className="hover:text-indigo-400 transition-colors">
            Tips
          </a>
          <a href="/" className="hover:text-indigo-400 transition-colors">
            About Me
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-xl hover:bg-gray-800 transition-colors text-xl"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl text-gray-400"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="flex flex-col px-6 py-6 gap-5 text-lg text-gray-400">
            <a href="/" className="hover:text-indigo-400">
              Home
            </a>
            <a href="/" className="hover:text-indigo-400">
              My Journey
            </a>
            <a href="/" className="hover:text-indigo-400">
              Tips
            </a>
            <a href="/" className="hover:text-indigo-400">
              About Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
