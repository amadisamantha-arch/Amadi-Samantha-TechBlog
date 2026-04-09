import PostCard from "./PostCard";

const FeaturedPost = ({ post }) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
        🔥 Featured Article
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl">
        {/* Left Side - Big Image */}
        <div className="relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover aspect-video md:aspect-square"
          />
          <div className="absolute top-6 left-6 bg-indigo-600 text-white text-sm font-medium px-5 py-2 rounded-2xl">
            Featured
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-bold px-4 py-2 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {post.date} • {post.readTime}
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
            {post.title}
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          <button className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all w-fit">
            Read Full Story
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
