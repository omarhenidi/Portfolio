type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  descriptionVariant?: "default" | "compact";
  className?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  descriptionVariant = "default",
  className = "",
}: PageHeaderProps) {
  const descriptionClassName =
    descriptionVariant === "compact"
      ? "mt-stack-sm max-w-xl font-body text-body-md leading-relaxed text-on-surface-variant/75"
      : "mt-stack-md max-w-3xl font-body text-body-lg leading-relaxed text-on-surface-variant";

  return (
    <header className={`w-full ${className}`}>
      <div className="mb-stack-sm flex items-center gap-stack-md">
        <span
          className="section-accent-line hidden h-px w-12 shrink-0 bg-primary-container md:block"
          aria-hidden="true"
        />
        <span className="font-ui text-ui-label uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </span>
      </div>
      <h1 className="font-display text-display-lg-mobile leading-[0.95] tracking-tight text-on-surface md:text-display-lg">
        {title}
      </h1>
      {description && (
        <p className={descriptionClassName}>{description}</p>
      )}
    </header>
  );
}
