import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import PhilosophySection from "@/components/home/PhilosophySection";
import TechnicalFoundation from "@/components/home/TechnicalFoundation";
import WorkSection from "@/components/home/WorkSection";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `${SITE.name} - ${SITE.nameAr} | ${SITE.title}`,
  description: SITE.seoDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WorkSection />
      <PhilosophySection />
      <TechnicalFoundation />
      <Footer variant="home" />
    </main>
  );
}
