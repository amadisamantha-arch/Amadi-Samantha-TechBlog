const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Welcome to <span className="text-yellow-300">TechSphere</span>
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-indigo-100">
          Exploring the latest in Artificial Intelligence, Web Development, and
          Future Technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded-2xl hover:bg-yellow-300 hover:text-indigo-800 transition-all text-lg">
            Read Latest Articles
          </button>
          <button className="border-2 border-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all text-lg">
            Browse Categories
          </button>
        </div>

        <div className="mt-12 text-sm opacity-75">
          By Amadi Samantha • Tech Enthusiast & Writer
        </div>
      </div>
    </div>
  );
};

export default Hero;
