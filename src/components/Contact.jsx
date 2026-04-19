import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    reason: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    emailjs
      .send("service_mdwq90q", "template_eyia9fe", form, "riuucbvMQg2g9CL3_")
      .then(() => {
        setSending(false);
        setSent(true);
        setForm({ from_name: "", from_email: "", reason: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      })
      .catch(() => {
        setSending(false);
        setError(true);
      });
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 mb-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
        <p className="text-gray-400 mb-8">
          Want to collaborate, hire me, give feedback, or just say hi? Send me a
          message and I'll get back to you!
        </p>

        {sent ? (
          <div className="bg-green-600 text-white p-6 rounded-2xl text-center text-lg">
            ✅ Message sent! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-gray-400 text-sm mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={form.from_name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">
                  Your Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={form.from_email}
                  onChange={handleChange}
                  placeholder="john@email.com"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-400 text-sm mb-2 block">
                Reason for Reaching Out
              </label>
              <select
                name="reason"
                value={form.reason}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="">Select a reason...</option>
                <option value="Hiring"> Hiring</option>
                <option value="Collaboration"> Collaboration</option>
                <option value="Feedback"> Feedback</option>
                <option value="Just saying hi"> Just saying hi</option>
              </select>
            </div>

            <div>
              <label className="text-gray-400 text-sm mb-2 block">
                Your Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                rows={5}
                className="w-full bg-gray-800 border border-gray-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            {error && (
              <div className="bg-red-600 text-white p-4 rounded-2xl text-center">
                ❌ Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-4 rounded-2xl transition-colors text-lg"
            >
              {sending ? "Sending..." : "Send Message 🚀"}
            </button>
          </form>
        )}

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-400 text-sm">
          <a
            href="mailto:amadisamantha@gmail.com"
            className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
          >
             amadisamantha@gmail.com
          </a>
          <span className="hidden sm:block">•</span>
          <a
            href="https://github.com/amadisamantha-arch"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
          >
             github.com/amadisamantha-arch
          </a>
          <span className="hidden sm:block">•</span>
          <a
            href="https://www.linkedin.com/in/samantha-amadi-dev"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
          >
             LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
