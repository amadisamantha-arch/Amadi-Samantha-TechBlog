import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-white dark:bg-gray-950 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            T
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            TechSphere
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-300">
          <a href="#" className="hover:text-indigo-600 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors">
            Articles
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors">
            Categories
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors">
            About
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-xl"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl text-gray-700 dark:text-gray-300"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t dark:border-gray-800">
          <div className="flex flex-col px-6 py-6 gap-5 text-lg text-gray-700 dark:text-gray-300">
            <a href="#" className="hover:text-indigo-600">
              Home
            </a>
            <a href="#" className="hover:text-indigo-600">
              Articles
            </a>
            <a href="#" className="hover:text-indigo-600">
              Categories
            </a>
            <a href="#" className="hover:text-indigo-600">
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
