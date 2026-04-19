import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 text-white p-10 rounded-3xl">
      <h3 className="text-3xl font-bold mb-3">Stay Updated</h3>
      <p className="text-gray-400 mb-8">
        Get my latest articles, tips and experiences delivered to your inbox
        weekly.
      </p>

      {subscribed ? (
        <div className="bg-green-600 text-white p-6 rounded-2xl text-center">
          ✅ Thank you! You're now subscribed.
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="bg-gray-800 border border-gray-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-indigo-500 text-white"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 font-semibold py-4 rounded-2xl transition-colors"
          >
            Subscribe Now
          </button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
