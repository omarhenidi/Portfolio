"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandMark from "@/components/ui/BrandMark";
import Icon from "@/components/ui/Icon";
import { NAV_LINKS } from "@/lib/constants";
import { isActivePath, isHomePath } from "@/lib/paths";

type NavigationProps = {
  onMenuOpen?: () => void;
};

export default function Navigation({ onMenuOpen }: NavigationProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = isHomePath(pathname);

  useEffect(() => {
    const updateScrollState = () => {
      setScrolled(window.scrollY > 8);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, [pathname]);

  const headerSurfaceClass =
    isHome && !scrolled
      ? "border-transparent bg-transparent"
      : "border-outline-variant bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70";

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${headerSurfaceClass}`}
    >
      <nav
        className="mx-auto grid h-16 max-w-[1600px] grid-cols-[1fr_auto] items-center px-6 md:h-[72px] md:grid-cols-[1fr_auto_1fr] md:px-margin-desktop"
        aria-label="Main navigation"
      >
        <BrandMark className="justify-self-start" />

        <ul className="hidden items-center gap-stack-lg md:flex md:justify-self-center">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActivePath(pathname, href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-ui text-ui-label uppercase tracking-widest transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-container ${
                    active
                      ? "border-b border-primary pb-1 text-primary"
                      : "nav-link text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-end gap-3 md:col-start-3 md:gap-4">
          <Link
            href="/contact"
            className="gradient-button whitespace-nowrap px-4 py-2 font-ui text-[12px] uppercase tracking-widest text-on-primary transition-all duration-300 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container sm:px-5 sm:py-2.5 sm:text-ui-label md:px-6 md:py-3"
          >
            Let&apos;s Talk
          </Link>
          <button
            type="button"
            onClick={onMenuOpen}
            className="flex h-10 w-10 items-center justify-center text-on-surface-variant transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container md:hidden"
            aria-label="Open menu"
          >
            <Icon name="menu" size={24} strokeWidth={1.5} />
          </button>
        </div>
      </nav>
    </header>
  );
}
