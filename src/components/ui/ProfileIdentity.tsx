import { SITE } from "@/lib/constants";

type ProfileIdentityProps = {
  className?: string;
  showEyebrow?: boolean;
};

export default function ProfileIdentity({ className = "", showEyebrow = true }: ProfileIdentityProps) {
  return (
    <header className={`border-b border-outline-variant/25 pb-stack-md lg:pb-stack-lg ${className}`}>
      {showEyebrow && (
        <div className="mb-stack-md flex items-center gap-stack-md">
          <span
            className="section-accent-line h-px w-12 shrink-0 bg-primary-container"
            aria-hidden="true"
          />
          <span className="font-ui text-ui-label uppercase tracking-[0.3em] text-primary">
            Profile
          </span>
        </div>
      )}

      <div className="space-y-2">
        <p className="font-display text-[clamp(2rem,4vw,3rem)] leading-[0.95] tracking-tight text-on-surface">
          {SITE.name}
        </p>
        <p
          className="max-w-max font-body text-[clamp(1.2rem,2.2vw,1.65rem)] leading-snug text-on-surface-variant"
          lang="ar"
          dir="rtl"
        >
          {SITE.nameAr}
        </p>
      </div>

      <div className="mt-stack-md flex items-center gap-stack-md">
        <span className="hidden h-px w-10 shrink-0 bg-primary-container/50 md:block" aria-hidden="true" />
        <p className="font-ui text-ui-label uppercase tracking-[0.28em] text-primary md:tracking-[0.32em]">
          {SITE.title}
        </p>
      </div>
    </header>
  );
}
