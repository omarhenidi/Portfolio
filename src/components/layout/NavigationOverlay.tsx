"use client";

import Link from "next/link";
import { useEffect } from "react";
import BrandMark from "@/components/ui/BrandMark";
import Icon from "@/components/ui/Icon";
import { MENU_LINKS, SITE, SOCIAL_LINKS } from "@/lib/constants";

type NavigationOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export default function NavigationOverlay({ open, onClose }: NavigationOverlayProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex h-[100dvh] w-full flex-col overflow-hidden bg-hero-band"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <header className="flex h-16 w-full shrink-0 items-center justify-between border-b border-outline-variant/20 px-6 md:h-[72px] md:px-margin-desktop">
        <BrandMark onClick={onClose} />
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="group flex h-10 w-10 items-center justify-center transition-transform duration-500 hover:rotate-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
        >
          <Icon
            name="close"
            size={32}
            strokeWidth={1.25}
            className="text-on-surface-variant transition-colors group-hover:text-primary"
          />
        </button>
      </header>

      <section className="flex flex-1 items-center justify-center overflow-y-auto px-6 py-stack-lg md:px-margin-desktop">
        <nav
          className="flex w-full max-w-2xl flex-col items-center gap-stack-lg text-center"
          aria-label="Mobile navigation"
        >
          {MENU_LINKS.map(({ number, label, href, external }, index) => {
            const className =
              "nav-link-item group flex flex-col items-center gap-2 opacity-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-container";
            const style = {
              animation: `fadeSlideIn 0.8s cubic-bezier(0.19, 1, 0.22, 1) ${100 * index + 300}ms forwards`,
            };
            const content = (
              <>
                <span className="link-number font-ui text-ui-label text-outline opacity-40 transition-all duration-300">
                  {number}
                </span>
                <span className="link-text font-display text-display-lg-mobile uppercase tracking-tighter text-on-surface md:text-display-xl">
                  {label}
                </span>
                <div className="line-animation mx-auto" />
              </>
            );

            if (external) {
              return (
                <a
                  key={href + label}
                  href={href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className={className}
                  style={style}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={href + label} href={href} onClick={onClose} className={className} style={style}>
                {content}
              </Link>
            );
          })}
        </nav>
      </section>

      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.03]">
        <span className="font-display text-[18vw] leading-none text-outline md:text-[320px]">MENU</span>
      </div>

      <footer className="flex w-full shrink-0 flex-col items-center justify-between gap-stack-md border-t border-outline-variant/20 px-6 py-stack-lg md:flex-row md:px-margin-desktop">
        <div className="flex flex-wrap justify-center gap-stack-lg">
          {SOCIAL_LINKS.slice(0, 3).map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="me noopener noreferrer"
              className="font-ui text-ui-label uppercase tracking-widest text-on-surface-variant transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${SITE.email}`}
          className="group flex items-center gap-2 font-ui text-ui-label uppercase tracking-widest text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
        >
          {SITE.email}
          <Icon
            name="arrow_outward"
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </footer>
    </div>
  );
}
