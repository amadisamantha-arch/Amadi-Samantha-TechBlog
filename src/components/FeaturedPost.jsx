const FeaturedPost = ({ post }) => {
  if (!post) return null;

  return (
    <div className="mb-16">
      <h2 className="font-display text-3xl font-semibold mb-8 text-parchment">
        Featured Chapter
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center bg-ink-surface border border-ink-border rounded-2xl overflow-hidden">
        <div className="relative">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover aspect-video md:aspect-square"
            />
          ) : (
            <div className="w-full h-full aspect-video md:aspect-square bg-ink flex items-center justify-center text-parchment-dim text-sm">
              Image coming soon
            </div>
          )}
          <div className="absolute top-6 left-6 bg-gold text-ink text-sm font-semibold px-4 py-1.5 rounded-md">
            Featured
          </div>
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-gold text-xs font-bold uppercase tracking-widest">
              {post.era}
            </span>
            <span className="text-parchment-dim text-sm">
              {post.date} • {post.readTime}
            </span>
          </div>

          <h2 className="font-display text-4xl font-semibold leading-tight mb-6 text-parchment">
            {post.title}
          </h2>

          <p className="text-lg text-parchment-dim mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          <a
            href={`/journey/${post.slug}`}
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-soft text-ink font-semibold px-8 py-4 rounded-lg transition-all w-fit"
          >
            Read Full Story
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
