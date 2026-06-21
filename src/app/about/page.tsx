import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import ArticleHeader from "@/components/ui/ArticleHeader";
import CtaBand from "@/components/ui/CtaBand";
import Icon from "@/components/ui/Icon";
import PageHeader from "@/components/ui/PageHeader";
import PortraitImage from "@/components/ui/PortraitImage";
import ProfileIdentity from "@/components/ui/ProfileIdentity";
import SectionHeader from "@/components/ui/SectionHeader";
import TechTag from "@/components/ui/TechTag";
import { SITE, PAGE_COPY } from "@/lib/constants";
import { buildPageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { experience, stats } from "@/lib/projects";

export const metadata: Metadata = buildPageMetadata({
  title: `About | ${SITE.name} - ${SITE.nameAr}`,
  description: PAGE_COPY.aboutDescription,
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="page-main">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <section className="page-intro">
        <div className="w-full">
          <PageHeader
            eyebrow="Profile"
            title="About"
            description={SITE.heroTagline}
            descriptionVariant="compact"
            className="mb-stack-lg md:mb-12"
          />
          <div className="grid grid-cols-1 items-stretch gap-gutter lg:grid-cols-12">
            <figure className="surface-card relative overflow-hidden p-2 lg:col-span-5">
              <div className="relative mx-auto w-full max-w-[682px] bg-surface-container-low">
                <PortraitImage
                  priority
                  sizes="(max-width: 1024px) 100vw, min(42vw, 682px)"
                  className="portrait-photo aspect-[682/1024] h-auto w-full object-cover object-[center_8%]"
                />
              </div>
            </figure>

            <div className="flex flex-col gap-stack-lg lg:col-span-7 lg:gap-stack-xl">
              <ProfileIdentity className="hidden lg:block" />

              <div className="space-y-stack-md lg:space-y-stack-lg">
                <p className="font-body text-body-lg leading-relaxed text-on-surface-variant md:text-[1.125rem] md:leading-[1.8] lg:text-[1.2rem] lg:leading-[1.85]">
                  Most of my work has been in the MENA region, working with designers, product
                  managers, and other engineers. I try to keep the technical side tight without
                  making the product feel heavy or overbuilt.
                </p>
                <p className="font-body text-body-lg leading-relaxed text-on-surface-variant md:text-[1.125rem] md:leading-[1.8] lg:text-[1.2rem] lg:leading-[1.85]">
                  I&apos;ve worked across the stack, from early architecture to deployment. I also
                  spend a fair amount of time mentoring, reviewing code, and helping teams stay
                  focused on what actually needs to ship.
                </p>
                <p className="font-body text-body-lg leading-relaxed text-on-surface-variant md:text-[1.125rem] md:leading-[1.8] lg:text-[1.2rem] lg:leading-[1.85]">
                  The products I&apos;ve helped build sit in SaaS, e-commerce, and fintech. That
                  range taught me to read a brief quickly, spot what will matter in six months, and
                  build systems that can grow without a full rewrite every year.
                </p>
                <p className="font-body text-body-lg leading-relaxed text-on-surface-variant md:text-[1.125rem] md:leading-[1.8] lg:text-[1.2rem] lg:leading-[1.85]">
                  Based in Cairo, I work with local teams and remote clients. Whether I&apos;m
                  leading teams or hands-on in the codebase, I care about clear communication,
                  sensible trade-offs, and shipping work that holds up after launch.
                </p>
              </div>

              <div className="hidden flex-wrap items-center gap-stack-lg border-t border-outline-variant/30 pt-stack-lg lg:flex">
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-body text-body-md text-on-surface transition-colors hover:text-primary"
                >
                  {SITE.email}
                </a>
                <Link href="/work" className="section-cta-link group inline-flex items-center gap-2">
                  View work
                  <Icon name="arrow_forward" size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={SITE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="section-cta-link group inline-flex items-center gap-2"
                >
                  Resume
                  <Icon name="open_in_new" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant bg-surface-container-low px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop">
        <div className="w-full">
          <SectionHeader eyebrow="At a glance" title="Highlights" />
          <div className="grid grid-cols-2 gap-gutter md:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="surface-card flex flex-col items-center p-stack-md text-center md:p-stack-lg"
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

      <section className="page-section">
        <div className="w-full">
          <SectionHeader eyebrow="Career" title="Professional Journey" />
          <div className="relative mx-auto max-w-4xl">
            <div className="timeline-line absolute left-4 hidden h-full md:left-1/2 md:block md:-translate-x-1/2" />
            <div className="flex flex-col gap-12 md:gap-24">
              {experience.map(({ company, role, period, current }, index) => {
                const contentOnRight = index % 2 === 0;

                return (
                  <div
                    key={`${company}-${period}`}
                    className="group relative md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-x-stack-lg"
                  >
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

                    <div
                      className={`z-10 hidden shrink-0 rounded-full border-background md:block ${
                        current
                          ? "h-4 w-4 border-4 bg-primary"
                          : "h-3 w-3 border-2 bg-outline-variant transition-colors group-hover:bg-primary"
                      }`}
                    />

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

      <section className="border-t border-outline-variant bg-surface-container-highest px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop">
        <div className="w-full">
          <SectionHeader eyebrow="Capabilities" title="Expertise & Skills" />
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            <div className="surface-card p-stack-lg">
              <ArticleHeader eyebrow="Leadership" title="Technical Leadership" className="mb-6" />
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
            <div className="surface-card p-stack-lg">
              <ArticleHeader eyebrow="Stack" title="Technical Ecosystem" className="mb-6" />
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

      <section className="page-section">
        <div className="w-full">
          <SectionHeader eyebrow="Background" title="Education" />
          <div className="surface-card p-6 md:p-12">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <h3 className="font-display text-headline-md text-on-surface">Sinai University</h3>
              <span className="font-ui text-ui-label uppercase tracking-widest text-on-surface-variant">
                B.Sc. Software Engineering & CS
              </span>
            </div>
            <p className="max-w-2xl font-body text-body-lg text-on-surface-variant">
              Ismailia, Egypt. Sep 2019 - Jun 2023.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer variant="minimal" />
    </main>
  );
}
