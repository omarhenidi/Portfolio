"use client";

import { SITE } from "@/lib/constants";

const TITLE = "OMAR HENIDI";

export default function HeroTitle() {
  return (
    <h1 className="hero-title-reveal mb-stack-md font-display text-[80px] leading-[0.9] tracking-tighter text-on-surface md:text-[140px]">
      {TITLE.split("").map((char, i) => (
        <span key={`${char}-${i}`} style={{ animationDelay: `${i * 0.08}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
      <span className="sr-only">{SITE.nameAr}</span>
    </h1>
  );
}
