import { Link } from "react-router-dom";
import { journeyEntries } from "../data/journey";

const JourneyPage = () => {
  return (
    <div className="min-h-screen bg-ink">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
          My Journey
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-parchment mb-6">
          From 100 Level to Now
        </h1>
        <p className="text-lg text-parchment-dim max-w-2xl mb-16 leading-relaxed">
          Every chapter of how I got here — the pitches, the near-missed
          deadlines, the events, the wins. Written so the next student
          walking this path isn't as clueless as I was.
        </p>

        <div className="relative pl-8 border-l border-ink-border space-y-14">
          {journeyEntries.map((entry) => (
            <div key={entry.id} className="relative">
              <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-gold border-4 border-ink" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                {entry.era}
              </span>
              <Link to={`/journey/${entry.slug}`}>
                <h2 className="font-display text-2xl font-semibold text-parchment mt-2 mb-2 hover:text-gold transition-colors">
                  {entry.title}
                </h2>
              </Link>
              <p className="text-parchment-dim leading-relaxed mb-3">
                {entry.excerpt}
              </p>
              <Link
                to={`/journey/${entry.slug}`}
                className="text-gold font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Read this chapter
                <span className="text-lg">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyPage;
