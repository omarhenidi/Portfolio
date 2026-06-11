import type { Metadata } from "next";
import Link from "next/link";
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
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4 font-display text-display-lg">404</h1>
      <p className="mb-8 font-body text-body-lg text-on-surface-variant">
        The page you are looking for could not be found.
      </p>
      <Link
        href="/"
        className="bg-primary-container px-8 py-4 font-ui text-ui-label uppercase tracking-widest text-on-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
      >
        Return Home
      </Link>
    </main>
  );
}
