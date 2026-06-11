"use client";

import { useEffect, useState } from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import Navigation from "@/components/layout/Navigation";
import NavigationOverlay from "@/components/layout/NavigationOverlay";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", closeOnDesktop);
    return () => mq.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <>
      <CustomCursor />
      <Navigation onMenuOpen={() => setMenuOpen(true)} />
      <NavigationOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div id="main-content">{children}</div>
    </>
  );
}
