import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import { SITE, SOCIAL_LINKS, PAGE_COPY } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `Contact ${SITE.name} (${SITE.nameAr})`,
  description: PAGE_COPY.contactDescription,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="page-main">
      <section className="page-intro">
        <div className="w-full">
          <PageHeader
            eyebrow="Reach out"
            title="Contact"
            description={PAGE_COPY.contactIntro}
          />
        </div>
      </section>

      <section className="px-6 pb-section-padding-mobile md:px-margin-desktop md:pb-section-padding-desktop">
        <div className="grid w-full grid-cols-12 gap-gutter">
          <div className="col-span-12 lg:col-span-7">
            <div className="surface-card p-stack-lg md:p-12">
              <ContactForm />
            </div>
          </div>

          <div className="col-span-12 flex flex-col gap-stack-xl lg:col-span-5">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-tertiary/30 bg-tertiary/5 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
              <span className="font-mono text-tech-tag uppercase text-tertiary">
                {SITE.availability}
              </span>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="mb-2 font-ui text-ui-label uppercase tracking-widest text-on-surface-variant/70">
                  Email
                </h2>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-display text-headline-md text-on-surface transition-colors hover:text-primary"
                >
                  {SITE.email}
                </a>
              </div>
              <div>
                <h2 className="mb-2 font-ui text-ui-label uppercase tracking-widest text-on-surface-variant/70">
                  Phone
                </h2>
                <a
                  href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                  className="font-display text-headline-md text-on-surface transition-colors hover:text-primary"
                >
                  {SITE.phone}
                </a>
              </div>
              <div>
                <h2 className="mb-2 font-ui text-ui-label uppercase tracking-widest text-on-surface-variant/70">
                  Location
                </h2>
                <p className="font-display text-headline-md text-on-surface">{SITE.location}</p>
                <p className="mt-2 font-body text-body-md text-on-surface-variant">
                  Based in Cairo. Open to remote work and projects outside Egypt.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 font-ui text-ui-label uppercase tracking-widest text-on-surface-variant/70">
                Find me online
              </h2>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    title={`${SITE.name} (${SITE.nameAr}) on ${label}`}
                    className="surface-card px-6 py-3 font-ui text-ui-label uppercase text-on-surface transition-colors hover:text-primary"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="default" />
    </main>
  );
}
