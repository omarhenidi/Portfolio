import Link from "next/link";
import HeroParallax from "@/components/home/HeroParallax";
import HeroTitle from "@/components/ui/HeroTitle";
import Icon from "@/components/ui/Icon";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="hero-section relative flex min-h-[100dvh] flex-col justify-center overflow-hidden border-b border-outline-variant bg-background px-6 pb-16 pt-[calc(4rem+1.5rem)] md:px-margin-desktop md:pb-20 md:pt-[calc(4.5rem+2rem)]"
      aria-labelledby="hero-heading"
    >
      <div className="hero-glow pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div className="hero-vignette pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <HeroParallax />

      <div className="relative z-10 w-full">
        <div className="grid w-full grid-cols-12 items-end gap-gutter">
          <div className="hero-content col-span-12 flex flex-col gap-stack-lg lg:col-span-9 lg:gap-8 xl:col-span-8">
            <HeroTitle />

            <div className="hero-enter hero-enter-delay-1 flex items-center gap-stack-md">
              <span className="hero-accent-line hidden h-px w-12 bg-primary-container md:block" aria-hidden="true" />
              <p className="font-ui text-ui-label uppercase tracking-[0.28em] text-primary md:tracking-[0.34em]">
                {SITE.title}
              </p>
            </div>

            <p className="hero-enter hero-enter-delay-2 max-w-2xl font-body text-body-lg leading-relaxed text-on-surface-variant md:max-w-3xl md:text-[1.2rem] md:leading-[1.75]">
              {SITE.heroTagline}
            </p>

            <div className="hero-enter hero-enter-delay-3 flex flex-col gap-stack-md min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center">
              <div className="flex w-full flex-col gap-3 min-[480px]:w-auto min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:gap-stack-md">
                <Link href="/work" className="hero-cta-primary w-full min-[480px]:w-auto">
                  View Projects
                </Link>
                <Link href="/about" className="hero-cta-secondary w-full min-[480px]:w-auto">
                  About Me
                </Link>
              </div>

              <Link
                href="/contact"
                className="hero-cta-link group inline-flex items-center justify-center gap-3 min-[480px]:justify-start"
              >
                Get in touch
                <Icon
                  name="arrow_forward"
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </div>

          <div className="hero-enter hero-enter-delay-3 col-span-12 hidden flex-col items-end gap-5 lg:col-span-3 lg:flex xl:col-span-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-on-surface-variant/50">
              {SITE.location}
            </span>
            <span
              className="font-display text-[clamp(5rem,11vw,7.5rem)] font-bold leading-none tracking-tighter text-outline-variant/20"
              aria-hidden="true"
            >
              OH
            </span>
            <span className="font-body text-body-md text-on-surface-variant/60" lang="ar" dir="rtl">
              {SITE.nameAr}
            </span>
          </div>
        </div>
      </div>

      <Link
        href="#work"
        className="hero-scroll-hint absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-ui text-[11px] uppercase tracking-[0.35em] text-on-surface-variant/60 transition-colors hover:text-primary md:bottom-8"
        aria-label="Scroll to projects"
      >
        <span>Scroll</span>
        <Icon name="keyboard_arrow_down" size={20} className="hero-scroll-icon" />
      </Link>
    </section>
  );
}
