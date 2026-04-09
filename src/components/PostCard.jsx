const PostCard = ({ post }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 text-xs font-medium px-3 py-1 rounded-full">
          {post.readTime}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            {post.category}
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {post.date}
          </span>
        </div>

        <h3 className="text-xl font-semibold leading-tight mb-3 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6">
          {post.excerpt}
        </p>

        <button className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-2 hover:gap-3 transition-all">
          Read Full Article
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
