const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <h2 className="text-2xl font-bold text-white">
                TechSphere{" "}
                <span className="text-indigo-400 text-lg font-medium">
                  by Samantha
                </span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed">
              A personal tech blog by Amadi Samantha.
              <br />
              Documenting my journey as a second year CS student — the
              struggles, wins, and everything in between.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Quick Links</h3>
            <div className="space-y-3 text-sm">
              <p className="hover:text-indigo-400 cursor-pointer transition-colors">
                Home
              </p>
              <p className="hover:text-indigo-400 cursor-pointer transition-colors">
                My Journey
              </p>
              <p className="hover:text-indigo-400 cursor-pointer transition-colors">
                Tips & Tutorials
              </p>
              <p className="hover:text-indigo-400 cursor-pointer transition-colors">
                About Me
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Connect With Me</h3>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:amadisamantha@gmail.com"
                className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
              >
                 amadisamantha@gmail.com
              </a>
              <a
                href="https://github.com/amadisamantha-arch"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
              >
                 github.com/amadisamantha-arch
              </a>
              <a
                href="https://www.linkedin.com/in/samantha-amadi-dev"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
              >
                 linkedin.com/in/samantha-amadi-dev
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs">
          © 2026 Amadi Samantha • TechSphere Blog • Built with React & Tailwind
          CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
