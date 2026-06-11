import { SITE } from "@/lib/constants";

const TITLE = "OMAR HENIDI";

export default function HeroTitle() {
  return (
    <h1 className="hero-title-reveal mb-stack-md max-w-full font-display text-[clamp(2.75rem,13vw,8.75rem)] leading-[0.9] tracking-tighter text-on-surface">
      {TITLE.split("").map((char, i) => (
        <span key={`${char}-${i}`} style={{ animationDelay: `${i * 0.08}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
      <span className="sr-only">{SITE.nameAr}</span>
    </h1>
  );
}
