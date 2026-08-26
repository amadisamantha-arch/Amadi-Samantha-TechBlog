import { Link } from "react-router-dom";

const ChapterCard = ({ chapter }) => {
  const hasContent = chapter.content && chapter.content.length > 0;

  return (
    <Link
      to={`/journey/${chapter.slug}`}
      className="block bg-ink-surface border border-ink-border rounded-xl overflow-hidden hover:border-gold/60 transition-colors duration-300 group"
    >
      <div className="relative">
        {chapter.image ? (
          <img
            src={chapter.image}
            alt={chapter.title}
            className="w-full h-52 object-cover"
          />
        ) : (
          <div className="w-full h-52 bg-ink flex items-center justify-center text-parchment-dim text-sm">
            Image coming soon
          </div>
        )}
        {!hasContent && (
          <div className="absolute top-4 right-4 bg-ink/90 text-parchment-dim text-xs font-medium px-3 py-1 rounded-md border border-ink-border">
            Coming soon
          </div>
        )}
      </div>

      <div className="p-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold">
          {chapter.era}
        </span>

        <h3 className="font-display text-xl font-semibold leading-tight mt-2 mb-3 text-parchment group-hover:text-gold transition-colors">
          {chapter.title}
        </h3>

        <p className="text-parchment-dim text-sm leading-relaxed line-clamp-3 mb-5">
          {chapter.excerpt}
        </p>

        <span className="text-gold font-medium text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
          Read More
          <span className="text-lg">→</span>
        </span>
      </div>
    </Link>
  );
};

export default ChapterCard;
