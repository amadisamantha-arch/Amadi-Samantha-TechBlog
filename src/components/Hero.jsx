import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-ink text-parchment py-24 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 1200 400"
      >
        <path
          d="M -50 350 C 200 350, 250 100, 500 150 C 750 200, 800 50, 1250 80"
          fill="none"
          stroke="#C9A227"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="inline-block text-parchment-dim text-sm font-medium px-5 py-2 rounded-full mb-6 border border-ink-border">
          Third-Year CS Student · AWS Student Builder Group Leader
        </div>

        <h1 className="font-display text-5xl md:text-6xl font-semibold leading-tight mb-6">
          Welcome to <span className="text-gold">TechSphere</span>
          <br /> by Samantha
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-parchment-dim">
          Documenting my tech journey — the struggles, the wins, the tips,
          and everything in between, so the next person isn't as clueless as
          I was.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/journey"
            className="bg-gold hover:bg-gold-soft text-ink font-semibold px-8 py-4 rounded-lg transition-all text-lg"
          >
            Read My Story
          </Link>
          <a
            href="#chapters"
            className="border border-ink-border hover:border-gold font-semibold px-8 py-4 rounded-lg transition-all text-lg text-parchment-dim hover:text-gold"
          >
            Browse Articles
          </a>
        </div>

        <div className="mt-12 text-sm text-parchment-dim/70">
          By Amadi Samantha · CS Student & Tech Enthusiast
        </div>
      </div>
    </div>
  );
};

export default Hero;
