import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `Page Not Found | ${SITE.name}`,
  description: "The page you are looking for could not be found.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main className="page-main flex min-h-[100svh] flex-col">
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center md:px-margin-desktop">
        <div className="mb-stack-sm flex items-center justify-center gap-stack-md">
          <span
            className="section-accent-line hidden h-px w-12 shrink-0 bg-primary-container md:block"
            aria-hidden="true"
          />
          <span className="font-ui text-ui-label uppercase tracking-[0.3em] text-primary">404</span>
          <span
            className="section-accent-line hidden h-px w-12 shrink-0 bg-primary-container md:block"
            aria-hidden="true"
          />
        </div>
        <h1 className="mb-stack-md font-display text-display-lg-mobile text-on-surface md:text-display-lg">
          Page not found
        </h1>
        <p className="mb-stack-xl max-w-md font-body text-body-lg text-on-surface-variant">
          The page you are looking for could not be found.
        </p>
        <Link href="/" className="hero-cta-primary inline-block">
          Return home
        </Link>
      </div>
      <Footer variant="minimal" />
    </main>
  );
}
