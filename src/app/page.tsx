import type { Metadata } from "next";
import Link from "next/link";
import ParallaxGrid from "@/components/effects/ParallaxGrid";
import Footer from "@/components/layout/Footer";
import HeroTitle from "@/components/ui/HeroTitle";
import Icon from "@/components/ui/Icon";
import ProjectCard from "@/components/ui/ProjectCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { SITE } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";
import { featuredProjects } from "@/lib/projects";

export const metadata: Metadata = buildPageMetadata({
  title: `${SITE.name} - ${SITE.nameAr} | ${SITE.title}`,
  description: SITE.seoDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <section className="relative flex h-screen w-full items-center overflow-hidden bg-hero-band px-6 md:px-margin-desktop">
        <ParallaxGrid />
        <div className="relative z-10 grid w-full grid-cols-12">
          <div className="col-span-12 flex flex-col justify-center md:col-span-8">
            <HeroTitle />
            <RevealOnScroll delay={800}>
              <p className="mb-stack-lg max-w-xl font-body text-body-lg text-on-surface-variant">
                Building end-to-end products with full stack engineering — from Laravel
                backends and MySQL data layers to React and Next.js frontends.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={1000}>
              <div className="flex gap-stack-md">
                <Link
                  href="/work"
                  className="bg-primary-container px-8 py-4 font-ui text-ui-label uppercase tracking-widest text-on-primary-container transition-all hover:opacity-90"
                >
                  View Projects
                </Link>
                <Link
                  href="/about"
                  className="border border-outline px-8 py-4 font-ui text-ui-label uppercase tracking-widest text-on-surface transition-all hover:bg-surface-variant focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
                >
                  About Me
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop" id="work">
        <RevealOnScroll>
          <div className="mb-stack-lg flex items-end justify-between">
            <div>
              <span className="mb-stack-sm block font-ui text-ui-label uppercase tracking-[0.3em] text-primary">
                Selected Projects
              </span>
              <h2 className="font-display text-display-lg text-on-surface">Case Studies</h2>
            </div>
            <div className="hidden max-w-xs text-right font-body text-body-md text-on-surface-variant md:block">
              Selected works demonstrating full stack delivery and technical leadership.
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <RevealOnScroll key={project.slug} delay={100 * (index + 1)}>
              <ProjectCard project={project} variant="bento" />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="border-y border-outline-variant bg-philosophy-light px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop">
        <div className="mx-auto max-w-5xl">
          <RevealOnScroll>
            <span className="mb-stack-lg block font-ui text-ui-label uppercase tracking-[0.3em] text-[#0f172a]">
              The Philosophy
            </span>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="mb-stack-lg font-display text-display-lg leading-tight text-[#0f172a]">
              I believe software should be as intentional as a physical structure—built with{" "}
              <span className="italic text-primary-container">structural integrity</span>, visual
              clarity, and the capacity to evolve.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="grid grid-cols-1 gap-stack-lg md:grid-cols-2">
              <p className="font-body text-body-lg text-[#334155]">
                Over the past 4+ years, I&apos;ve navigated the intersection of engineering and
                design, leading front-end initiatives for startups and established enterprises. My
                approach centers on the &quot;Technical Editorial&quot; aesthetic: where code meets
                high-fashion layout principles.
              </p>
              <div className="flex items-end">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-4 border-b border-[#0f172a] pb-2 font-ui text-ui-label uppercase tracking-widest text-[#0f172a]"
                >
                  More about my approach
                  <Icon
                    name="arrow_forward"
                    size={20}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="overflow-hidden bg-surface-container-lowest px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop">
        <div className="grid grid-cols-12 items-center gap-gutter">
          <RevealOnScroll className="col-span-12 md:col-span-6">
            <h2 className="mb-stack-md font-display text-display-lg text-on-surface">
              Technical Foundation
            </h2>
            <div className="mb-stack-lg space-y-stack-md">
              {[
                { label: "Frameworks", value: "React, Next.js, TypeScript" },
                { label: "Styling", value: "Tailwind, CSS Modules, SCSS" },
                { label: "Backend", value: "PHP Laravel, MySQL" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between border-b border-outline-variant pb-4">
                  <span className="font-ui uppercase text-on-surface">{label}</span>
                  <span className="font-mono text-on-surface-variant">{value}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="col-span-12 md:col-span-6" delay={300}>
            <div className="relative flex aspect-square w-full flex-col justify-center border border-outline-variant p-stack-lg">
              <p className="mb-stack-md font-ui text-ui-label uppercase tracking-widest text-primary">
                Core Stack
              </p>
              <ul className="space-y-stack-sm font-mono text-tech-tag text-on-surface-variant">
                <li>React · Next.js · TypeScript</li>
                <li>PHP Laravel · MySQL</li>
                <li>Tailwind · Design Systems</li>
                <li>Technical Direction · Team Leadership</li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer variant="home" />
    </main>
  );
}
