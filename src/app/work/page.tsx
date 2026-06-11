import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import WorkGrid from "@/components/work/WorkGrid";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";
import { buildPageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `Work | ${SITE.name} (${SITE.nameAr})`,
  description:
    "Selected projects by Omar Henidi (عمر هنيدي) — SaaS, e-commerce, fintech, and EdTech products built with full stack engineering and technical leadership.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main className="pt-20 md:pt-24">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />
      <section className="mb-stack-lg px-6 md:px-margin-desktop">
        <h1 className="max-w-4xl font-display text-[72px] leading-none md:text-display-xl">Work</h1>
        <p className="mt-stack-md max-w-2xl font-body text-body-lg text-on-surface-variant">
          Case studies and product work across SaaS, commerce, fintech, and education — engineered
          for clarity, performance, and scale.
        </p>
      </section>

      <WorkGrid />

      <section className="mt-section-padding-mobile border-t border-outline-variant bg-surface-container-lowest px-6 py-section-padding-mobile md:mt-section-padding-desktop md:px-margin-desktop md:py-section-padding-desktop">
        <div className="flex flex-col items-start justify-between gap-stack-lg md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block font-ui text-ui-label uppercase tracking-widest text-primary">
              Next Steps
            </span>
            <h2 className="mb-stack-md font-display text-display-lg leading-tight">
              Let&apos;s build something exceptional together.
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant">
              {SITE.availability}. Reach out to discuss your architectural vision and technical
              requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="group relative overflow-hidden bg-primary-container px-stack-lg py-6 font-ui text-ui-label uppercase tracking-widest text-on-primary-container transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get in Touch
              <Icon name="arrow_forward" size={20} />
            </span>
            <div className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
