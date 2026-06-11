"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouchDevice || prefersReducedMotion) return;

    document.body.classList.add("has-custom-cursor");
    setVisible(true);

    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const interactiveSelector = "a, button, .bento-card, .project-card, .interactive";

    const onPointerOver = (e: MouseEvent) => {
      const target = e.target;
      if (target instanceof Element && target.closest(interactiveSelector)) {
        setHovering(true);
      }
    };

    const onPointerOut = (e: MouseEvent) => {
      const related = e.relatedTarget;
      if (!(related instanceof Element) || !related.closest(interactiveSelector)) {
        setHovering(false);
      }
    };

    document.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", onPointerOver);
    document.addEventListener("mouseout", onPointerOut);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onPointerOver);
      document.removeEventListener("mouseout", onPointerOut);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed z-[9999] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-container transition-all duration-150 ease-out md:block ${
        hovering ? "scale-[4] border border-primary-container bg-transparent" : ""
      }`}
    />
  );
}
