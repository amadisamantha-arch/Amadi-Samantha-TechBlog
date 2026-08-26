import { Link, useParams } from "react-router-dom";
import { journeyEntries } from "../data/journey";
import InitialsBadge from "../components/InitialsBadge";

const JourneyArticle = () => {
  const { slug } = useParams();
  const entry = journeyEntries.find((e) => e.slug === slug);

  if (!entry) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-parchment-dim text-lg mb-6">
            This chapter doesn't exist yet.
          </p>
          <Link to="/journey" className="text-gold font-medium">
            ← Back to the Journey
          </Link>
        </div>
      </div>
    );
  }

  const hasProjects = entry.projects && entry.projects.length > 0;
  const hasCompanies = entry.companies && entry.companies.length > 0;
  const hasContent = entry.content && entry.content.length > 0;

  return (
    <div className="min-h-screen bg-ink">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          to="/journey"
          className="text-gold font-medium inline-flex items-center gap-2 mb-10"
        >
          ← Back to the Journey
        </Link>

        <span className="text-gold text-xs font-bold uppercase tracking-widest">
          {entry.era}
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-parchment mt-3 mb-4">
          {entry.title}
        </h1>
        {(entry.date || entry.readTime) && (
          <p className="text-parchment-dim text-sm mb-10">
            {entry.date} {entry.date && entry.readTime && "•"} {entry.readTime}
          </p>
        )}

        {entry.image && (
          <img
            src={entry.image}
            alt={entry.title}
            className="w-full rounded-xl mb-10 object-cover aspect-video"
          />
        )}

        {hasContent && (
          <div className="space-y-12 mb-14">
            {entry.content.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="font-display text-2xl font-semibold text-parchment mb-4 pb-3 border-b border-ink-border">
                    {section.heading}
                  </h2>
                )}
                <div className="text-lg text-parchment-dim leading-relaxed space-y-5">
                  {section.paragraphs.map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {hasProjects && (
          <div className="mb-14">
            <h2 className="font-display text-2xl font-semibold text-parchment mb-6 pb-3 border-b border-ink-border">
              Projects
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {entry.projects.map((project) => (
                <Link
                  key={project.slug}
                  to={`/journey/${entry.slug}/${project.slug}`}
                  className="block bg-ink-surface border border-ink-border rounded-xl overflow-hidden hover:border-gold transition-colors"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-cover"
                    />
                  ) : (
                    <InitialsBadge name={project.title} color={project.badgeColor} />
                  )}
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-parchment mb-2">
                      {project.title}
                    </h3>
                    <p className="text-parchment-dim text-sm">
                      {project.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {hasCompanies && (
          <div>
            <h2 className="font-display text-2xl font-semibold text-parchment mb-6 pb-3 border-b border-ink-border">
              Companies
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {entry.companies.map((company) => (
                <Link
                  key={company.slug}
                  to={`/journey/${entry.slug}/${company.slug}`}
                  className="block bg-ink-surface border border-ink-border rounded-xl overflow-hidden hover:border-gold transition-colors"
                >
                  {company.image ? (
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-full aspect-video object-cover"
                    />
                  ) : (
                    <InitialsBadge name={company.name} color={company.badgeColor} />
                  )}
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-parchment mb-2">
                      {company.name}
                    </h3>
                    <p className="text-parchment-dim text-sm">
                      {company.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {!hasProjects && !hasCompanies && !hasContent && (
          <div className="bg-ink-surface border border-ink-border rounded-xl p-10 text-center">
            <p className="text-parchment-dim text-lg">
              This chapter is being written. Check back soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JourneyArticle;