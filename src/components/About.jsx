const About = () => {
  return (
    <div id="about" className="mb-16 scroll-mt-24">
      <div className="grid md:grid-cols-5 gap-10 items-center bg-ink-surface border border-ink-border rounded-2xl overflow-hidden">
        <div className="md:col-span-2 relative h-full min-h-[280px]">
          <img
            src="https://images.unsplash.com/photo-1769794370990-614f765fa360?w=900&q=80"
            alt="A quiet desk, mid-thought"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:col-span-3 p-8 md:p-12">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            About This Blog
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-semibold text-parchment mt-3 mb-6">
            Why I'm Writing This
          </h2>

          <div className="text-parchment-dim leading-relaxed space-y-4 text-lg">
            <p>
              TechSphere isn't a highlight reel. It's the record I wish I'd
              had access to when I started — the version of a CS journey
              that includes the confusion, the wrong turns, and the things
              I had to figure out with no one to ask.
            </p>
            <p>
              I'm still growing. I don't have this fully figured out, and I
              don't think anyone really does. Every article here is written
              from wherever I actually am — not from some finished, expert
              version of myself I haven't become yet.
            </p>
            <p>
              If you're reading this because you feel behind, or unsure, or
              like everyone else got a manual you didn't — you didn't miss
              anything. No one should feel rushed to have it figured out.
              I'm hoping that by writing mine down, honestly, yours gets a
              little less confusing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
