import { useEffect, useRef } from "react";

const Categories = () => {
  const scrollRef = useRef(null);

  const categories = [
    { name: "Student Life", desc: "The real university experience" },
    { name: "Coding Tips", desc: "Things I learned the hard way" },
    { name: "Personal Growth", desc: "Who I'm becoming along the way" },
    { name: "Student Tips", desc: "Practical advice that actually works" },
    { name: "My Journey", desc: "Where I started and where I'm going" },
    { name: "Communication", desc: "Finding my voice as a CS student" },
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
    <div className="bg-ink-surface border border-ink-border p-8 rounded-xl">
      <h3 className="font-display text-2xl font-semibold mb-2 text-parchment">
        Categories
      </h3>
      <p className="text-parchment-dim text-sm mb-6">
        Topics I write about from my CS journey
      </p>

      <div
        ref={scrollRef}
        className="flex flex-col gap-3 overflow-y-hidden"
        style={{ maxHeight: "320px" }}
      >
        {[...categories, ...categories].map((category, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-ink hover:border-gold/50 border border-ink-border transition-colors px-5 py-4 rounded-lg cursor-pointer group"
          >
            <span className="text-xs font-display font-semibold text-gold border border-gold/40 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
              {category.name.charAt(0)}
            </span>
            <div>
              <p className="text-parchment font-medium group-hover:text-gold transition-colors">
                {category.name}
              </p>
              <p className="text-parchment-dim text-xs">{category.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
