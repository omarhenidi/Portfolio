"use client";

import { useEffect, useRef } from "react";

export default function ParallaxGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouchDevice || prefersReducedMotion) return;

    let frame = 0;
    let lastX = 0;
    let lastY = 0;

    const applyTransform = () => {
      frame = 0;
      const x = (lastX - window.innerWidth / 2) * 0.02;
      const y = (lastY - window.innerHeight / 2) * 0.02;
      grid.style.transform = `perspective(1000px) rotateX(45deg) translate(${x}px, ${y}px)`;
    };

    const handleMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!frame) {
        frame = window.requestAnimationFrame(applyTransform);
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
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
