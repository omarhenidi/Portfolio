import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { ProjectFooter } from "@/components/layout/Footer";
import Icon from "@/components/ui/Icon";
import TechTag from "@/components/ui/TechTag";
import { getAdjacentProjects, getProject, projects } from "@/lib/projects";
import { breadcrumbJsonLd, buildPageMetadata, creativeWorkJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };

  return buildPageMetadata({
    title: `${project.title} | Omar Henidi - عمر هنيدي`,
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
  const metaItems = [
    project.role && { label: "Role", value: project.role },
    project.timeline && { label: "Timeline", value: project.timeline },
    project.status && { label: "Status", value: project.status },
    { label: "Category", value: project.category },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <main className="pt-20 md:pt-24">
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

      <section className="mb-stack-lg w-full px-6 md:px-margin-desktop">
        <div
          className="group relative aspect-[21/9] w-full overflow-hidden bg-surface-container-low"
          style={project.imageBackground ? { backgroundColor: project.imageBackground } : undefined}
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

      <section className="mb-section-padding-mobile px-6 md:mb-section-padding-desktop md:px-margin-desktop">
        <div className="mx-auto max-w-7xl border-b border-outline-variant pb-stack-lg">
          <h1 className="mb-stack-md font-display text-display-xl text-on-surface">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4 font-ui text-ui-label uppercase tracking-widest text-on-surface-variant">
            {metaItems.map(({ label, value }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-primary">{label}</span>
                <span className="text-on-surface">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-section-padding-mobile px-6 md:mb-section-padding-desktop md:px-margin-desktop">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-gutter">
          <div className="col-span-12 space-y-section-padding-mobile lg:col-span-8">
            <article>
              <h2 className="mb-stack-lg font-display text-headline-md text-on-surface">Overview</h2>
              <div className="max-w-3xl space-y-stack-md font-body text-body-lg text-on-surface-variant">
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
                <h2 className="mb-stack-lg font-display text-headline-md text-on-surface">Architecture</h2>
                <div className="grid grid-cols-1 gap-stack-lg md:grid-cols-2">
                  {project.architecture.map(({ icon, title, description }) => (
                    <div
                      key={title}
                      className="bento-card-bordered bg-surface-container-low p-stack-lg"
                    >
                      <Icon name={icon} size={32} className="mb-4 text-primary" />
                      <h3 className="mb-stack-sm font-ui text-ui-label uppercase text-on-surface">{title}</h3>
                      <p className="font-body text-body-md text-on-surface-variant">{description}</p>
                    </div>
                  ))}
                </div>
              </article>
            )}

            {project.results && (
              <article>
                <h2 className="mb-stack-lg font-display text-headline-md text-on-surface">Key Results</h2>
                <div className="grid grid-cols-2 gap-gutter md:grid-cols-3">
                  {project.results.map(({ value, label }) => (
                    <div key={label} className="border-l-2 border-primary py-2 pl-6">
                      <div className="font-display text-display-lg text-primary">{value}</div>
                      <div className="font-ui text-ui-label uppercase text-on-surface-variant">{label}</div>
                    </div>
                  ))}
                </div>
              </article>
            )}
          </div>

          <aside className="col-span-12 lg:col-span-4">
            <div className="sticky top-32 space-y-stack-lg">
              <div className="bento-card-bordered bg-surface-container-low p-stack-lg">
                <h2 className="mb-stack-md font-ui text-ui-label uppercase tracking-widest text-primary">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>

              {(project.demoUrl || project.repoUrl) && (
                <div className="flex flex-col gap-stack-sm">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between border border-outline px-6 py-4 transition-all duration-300 hover:border-primary-container hover:bg-primary-container"
                    >
                      <span className="font-ui text-ui-label uppercase tracking-widest text-on-surface transition-colors group-hover:text-on-primary-container">
                        Live Demo
                      </span>
                      <Icon
                        name="open_in_new"
                        size={20}
                        className="text-primary transition-colors group-hover:text-on-primary-container"
                      />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between border border-outline px-6 py-4 transition-all duration-300 hover:bg-white/5"
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
                className="group flex items-center justify-center gap-2 bg-primary-container px-6 py-4 font-ui text-ui-label uppercase tracking-widest text-on-primary-container transition-opacity hover:opacity-90"
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

      <ProjectFooter />
    </main>
  );
}
