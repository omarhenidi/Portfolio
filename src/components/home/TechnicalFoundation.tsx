import RevealOnScroll from "@/components/ui/RevealOnScroll";
import TechTag from "@/components/ui/TechTag";

const PILLARS = [
  {
    index: "01",
    title: "Frontend",
    description: "Product-grade interfaces with performance, accessibility, and design systems built in.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    index: "02",
    title: "Backend",
    description: "Reliable APIs, data modeling, and Laravel services engineered for scale and clarity.",
    skills: ["PHP Laravel", "MySQL", "REST APIs", "Auth & RBAC"],
  },
  {
    index: "03",
    title: "Leadership",
    description: "Technical direction from architecture decisions through team delivery and code quality.",
    skills: ["System Design", "Design Systems", "Team Leadership", "Code Review"],
  },
] as const;

const CAPABILITIES = [
  { label: "Full Stack Delivery", detail: "End-to-end ownership" },
  { label: "Production Systems", detail: "SaaS · Commerce · Fintech" },
  { label: "MENA Experience", detail: "Cross-functional teams" },
] as const;

export default function TechnicalFoundation() {
  return (
    <section
      className="overflow-hidden border-t border-outline-variant bg-surface-container-lowest px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop"
      aria-labelledby="technical-foundation-heading"
    >
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <div className="mb-stack-lg flex flex-col gap-stack-md md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="mb-stack-sm block font-ui text-ui-label uppercase tracking-[0.3em] text-primary">
                Engineering Depth
              </span>
              <h2
                id="technical-foundation-heading"
                className="font-display text-display-lg-mobile text-on-surface md:text-display-lg"
              >
                Technical Foundation
              </h2>
            </div>
            <p className="max-w-md font-body text-body-md text-on-surface-variant md:text-right">
              A balanced stack across frontend craft, backend rigor, and technical leadership —
              built for products that ship and scale.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          {PILLARS.map((pillar, index) => (
            <RevealOnScroll
              key={pillar.title}
              delay={100 * (index + 1)}
              className={index === 2 ? "md:col-span-12" : "md:col-span-6"}
            >
              <article className="stack-pillar group flex h-full flex-col border border-outline-variant bg-surface-container-low p-stack-lg transition-colors duration-300 hover:border-primary-container md:p-8">
                <div className="mb-stack-md flex items-start justify-between gap-4">
                  <div>
                    <span className="mb-3 block font-mono text-tech-tag text-primary/70">
                      {pillar.index}
                    </span>
                    <h3 className="font-display text-headline-md text-on-surface">{pillar.title}</h3>
                  </div>
                  <div className="h-px w-12 shrink-0 bg-outline-variant transition-all duration-500 group-hover:w-20 group-hover:bg-primary-container" />
                </div>
                <p className="mb-stack-lg flex-1 font-body text-body-md leading-relaxed text-on-surface-variant">
                  {pillar.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pillar.skills.map((skill) => (
                    <TechTag
                      key={skill}
                      className="transition-colors duration-300 group-hover:border-primary/30 group-hover:text-on-surface"
                    >
                      {skill}
                    </TechTag>
                  ))}
                </div>
              </article>
            </RevealOnScroll>
          ))}

          <RevealOnScroll delay={400} className="md:col-span-12">
            <div className="grid grid-cols-1 gap-stack-md border border-outline-variant bg-hero-band p-stack-lg md:grid-cols-3 md:gap-0 md:p-8">
              {CAPABILITIES.map(({ label, detail }, capIndex) => (
                <div
                  key={label}
                  className={`flex flex-col gap-2 ${
                    capIndex > 0
                      ? "border-t border-outline-variant/40 pt-stack-md md:border-l md:border-t-0 md:pl-stack-lg md:pt-0"
                      : ""
                  }`}
                >
                  <span className="font-ui text-ui-label uppercase tracking-widest text-primary">
                    {label}
                  </span>
                  <span className="font-mono text-tech-tag text-on-surface-variant">{detail}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
