import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { ContactFooter } from "@/components/layout/Footer";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `Contact ${SITE.name} (${SITE.nameAr})`,
  description:
    "Get in touch with Omar Henidi (عمر هنيدي) for full stack engineering, technical direction, and engineering leadership projects in Cairo and worldwide.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="pt-20 md:pt-24">
      <section className="px-6 pb-stack-lg md:px-margin-desktop">
        <h1 className="mb-stack-lg font-display text-[72px] leading-none text-on-surface md:text-display-xl">
          Contact
        </h1>
        <div className="max-w-4xl">
          <p className="font-display text-headline-md leading-relaxed text-on-surface-variant">
            Have a vision that needs structural precision? Let&apos;s architect something
            extraordinary together. I&apos;m currently accepting new projects and creative
            collaborations.
          </p>
        </div>
      </section>

      <section className="px-6 pb-section-padding-mobile md:px-margin-desktop md:pb-section-padding-desktop">
        <div className="grid grid-cols-12 gap-gutter">
          <div className="col-span-12 lg:col-span-7">
            <div className="border border-outline-variant bg-surface-container p-stack-lg md:p-12">
              <ContactForm />
            </div>
          </div>

          <div className="col-span-12 flex flex-col justify-between space-y-stack-lg lg:col-span-5">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-tertiary/30 bg-tertiary/5 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
                <span className="font-mono text-tech-tag uppercase text-tertiary">
                  {SITE.availability}
                </span>
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="mb-2 font-ui text-ui-label uppercase tracking-widest text-on-surface-variant">
                    General Inquiries
                  </h2>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="interactive font-display text-headline-md text-on-surface transition-colors hover:text-primary"
                  >
                    {SITE.email}
                  </a>
                </div>
                <div>
                  <h2 className="mb-2 font-ui text-ui-label uppercase tracking-widest text-on-surface-variant">
                    Phone
                  </h2>
                  <a
                    href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                    className="interactive font-display text-headline-md text-on-surface transition-colors hover:text-primary"
                  >
                    {SITE.phone}
                  </a>
                </div>
                <div>
                  <h2 className="mb-2 font-ui text-ui-label uppercase tracking-widest text-on-surface-variant">
                    Location
                  </h2>
                  <p className="font-display text-headline-md text-on-surface">{SITE.location}</p>
                  <p className="mt-2 font-body text-body-md text-outline">
                    Available for global opportunities & remote engagements.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-12">
              <h2 className="mb-6 font-ui text-ui-label uppercase tracking-widest text-on-surface-variant">
                Digital Presence
              </h2>
              <div className="flex flex-wrap gap-4">
                {SOCIAL_LINKS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    title={`${SITE.name} (${SITE.nameAr}) on ${label}`}
                    className="interactive border border-outline-variant px-6 py-3 font-ui text-ui-label uppercase text-on-surface transition-all duration-300 hover:border-primary hover:text-primary"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex h-64 items-center justify-center overflow-hidden border-t border-outline-variant">
        <div className="relative z-10 text-center">
          <span className="font-ui text-ui-label uppercase tracking-[0.35em] text-on-surface-variant/50 md:tracking-[0.5em]">
            Precision Matters
          </span>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}
