"use client";

import { useEffect, useRef } from "react";

export default function ParallaxGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.02;
      const y = (e.clientY - window.innerHeight / 2) * 0.02;
      grid.style.transform = `perspective(1000px) rotateX(45deg) translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <div
        ref={gridRef}
        className="parallax-grid absolute inset-0 -top-1/2 scale-150 transition-transform duration-1000 ease-out"
      />
    </div>
  );
}
