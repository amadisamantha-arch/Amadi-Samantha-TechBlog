const PostCard = ({ post }) => {
  return (
    <div className="bg-ink-surface border border-ink-border rounded-xl overflow-hidden hover:border-gold/60 transition-colors duration-300 group">
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-52 object-cover"
        />
        <div className="absolute top-4 right-4 bg-ink/90 text-parchment text-xs font-medium px-3 py-1 rounded-md border border-ink-border">
          {post.readTime}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            {post.category}
          </span>
          <span className="text-parchment-dim/50">•</span>
          <span className="text-xs text-parchment-dim">{post.date}</span>
        </div>

        <h3 className="font-display text-xl font-semibold leading-tight mb-3 line-clamp-2 text-parchment group-hover:text-gold transition-colors">
          {post.title}
        </h3>

        <p className="text-parchment-dim text-sm leading-relaxed line-clamp-3 mb-6">
          {post.excerpt}
        </p>

        <button className="text-gold font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all">
          Read Full Article
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
