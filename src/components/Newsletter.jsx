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
    <div className="bg-ink-surface border border-ink-border text-parchment p-10 rounded-xl">
      <h3 className="font-display text-3xl font-semibold mb-3">Stay Updated</h3>
      <p className="text-parchment-dim mb-8">
        Get my latest articles, tips and experiences delivered to your inbox
        weekly.
      </p>

      {subscribed ? (
        <div className="border border-gold/40 text-gold p-6 rounded-lg text-center">
          You're now subscribed. Thank you!
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="bg-ink border border-ink-border rounded-lg px-6 py-4 focus:outline-none focus:border-gold text-parchment placeholder:text-parchment-dim/50"
            required
          />
          <button
            type="submit"
            className="bg-gold hover:bg-gold-soft text-ink font-semibold py-4 rounded-lg transition-colors"
          >
            Subscribe Now
          </button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
