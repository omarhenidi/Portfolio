import { SITE } from "@/lib/constants";

const TITLE_WORDS = ["OMAR", "HENIDI"] as const;

export default function HeroTitle() {
  let letterIndex = 0;

  return (
    <h1
      id="hero-heading"
      className="hero-title-reveal w-full max-w-full font-display tracking-[-0.04em] text-on-surface"
    >
      <span className="hero-title-words">
        {TITLE_WORDS.map((word, wordIndex) => (
          <span key={word} className="hero-title-word">
            {wordIndex > 0 && (
              <span className="hero-title-space" aria-hidden="true">
                {"\u00A0"}
              </span>
            )}
            {word.split("").map((char) => {
              const delay = letterIndex * 0.045;
              letterIndex += 1;

              return (
                <span
                  key={`${word}-${char}-${delay}`}
                  className="hero-title-letter"
                  style={{ animationDelay: `${delay}s` }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        ))}
      </span>
      <span className="sr-only">
        {SITE.name} ({SITE.nameAr})
      </span>
    </h1>
  );
}
