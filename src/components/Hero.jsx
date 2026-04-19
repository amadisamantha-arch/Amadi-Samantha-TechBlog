const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-block bg-indigo-600 text-white text-sm font-semibold px-5 py-2 rounded-full mb-6">
           Second Year CS Student
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Welcome to <span className="text-indigo-400">TechSphere</span>
          <br /> by Samantha
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-gray-400">
          Documenting my tech journey — the struggles, the wins, the tips, and
          everything in between as a CS student.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all text-lg">
            Read My Story
          </button>
          <button className="border-2 border-gray-600 hover:border-indigo-500 font-semibold px-8 py-4 rounded-2xl transition-all text-lg text-gray-300">
            Browse Articles
          </button>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          By Amadi Samantha • CS Student & Tech Enthusiast
        </div>
      </div>
    </div>
  );
};

export default Hero;
