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
        <div className="mb-24 grid grid-cols-12 gap-gutter">
          <div className="col-span-12 md:col-span-7">
            <h2 className="mb-12 font-display text-display-lg leading-[0.85] tracking-tighter text-on-surface md:text-[96px]">
              Let&apos;s create something <br />
              <span className="italic text-tertiary">architectural.</span>
            </h2>
            <div className="flex flex-wrap gap-stack-lg">
              <div className="flex flex-col gap-2">
                <span className="font-ui text-ui-label uppercase tracking-widest text-on-surface-variant opacity-60">
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
                <span className="font-ui text-ui-label uppercase tracking-widest text-on-surface-variant opacity-60">
                  Location
                </span>
                <span className="font-body text-body-lg text-on-surface">{SITE.location}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-ui text-ui-label uppercase tracking-widest text-on-surface-variant opacity-60">
                  Availability
                </span>
                <span className="flex items-center gap-2 font-body text-body-lg text-tertiary">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
                  {SITE.availability}
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex flex-col justify-between md:col-span-5 md:items-end">
            <div className="flex flex-col gap-6 md:items-end">
              <span className="font-ui text-ui-label uppercase tracking-widest text-on-surface-variant opacity-60">
                Social Systems
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
        <div className="flex flex-col items-center justify-between gap-2 border-t border-outline-variant pt-stack-md md:flex-row">
          <p className="font-ui text-xs uppercase tracking-widest text-on-surface-variant">
            © {CURRENT_YEAR} {SITE.name} — All Rights Reserved
          </p>
          <p className="font-ui text-xs uppercase tracking-widest text-on-surface-variant">
            Built for High Performance
          </p>
        </div>
      </footer>
    );
  }

  if (variant === "minimal") {
    return (
      <footer className="flex flex-col items-start border-t border-outline-variant bg-surface-container-lowest px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop">
        <div className="mb-24 flex w-full flex-col items-start justify-between gap-stack-lg md:flex-row">
          <BrandMark />
          <div className="flex flex-col gap-stack-lg md:flex-row">
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
        <div className="font-ui text-ui-label uppercase tracking-widest text-on-surface-variant">
          © {CURRENT_YEAR} {SITE.name}
        </div>
      </footer>
    );
  }

  return (
    <footer className="flex flex-col items-start border-t border-outline-variant bg-surface-container-lowest px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop">
      <div className="mb-20 flex w-full flex-col justify-between gap-10 md:flex-row">
        <BrandMark />
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
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
      <div className="flex w-full items-center justify-between border-t border-outline-variant pt-10">
        <span className="font-ui text-ui-label text-on-surface-variant">© {CURRENT_YEAR} {SITE.name}</span>
        <span className="font-ui text-ui-label text-on-surface-variant">Built for High Performance</span>
      </div>
    </footer>
  );
}

export function ContactFooter() {
  return (
    <footer className="flex flex-col items-start border-t border-outline-variant bg-surface-container-lowest px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop">
      <div className="flex w-full flex-col items-start justify-between gap-stack-lg md:flex-row md:items-end">
        <div className="space-y-6">
          <BrandMark />
          <div className="flex flex-wrap gap-stack-md">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <SocialLink
                key={label}
                label={label}
                href={href}
                className="interactive font-ui text-ui-label text-on-surface-variant transition-all duration-300 hover:text-primary"
              />
            ))}
          </div>
        </div>
        <div className="text-left md:text-right">
          <p className="mb-4 font-display text-display-lg-mobile leading-none text-tertiary md:text-display-lg">
            Let&apos;s Create.
          </p>
          <p className="font-ui text-ui-label text-on-surface-variant opacity-70">
            © {CURRENT_YEAR} {SITE.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

export function ProjectFooter() {
  return (
    <footer className="flex flex-col items-start border-t border-outline-variant bg-surface-container-lowest px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop">
      <div className="flex w-full flex-col items-start justify-between gap-stack-lg md:flex-row md:items-end">
        <div>
          <div className="mb-stack-md font-display text-display-lg text-on-surface">Let&apos;s Connect.</div>
          <div className="flex gap-8">
            {SOCIAL_LINKS.slice(0, 3).map(({ label, href }) => (
              <SocialLink
                key={label}
                label={label}
                href={href}
                className="font-ui text-ui-label uppercase text-on-surface-variant transition-all duration-300 hover:text-primary"
              />
            ))}
          </div>
        </div>
        <div className="font-ui text-ui-label uppercase tracking-widest text-on-surface-variant">
          © {CURRENT_YEAR} {SITE.name}
        </div>
      </div>
    </footer>
  );
}
