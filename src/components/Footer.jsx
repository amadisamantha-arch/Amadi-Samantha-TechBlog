import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ink border-t border-ink-border text-parchment-dim py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-gold rounded-md flex items-center justify-center text-ink font-display font-bold text-xl">
                T
              </div>
              <h2 className="font-display text-2xl font-semibold text-parchment">
                TechSphere{" "}
                <span className="text-parchment-dim text-lg font-medium">
                  by Samantha
                </span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed">
              A personal tech blog by Amadi Samantha.
              <br />
              Documenting my journey as a third-year CS student — the
              struggles, wins, and everything in between.
            </p>
          </div>

          <div>
            <h3 className="text-parchment font-semibold mb-5">Quick Links</h3>
            <div className="space-y-3 text-sm">
              <Link to="/journey" className="block hover:text-gold transition-colors">
                Journey
              </Link>
              <a href="/#tips" className="block hover:text-gold transition-colors">
                Tips
              </a>
              <a href="/#about" className="block hover:text-gold transition-colors">
                About
              </a>
              <a href="/#contact" className="block hover:text-gold transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-parchment font-semibold mb-5">Connect With Me</h3>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:amadisamantha@gmail.com"
                className="block hover:text-gold transition-colors"
              >
                amadisamantha@gmail.com
              </a>
              <a
                href="https://github.com/amadisamantha-arch"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-gold transition-colors"
              >
                github.com/amadisamantha-arch
              </a>
              <a
                href="https://www.linkedin.com/in/samantha-amadi-dev"
                target="_blank"
                rel="noreferrer"
                className="block hover:text-gold transition-colors"
              >
                linkedin.com/in/samantha-amadi-dev
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ink-border mt-12 pt-8 text-center text-xs">
          © 2026 Amadi Samantha • TechSphere Blog
        </div>
      </div>
    </footer>
  );
};

export default Footer;
