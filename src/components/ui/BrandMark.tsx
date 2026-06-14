import Link from "next/link";

type BrandMarkProps = {
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function BrandMark({ href = "/", onClick, className = "" }: BrandMarkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label="Omar Henidi, home"
      className={`group inline-flex shrink-0 flex-col leading-none ${className}`}
    >
      <span className="font-display text-headline-md font-bold tracking-tighter text-on-surface transition-colors group-hover:text-primary">
        OH
      </span>
      <span className="mt-1 hidden font-ui text-[10px] uppercase tracking-[0.35em] text-on-surface-variant transition-colors group-hover:text-primary lg:block">
        Omar Henidi
      </span>
    </Link>
  );
}
