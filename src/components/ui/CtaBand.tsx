import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { SITE } from "@/lib/constants";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export default function CtaBand({
  eyebrow = "Next Steps",
  title = "Interested in working together?",
  description = `${SITE.availability}. Send a message and we can talk through what you need.`,
  buttonLabel = "Get in touch",
  buttonHref = "/contact",
}: CtaBandProps) {
  return (
    <section className="border-t border-outline-variant bg-surface-container-lowest px-6 py-section-padding-mobile md:px-margin-desktop md:py-section-padding-desktop">
      <div className="w-full">
        <div className="grid grid-cols-12 items-end gap-gutter">
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-stack-sm flex items-center gap-stack-md">
              <span
                className="section-accent-line hidden h-px w-12 shrink-0 bg-primary-container md:block"
                aria-hidden="true"
              />
              <span className="font-ui text-ui-label uppercase tracking-[0.3em] text-primary">
                {eyebrow}
              </span>
            </div>
            <h2 className="font-display text-display-lg-mobile leading-tight text-on-surface md:text-display-lg">
              {title}
            </h2>
            {description && (
              <p className="mt-stack-md max-w-2xl font-body text-body-lg text-on-surface-variant">
                {description}
              </p>
            )}
          </div>
          <div className="col-span-12 lg:col-span-4 lg:flex lg:justify-end">
            <Link
              href={buttonHref}
              className="hero-cta-primary inline-flex w-full items-center justify-center gap-2 min-[480px]:w-auto"
            >
              {buttonLabel}
              <Icon name="arrow_forward" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
