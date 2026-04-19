import { useEffect, useRef } from "react";

const Categories = () => {
  const scrollRef = useRef(null);

  const categories = [
    {
      name: "Student Life",
      emoji: "🎓",
      desc: "The real university experience",
    },
    { name: "Coding Tips", emoji: "💻", desc: "Things I learned the hard way" },
    {
      name: "Personal Growth",
      emoji: "🌱",
      desc: "Who I'm becoming along the way",
    },
    {
      name: "Student Tips",
      emoji: "📚",
      desc: "Practical advice that actually works",
    },
    {
      name: "My Journey",
      emoji: "🚀",
      desc: "Where I started and where I'm going",
    },
    {
      name: "Communication",
      emoji: "🗣️",
      desc: "Finding my voice as a CS student",
    },
  ];

  useEffect(() => {
    const el = scrollRef.current;
    let animationId;
    let pos = 0;
    const speed = 0.5;

    const scroll = () => {
      pos += speed;
      if (pos >= el.scrollHeight / 2) {
        pos = 0;
      }
      el.scrollTop = pos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    el.addEventListener("mouseenter", () => cancelAnimationFrame(animationId));
    el.addEventListener("mouseleave", () => {
      animationId = requestAnimationFrame(scroll);
    });

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl">
      <h3 className="text-2xl font-bold mb-2 text-white">Categories</h3>
      <p className="text-gray-400 text-sm mb-6">
        Topics I write about from my CS journey
      </p>

      <div
        ref={scrollRef}
        className="flex flex-col gap-3 overflow-y-hidden"
        style={{ maxHeight: "320px" }}
      >
        {/* Doubled for seamless loop */}
        {[...categories, ...categories].map((category, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-gray-800 hover:bg-indigo-900 hover:border-indigo-500 border border-gray-700 transition-all px-5 py-4 rounded-2xl cursor-pointer group"
          >
            <span className="text-2xl">{category.emoji}</span>
            <div>
              <p className="text-white font-medium group-hover:text-indigo-300 transition-colors">
                {category.name}
              </p>
              <p className="text-gray-400 text-xs">{category.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
