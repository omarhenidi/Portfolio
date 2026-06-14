type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  index?: string;
  titleId?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  index,
  titleId,
}: SectionHeaderProps) {
  return (
    <div className="mb-stack-lg grid grid-cols-12 items-end gap-gutter md:mb-16">
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
        <h2
          id={titleId}
          className="font-display text-display-lg-mobile text-on-surface md:text-display-lg"
        >
          {title}
        </h2>
      </div>

      {(description || index) && (
        <div className="col-span-12 flex flex-col gap-stack-md lg:col-span-4 lg:items-end lg:text-right">
          {description && (
            <p className="max-w-md font-body text-body-md leading-relaxed text-on-surface-variant lg:ml-auto">
              {description}
            </p>
          )}
          {index && (
            <span
              className="hidden font-display text-[clamp(4rem,8vw,5rem)] leading-none text-outline-variant/25 lg:block"
              aria-hidden="true"
            >
              {index}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
