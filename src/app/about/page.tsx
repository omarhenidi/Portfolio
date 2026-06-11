import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import TechTag from "@/components/ui/TechTag";
import { SITE } from "@/lib/constants";
import { buildPageMetadata, breadcrumbJsonLd, personJsonLd } from "@/lib/seo";
import { experience, stats } from "@/lib/projects";

export const metadata: Metadata = buildPageMetadata({
  title: `About | ${SITE.name} - ${SITE.nameAr}`,
  description: `${SITE.name} (${SITE.nameAr}) — Technical Director and Full Stack Engineer in Cairo, Egypt. End-to-end product engineering, technical strategy, and team leadership across the MENA region.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="pt-20 md:pt-24">
      <JsonLd
        data={[
          personJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <section className="px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-12 font-display text-[72px] md:text-display-xl">About</h1>
          <div className="grid grid-cols-1 items-start gap-gutter md:grid-cols-12">
            <div className="group overflow-hidden border border-outline-variant p-2 md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
                <Image
                  src="/images/omar-henidi.webp"
                  alt={`${SITE.name} (${SITE.nameAr}) — ${SITE.title} portrait`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
            </div>
            <div className="flex flex-col gap-stack-lg md:col-span-7">
              <p className="font-body text-body-lg leading-relaxed text-on-surface-variant">
                As a Technical Director and Full Stack Engineer, I lead teams building
                complete products — from Laravel and MySQL backends to React and Next.js
                frontends — with a focus on scalable systems and high-impact delivery.
              </p>
              <p className="font-body text-body-lg leading-relaxed text-on-surface-variant">
                With extensive experience leading cross-functional teams across the MENA region, I
                prioritize technical excellence without sacrificing editorial clarity. I believe that
                modern technology should feel as meticulously crafted as a piece of luxury
                design—seamless, authoritative, and intelligent.
              </p>
              <p className="font-body text-body-lg leading-relaxed text-on-surface-variant">
                My expertise spans the entire development lifecycle, from high-level system design to
                hands-on deployment strategies. I am committed to fostering a culture of mentorship
                and innovation, ensuring that every project not only meets its technical requirements
                but pushes the boundaries of digital craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant bg-surface-container-low px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-gutter md:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center border border-outline-variant/30 p-stack-md text-center md:p-stack-lg"
              >
                <span className="mb-2 font-display text-display-lg-mobile text-primary md:text-display-lg">
                  {value}
                </span>
                <span className="font-ui text-ui-label uppercase tracking-widest text-on-surface-variant">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-16 text-center font-display text-headline-md md:mb-24">
            Professional Journey
          </h2>
          <div className="relative">
            <div className="timeline-line absolute left-4 hidden h-full md:left-1/2 md:block md:-translate-x-1/2" />
            <div className="flex flex-col gap-12 md:gap-24">
              {experience.map(({ company, role, period, current }, index) => {
                const contentOnRight = index % 2 === 0;

                return (
                  <div
                    key={company}
                    className="group relative md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-x-stack-lg"
                  >
                    {/* Mobile */}
                    <div className="relative border-l border-outline-variant pl-8 md:hidden">
                      <div
                        className={`absolute -left-[5px] top-1.5 rounded-full border-background ${
                          current
                            ? "h-3 w-3 border-[3px] bg-primary"
                            : "h-2.5 w-2.5 border-2 bg-outline-variant"
                        }`}
                      />
                      <span className="mb-2 block font-ui text-ui-label text-primary">{period}</span>
                      <h3 className="mb-1 font-ui text-headline-md text-on-surface">{company}</h3>
                      <p className="font-body text-body-md text-on-surface-variant">{role}</p>
                    </div>

                    {/* Desktop — left column */}
                    <div
                      className={`hidden md:block ${
                        contentOnRight ? "pr-stack-lg text-right" : "pr-stack-lg text-left"
                      }`}
                    >
                      {contentOnRight ? (
                        <span className="font-ui text-ui-label text-primary">{period}</span>
                      ) : (
                        <>
                          <h3 className="mb-1 font-ui text-headline-md text-on-surface">{company}</h3>
                          <p className="font-body text-body-md text-on-surface-variant">{role}</p>
                        </>
                      )}
                    </div>

                    {/* Desktop — center dot */}
                    <div
                      className={`z-10 hidden shrink-0 rounded-full border-background md:block ${
                        current
                          ? "h-4 w-4 border-4 bg-primary"
                          : "h-3 w-3 border-2 bg-outline-variant transition-colors group-hover:bg-primary"
                      }`}
                    />

                    {/* Desktop — right column */}
                    <div
                      className={`hidden md:block ${
                        contentOnRight ? "pl-stack-lg text-left" : "pl-stack-lg text-right"
                      }`}
                    >
                      {contentOnRight ? (
                        <>
                          <h3 className="mb-1 font-ui text-headline-md text-on-surface">{company}</h3>
                          <p className="font-body text-body-md text-on-surface-variant">{role}</p>
                        </>
                      ) : (
                        <span className="font-ui text-ui-label text-primary">{period}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-highest px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 font-display text-headline-md text-on-surface">Expertise & Skills</h2>
          <div className="grid grid-cols-1 gap-stack-lg md:grid-cols-2">
            <div className="border border-outline-variant bg-surface p-stack-lg">
              <h3 className="mb-6 font-ui text-ui-label uppercase tracking-widest text-primary">
                Technical Leadership
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Team Mentorship",
                  "Agile Methodologies",
                  "System Architecture",
                  "Technical Strategy",
                  "Product Roadmapping",
                  "Code Review Standards",
                ].map((skill) => (
                  <TechTag key={skill}>{skill}</TechTag>
                ))}
              </div>
            </div>
            <div className="border border-outline-variant bg-surface p-stack-lg">
              <h3 className="mb-6 font-ui text-ui-label uppercase tracking-widest text-primary">
                Technical Ecosystem
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React / Next.js",
                  "PHP Laravel",
                  "MySQL",
                  "TypeScript",
                  "Tailwind CSS",
                  "REST APIs",
                ].map((skill) => (
                  <TechTag key={skill}>{skill}</TechTag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="font-display text-headline-md">Education</h2>
            </div>
            <div className="md:col-span-8">
              <div className="border border-outline-variant bg-surface-container-lowest p-6 transition-colors duration-500 hover:border-primary md:p-12">
                <div className="mb-6 flex flex-col items-start justify-between md:flex-row md:items-center">
                  <h3 className="font-display text-headline-md text-on-surface">Sinai University</h3>
                  <span className="font-ui text-ui-label uppercase tracking-widest text-on-surface-variant">
                    B.Sc. in Computer Science
                  </span>
                </div>
                <p className="max-w-2xl font-body text-body-lg text-on-surface-variant">
                  Focused on Software Engineering and Artificial Intelligence. Graduated with honors,
                  specializing in scalable distributed systems and high-performance algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="minimal" />
    </main>
  );
}
