import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeaturedPost from "../components/FeaturedPost";
import ChapterCard from "../components/ChapterCard";
import PostCard from "../components/PostCard";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import About from "../components/About";
import Contact from "../components/Contact";
import { posts } from "../data/posts.js";
import { journeyEntries } from "../data/journey.js";

function AutoScroller({ children, speed = 1, className = "" }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    let animationId;
    let pos = 0;

    const scroll = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) {
        pos = 0;
      }
      el.scrollLeft = pos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    el.addEventListener("mouseenter", () => cancelAnimationFrame(animationId));
    el.addEventListener("mouseleave", () => {
      animationId = requestAnimationFrame(scroll);
    });

    return () => cancelAnimationFrame(animationId);
  }, [speed]);

  return (
    <div
      ref={scrollRef}
      className={`flex overflow-x-hidden gap-6 ${className}`}
      style={{ scrollBehavior: "auto" }}
    >
      {children}
      {children}
    </div>
  );
}

const HomePage = () => {
  const featuredChapter = journeyEntries[0]; // 100 Level
  const otherChapters = journeyEntries.slice(1);

  return (
    <>
      <Hero />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div id="chapters" className="scroll-mt-24">
          <FeaturedPost post={featuredChapter} />

          <div className="mb-16">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-display text-3xl font-semibold text-parchment">
                Latest Chapters
              </h2>
              <Link
                to="/journey"
                className="text-gold font-medium text-sm hidden sm:inline-flex items-center gap-2"
              >
                View full timeline →
              </Link>
            </div>
            <AutoScroller speed={0.6}>
              {otherChapters.map((chapter) => (
                <div key={chapter.id} className="min-w-[320px] max-w-[320px]">
                  <ChapterCard chapter={chapter} />
                </div>
              ))}
            </AutoScroller>
          </div>
        </div>

        <div id="tips" className="mb-16 scroll-mt-24">
          <h2 className="font-display text-3xl font-semibold mb-10 text-parchment">
            Tips & Reflections
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-7">
            <Newsletter />
          </div>
          <div className="md:col-span-5">
            <Categories />
          </div>
        </div>

        <About />

        <Contact />
      </div>
    </>
  );
};

export default HomePage;
