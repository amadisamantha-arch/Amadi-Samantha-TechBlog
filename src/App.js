import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedPost from "./components/FeaturedPost";
import PostCard from "./components/PostCard";
import Categories from "./components/Categories";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { posts } from "./data/posts.js";

function App() {
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <Hero />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <FeaturedPost post={featuredPost} />

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <Newsletter />
          </div>
          <div className="md:col-span-5">
            <Categories />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
