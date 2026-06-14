import Link from "next/link";
import { CURRENT_YEAR, SITE, SOCIAL_LINKS } from "@/lib/constants";
import BrandMark from "@/components/ui/BrandMark";

function SocialLink({ label, href, className }: { label: string; href: string; className: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="me noopener noreferrer"
      title={`${SITE.name} (${SITE.nameAr}) on ${label}`}
      className={className}
    >
      {label}
    </a>
  );
}

type FooterVariant = "home" | "default" | "minimal";

type FooterProps = {
  variant?: FooterVariant;
};

export default function Footer({ variant = "default" }: FooterProps) {
  if (variant === "home") {
    return (
      <footer className="border-t border-outline-variant bg-hero-band px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop">
        <div className="w-full">
          <div className="mb-stack-lg grid grid-cols-12 items-end gap-gutter md:mb-16">
            <div className="col-span-12 lg:col-span-8">
              <div className="mb-stack-sm flex items-center gap-stack-md">
                <span
                  className="section-accent-line hidden h-px w-12 shrink-0 bg-primary-container md:block"
                  aria-hidden="true"
                />
                <span className="font-ui text-ui-label uppercase tracking-[0.3em] text-primary">
                  Contact
                </span>
              </div>
              <h2 className="font-display text-display-lg-mobile leading-[0.95] tracking-tight text-on-surface md:text-display-lg">
                Got a project in mind?{" "}
                <span className="italic text-tertiary">Let&apos;s talk.</span>
              </h2>
            </div>
            <span
              className="hidden font-display text-[clamp(4rem,8vw,5rem)] leading-none text-outline-variant/25 lg:col-span-4 lg:block lg:text-right"
              aria-hidden="true"
            >
              05
            </span>
          </div>

          <div className="mb-24 grid grid-cols-12 gap-gutter">
            <div className="col-span-12 md:col-span-7">
              <div className="flex flex-wrap gap-stack-lg">
                <div className="flex flex-col gap-2">
                  <span className="font-ui text-ui-label uppercase tracking-widest text-on-surface-variant/70">
                    Email
                  </span>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-body text-body-lg text-on-surface transition-colors hover:text-primary"
                  >
                    {SITE.email}
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-ui text-ui-label uppercase tracking-widest text-on-surface-variant/70">
                    Location
                  </span>
                  <span className="font-body text-body-lg text-on-surface">{SITE.location}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-ui text-ui-label uppercase tracking-widest text-on-surface-variant/70">
                    Availability
                  </span>
                  <span className="flex items-center gap-2 font-body text-body-lg text-tertiary">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
                    {SITE.availability}
                  </span>
                </div>
              </div>
              <Link
                href="/contact"
                className="hero-cta-primary mt-stack-lg inline-block w-full min-[480px]:w-auto"
              >
                Get in touch
              </Link>
            </div>
            <div className="col-span-12 flex flex-col justify-between md:col-span-5 md:items-end">
              <div className="flex flex-col gap-6 md:items-end">
                <span className="font-ui text-ui-label uppercase tracking-widest text-on-surface-variant/70">
                  Find me online
                </span>
                <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                  {SOCIAL_LINKS.map(({ label, href }) => (
                    <SocialLink
                      key={label}
                      label={label}
                      href={href}
                      className="font-display text-headline-md text-on-surface transition-all duration-300 hover:text-primary"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-2 border-t border-outline-variant/30 pt-stack-md md:flex-row">
            <p className="font-ui text-xs uppercase tracking-widest text-on-surface-variant">
              © {CURRENT_YEAR} {SITE.name}. All Rights Reserved
            </p>
            <p className="font-ui text-xs uppercase tracking-widest text-on-surface-variant">
              {SITE.title}
            </p>
          </div>
        </div>
      </footer>
    );
  }

  if (variant === "minimal") {
    return (
      <footer className="border-t border-outline-variant bg-surface-container-lowest px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop">
        <div className="mb-stack-xl flex w-full flex-col items-start justify-between gap-stack-lg md:flex-row md:items-end">
          <BrandMark />
          <div className="flex flex-wrap gap-stack-md">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <SocialLink
                key={label}
                label={label}
                href={href}
                className="font-ui text-ui-label uppercase text-on-surface-variant transition-colors duration-300 hover:text-primary"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-2 border-t border-outline-variant/30 pt-stack-md md:flex-row md:items-center">
          <span className="font-ui text-xs uppercase tracking-widest text-on-surface-variant">
            © {CURRENT_YEAR} {SITE.name}
          </span>
          <span className="font-ui text-xs uppercase tracking-widest text-on-surface-variant">
            {SITE.title}
          </span>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-outline-variant bg-surface-container-lowest px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop">
      <div className="mb-stack-xl flex w-full flex-col justify-between gap-stack-lg md:flex-row md:items-end">
        <BrandMark />
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <SocialLink
              key={label}
              label={label}
              href={href}
              className="font-ui text-ui-label uppercase text-on-surface-variant transition-all duration-300 hover:text-primary"
            />
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-between gap-2 border-t border-outline-variant/30 pt-stack-md md:flex-row md:items-center">
        <span className="font-ui text-xs uppercase tracking-widest text-on-surface-variant">
          © {CURRENT_YEAR} {SITE.name}
        </span>
        <span className="font-ui text-xs uppercase tracking-widest text-on-surface-variant">
          {SITE.title}
        </span>
      </div>
    </footer>
  );
}

export function ContactFooter() {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-lowest px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop">
      <div className="flex w-full flex-col items-start justify-between gap-stack-lg md:flex-row md:items-end">
        <div className="space-y-6">
          <BrandMark />
          <div className="flex flex-wrap gap-stack-md">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <SocialLink
                key={label}
                label={label}
                href={href}
                className="font-ui text-ui-label uppercase text-on-surface-variant transition-all duration-300 hover:text-primary"
              />
            ))}
          </div>
        </div>
        <div className="text-left md:text-right">
          <p className="mb-4 font-display text-display-lg-mobile leading-none text-tertiary md:text-display-lg">
            Got a project in mind?
          </p>
          <p className="font-ui text-xs uppercase tracking-widest text-on-surface-variant">
            © {CURRENT_YEAR} {SITE.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
