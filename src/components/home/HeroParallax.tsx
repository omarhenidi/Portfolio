"use client";

import dynamic from "next/dynamic";

const ParallaxGrid = dynamic(() => import("@/components/effects/ParallaxGrid"), { ssr: false });

export default function HeroParallax() {
  return <ParallaxGrid />;
}
