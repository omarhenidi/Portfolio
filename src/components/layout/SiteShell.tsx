"use client";

import { useState } from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import Navigation from "@/components/layout/Navigation";
import NavigationOverlay from "@/components/layout/NavigationOverlay";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <CustomCursor />
      <Navigation onMenuOpen={() => setMenuOpen(true)} />
      <NavigationOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div id="main-content">{children}</div>
    </>
  );
}
