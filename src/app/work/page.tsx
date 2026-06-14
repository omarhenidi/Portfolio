import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import WorkGrid from "@/components/work/WorkGrid";
import CtaBand from "@/components/ui/CtaBand";
import PageHeader from "@/components/ui/PageHeader";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";
import { buildPageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `Work | ${SITE.name} (${SITE.nameAr})`,
  description:
    "Selected projects by Omar Henidi (عمر هنيدي): SaaS, e-commerce, fintech, and EdTech work as a full stack engineer and tech lead.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main className="page-main">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />

      <section className="page-intro">
        <PageHeader
          eyebrow="Portfolio"
          title="Work"
          description="Case studies and product work across SaaS, commerce, fintech, and education."
        />
      </section>

      <WorkGrid />
      <CtaBand />
      <Footer variant="default" />
    </main>
  );
}
