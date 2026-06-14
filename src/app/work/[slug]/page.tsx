import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import CtaBand from "@/components/ui/CtaBand";
import ArticleHeader from "@/components/ui/ArticleHeader";
import Icon from "@/components/ui/Icon";
import TechTag from "@/components/ui/TechTag";
import { SITE } from "@/lib/constants";
import { getAdjacentProjects, getProject, getProjectImageBackground, projects } from "@/lib/projects";
import { breadcrumbJsonLd, buildPageMetadata, creativeWorkJsonLd } from "@/lib/seo";
import Footer from "@/components/layout/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };

  return buildPageMetadata({
    title: `${project.title} | ${SITE.name} (${SITE.nameAr})`,
    description: project.description,
    path: `/work/${project.slug}`,
    image: project.image,
  });
}

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const stack = project.stack ?? project.tags;
  const imageFit = project.imageFit ?? "cover";
  const liveSites: { label: string; url: string }[] =
    project.sites ??
    [
      project.demoUrl ? { label: "Live Demo", url: project.demoUrl } : null,
      project.adminDemoUrl ? { label: "Admin Dashboard", url: project.adminDemoUrl } : null,
    ].filter((site): site is { label: string; url: string } => site !== null);
  const metaItems = [
    project.role && { label: "Role", value: project.role },
    project.timeline && { label: "Timeline", value: project.timeline },
    project.status && { label: "Status", value: project.status },
    { label: "Category", value: project.category },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <main className="page-main">
      <JsonLd
        data={[
          creativeWorkJsonLd(project),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: project.title, path: `/work/${project.slug}` },
          ]),
        ]}
      />

      <section className="px-6 pb-stack-lg md:px-margin-desktop">
        <Link href="/work" className="section-cta-link group mb-stack-lg inline-flex items-center gap-2">
          <Icon
            name="arrow_forward"
            size={16}
            className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to work
        </Link>
        <div
          className="group relative aspect-[16/9] w-full overflow-hidden border border-outline-variant md:aspect-[21/9]"
          style={{ backgroundColor: getProjectImageBackground(project) }}
        >
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            className={`transition-transform duration-700 group-hover:scale-105 ${
              imageFit === "contain" ? "object-contain p-10 md:p-16" : "object-cover"
            }`}
            priority
          />
          {imageFit === "cover" && (
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-60" />
          )}
        </div>
      </section>

      <section className="border-b border-outline-variant/30 px-6 pb-stack-lg md:px-margin-desktop">
        <div className="w-full">
          <div className="mb-stack-sm flex items-center gap-stack-md">
            <span
              className="section-accent-line hidden h-px w-12 shrink-0 bg-primary-container md:block"
              aria-hidden="true"
            />
            <span className="font-ui text-ui-label uppercase tracking-[0.3em] text-primary">
              Case Study
            </span>
          </div>
          <h1 className="mb-stack-md font-display text-display-lg-mobile leading-[0.95] text-on-surface md:text-display-lg">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-ui text-ui-label uppercase tracking-widest text-on-surface-variant">
            {metaItems.map(({ label, value }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-primary">{label}</span>
                <span className="text-on-surface">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="grid w-full grid-cols-12 gap-gutter">
          <div className="col-span-12 space-y-stack-xl lg:col-span-8">
            <article>
              <ArticleHeader eyebrow="Summary" title="Overview" />
              <div className="max-w-3xl space-y-stack-md font-body text-body-lg leading-relaxed text-on-surface-variant">
                {project.overview ? (
                  project.overview.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))
                ) : (
                  <p>{project.description}</p>
                )}
              </div>
            </article>

            {project.architecture && (
              <article>
                <ArticleHeader eyebrow="System" title="Architecture" />
                <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
                  {project.architecture.map(({ icon, title, description }) => (
                    <div key={title} className="surface-card p-stack-lg">
                      <Icon name={icon} size={32} className="mb-4 text-primary" />
                      <h3 className="mb-stack-sm font-ui text-ui-label uppercase text-on-surface">
                        {title}
                      </h3>
                      <p className="font-body text-body-md leading-relaxed text-on-surface-variant">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            )}

            {project.results && (
              <article>
                <ArticleHeader eyebrow="Outcomes" title="Key Results" />
                <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 md:grid-cols-3">
                  {project.results.map(({ value, label }) => (
                    <div key={label} className="surface-card border-l-2 border-l-primary p-stack-md pl-6">
                      <div className="font-display text-display-lg-mobile text-primary md:text-display-lg">
                        {value}
                      </div>
                      <div className="font-ui text-ui-label uppercase tracking-widest text-on-surface-variant">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            )}

            {project.dashboardFeatures && (
              <article>
                <ArticleHeader eyebrow="Product" title="Dashboard Modules" />
                <p className="mb-stack-lg max-w-3xl font-body text-body-md text-on-surface-variant">
                  The admin dashboard covers end-to-end operations across sourcing, sales,
                  logistics, CRM, and team coordination.
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.dashboardFeatures.map((feature) => (
                    <TechTag key={feature}>{feature}</TechTag>
                  ))}
                </div>
              </article>
            )}
          </div>

          <aside className="col-span-12 lg:col-span-4">
            <div className="sticky top-32 space-y-stack-lg">
              <div className="surface-card p-stack-lg">
                <ArticleHeader eyebrow="Built with" title="Tech Stack" className="mb-stack-md" />
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>

              {(liveSites.length > 0 || project.privateSites?.length || project.repoUrl) && (
                <div className="flex flex-col gap-stack-sm">
                  {liveSites.map(({ label, url }) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="surface-card group flex items-center justify-between px-6 py-4 transition-colors hover:border-primary-container hover:bg-primary-container"
                    >
                      <span className="font-ui text-ui-label uppercase tracking-widest text-on-surface transition-colors group-hover:text-on-primary-container">
                        {label}
                      </span>
                      <Icon
                        name="open_in_new"
                        size={20}
                        className="text-primary transition-colors group-hover:text-on-primary-container"
                      />
                    </a>
                  ))}
                  {project.privateSites?.map(({ label }) => (
                    <div
                      key={label}
                      aria-disabled="true"
                      title="Private. Authentication required."
                      className="flex cursor-not-allowed items-center justify-between border border-outline-variant bg-surface-container-high px-6 py-4 opacity-60"
                    >
                      <span className="font-ui text-ui-label uppercase tracking-widest text-on-surface-variant">
                        {label}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
                        Private
                      </span>
                    </div>
                  ))}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="surface-card group flex items-center justify-between px-6 py-4"
                    >
                      <span className="font-ui text-ui-label uppercase tracking-widest text-on-surface">
                        GitHub Repository
                      </span>
                      <Icon name="code" size={20} className="text-on-surface-variant" />
                    </a>
                  )}
                </div>
              )}

              <Link
                href="/contact"
                className="hero-cta-primary flex items-center justify-center gap-2"
              >
                Discuss a similar project
                <Icon name="arrow_forward" size={18} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-outline-variant">
        <div className="grid grid-cols-1 divide-y divide-outline-variant md:grid-cols-2 md:divide-x md:divide-y-0">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group flex flex-col items-start px-6 py-stack-lg transition-colors hover:bg-surface-container md:px-margin-desktop"
            >
              <span className="mb-2 font-ui text-ui-label uppercase tracking-widest text-on-surface-variant">
                Previous
              </span>
              <span className="font-display text-headline-md text-on-surface transition-colors group-hover:text-primary">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group flex flex-col items-end px-6 py-stack-lg transition-colors hover:bg-surface-container md:px-margin-desktop"
            >
              <span className="mb-2 font-ui text-ui-label uppercase tracking-widest text-on-surface-variant">
                Next
              </span>
              <span className="font-display text-headline-md text-on-surface transition-colors group-hover:text-primary">
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      <CtaBand
        eyebrow="Similar project?"
        title="Let's build something together."
        description="Tell me about your product and we can figure out the right approach."
      />
      <Footer variant="default" />
    </main>
  );
}
