const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <h2 className="text-2xl font-bold text-white">TechSphere</h2>
            </div>
            <p className="text-sm leading-relaxed">
              A modern tech blog by Amadi Samantha.
              <br />
              Sharing insights on AI, React, and the future of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5">Quick Links</h3>
            <div className="space-y-3 text-sm">
              <p>Home</p>
              <p>Latest Articles</p>
              <p>Categories</p>
              <p>About Me</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5">Connect With Me</h3>
            <div className="space-y-3 text-sm">
              <p>LinkedIn</p>
              <p>Twitter / X</p>
              <p>Instagram</p>
              <p>Email: samantha.amadi@email.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs">
          © 2026 Amadi Samantha • TechSphere Blog • Built with React
        </div>
      </div>
    </footer>
  );
};

export default Footer;
