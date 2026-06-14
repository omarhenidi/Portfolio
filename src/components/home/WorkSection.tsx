import Link from "next/link";
import Icon from "@/components/ui/Icon";
import ProjectCard from "@/components/ui/ProjectCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeader from "@/components/ui/SectionHeader";
import { featuredProjects } from "@/lib/projects";

export default function WorkSection() {
  return (
    <section
      id="work"
      className="scroll-mt-20 bg-background px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop md:scroll-mt-24"
      aria-labelledby="work-heading"
    >
      <div className="w-full">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Selected Work"
            title="Case Studies"
            description="A few projects I&apos;ve shipped recently."
            index="02"
            titleId="work-heading"
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <RevealOnScroll key={project.slug} delay={100 * (index + 1)}>
              <ProjectCard project={project} variant="bento" />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={500}>
          <div className="mt-stack-xl flex justify-end border-t border-outline-variant/30 pt-stack-lg">
            <Link href="/work" className="section-cta-link group inline-flex items-center gap-3">
              View all projects
              <Icon
                name="arrow_forward"
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
