import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedPost from "./components/FeaturedPost";
import PostCard from "./components/PostCard";
import Categories from "./components/Categories";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { posts } from "./data/posts.js";
import { useEffect, useRef } from "react";

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

function App() {
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Hero />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <FeaturedPost post={featuredPost} />

        {/* Latest Articles Auto Scroll */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-white">
            Latest Articles
          </h2>
          <AutoScroller speed={0.6}>
            {remainingPosts.map((post, index) => (
              <div key={index} className="min-w-[320px] max-w-[320px]">
                <PostCard post={post} />
              </div>
            ))}
          </AutoScroller>
        </div>

        {/* Newsletter and Categories */}
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-7">
            <Newsletter />
          </div>
          <div className="md:col-span-5">
            <Categories />
          </div>
        </div>

        {/* Contact Section */}
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
