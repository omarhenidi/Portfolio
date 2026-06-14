import { SITE } from "@/lib/constants";

const TITLE = "OMAR HENIDI";

export default function HeroTitle() {
  return (
    <h1
      id="hero-heading"
      className="hero-title-reveal w-full whitespace-nowrap font-display text-[clamp(2rem,10.5vw,9.5rem)] leading-[0.88] tracking-[-0.04em] text-on-surface"
    >
      <span className="block overflow-hidden">
        {TITLE.split("").map((char, index) => (
          <span
            key={`${char}-${index}`}
            className="inline-block"
            style={{ animationDelay: `${index * 0.045}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
      <span className="sr-only">
        {SITE.name} ({SITE.nameAr})
      </span>
    </h1>
  );
}
