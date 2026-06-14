import Link from "next/link";
import Icon from "@/components/ui/Icon";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeader from "@/components/ui/SectionHeader";
import { SITE } from "@/lib/constants";

export default function PhilosophySection() {
  return (
    <section
      className="border-y border-outline-variant bg-surface-container-low px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop"
      aria-labelledby="philosophy-heading"
    >
      <div className="w-full">
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Approach"
            title="How I work"
            index="03"
            titleId="philosophy-heading"
          />
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <p className="mb-stack-lg max-w-4xl font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-snug tracking-tight text-on-surface">
            I care about software that holds up: clear to use, solid under the hood, and easy to
            extend as the product grows.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <div className="grid grid-cols-12 gap-gutter">
            <p className="col-span-12 font-body text-body-lg leading-relaxed text-on-surface-variant md:col-span-8">
              For the past {SITE.yearsExperience} years I&apos;ve worked where engineering meets
              design, mostly leading front-end work for startups and larger teams. I like clean
              layouts, readable code, and products that feel considered without getting in the
              way.
            </p>
            <div className="col-span-12 flex items-end md:col-span-4 md:justify-end">
              <Link href="/about" className="section-cta-link group inline-flex items-center gap-3">
                More about my approach
                <Icon
                  name="arrow_forward"
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
