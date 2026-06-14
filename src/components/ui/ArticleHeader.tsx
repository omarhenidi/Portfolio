type ArticleHeaderProps = {
  title: string;
  eyebrow?: string;
  className?: string;
};

export default function ArticleHeader({ title, eyebrow, className = "" }: ArticleHeaderProps) {
  return (
    <div className={`mb-stack-lg ${className}`}>
      {eyebrow && (
        <span className="mb-stack-sm block font-ui text-ui-label uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-headline-md text-on-surface">{title}</h2>
    </div>
  );
}
