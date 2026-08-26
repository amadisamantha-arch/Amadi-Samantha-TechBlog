import { Link, useParams } from "react-router-dom";
import { journeyEntries } from "../data/journey";

const CompanyProjectArticle = () => {
  const { slug, companySlug, projectSlug } = useParams();
  const entry = journeyEntries.find((e) => e.slug === slug);
  const company = entry?.companies?.find((c) => c.slug === companySlug);
  const project = company?.projects?.find((p) => p.slug === projectSlug);

  if (!entry || !company || !project) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-parchment-dim text-lg mb-6">
            This project doesn't exist yet.
          </p>
          <Link to="/journey" className="text-gold font-medium">
            ← Back to the Journey
          </Link>
        </div>
      </div>
    );
  }

  const hasContent = project.content && project.content.length > 0;

  return (
    <div className="min-h-screen bg-ink">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          to={`/journey/${entry.slug}/${company.slug}`}
          className="text-gold font-medium inline-flex items-center gap-2 mb-10"
        >
          ← Back to {company.name}
        </Link>

        <span className="text-gold text-xs font-bold uppercase tracking-widest">
          {entry.era} · {company.name}
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-parchment mt-3 mb-4">
          {project.title}
        </h1>
        {(project.date || project.readTime) && (
          <p className="text-parchment-dim text-sm mb-10">
            {project.date}{" "}
            {project.date && project.readTime && "•"} {project.readTime}
          </p>
        )}

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-xl mb-10 object-cover aspect-video"
          />
        )}

        {hasContent ? (
          <div className="space-y-12">
            {project.content.map((section, i) => (
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
        ) : (
          <div className="bg-ink-surface border border-ink-border rounded-xl p-10 text-center">
            <p className="text-parchment-dim text-lg">
              This project write-up is coming soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyProjectArticle;