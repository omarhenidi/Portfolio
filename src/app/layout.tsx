import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display, Space_Grotesk } from "next/font/google";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import IdentityLinks from "@/components/seo/IdentityLinks";
import JsonLd from "@/components/seo/JsonLd";
import SiteShell from "@/components/layout/SiteShell";
import SkipLink from "@/components/layout/SkipLink";
import { SITE } from "@/lib/constants";
import {
  buildPageMetadata,
  defaultDescription,
  defaultTitle,
  identityGraphJsonLd,
  siteUrl,
} from "@/lib/seo";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...buildPageMetadata({
    title: defaultTitle,
    description: defaultDescription,
    path: "/",
  }),
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  title: {
    default: defaultTitle,
    template: `%s`,
  },
  authors: [
    { name: SITE.name, url: siteUrl },
    { name: SITE.nameAr, url: siteUrl },
  ],
  creator: `${SITE.name} (${SITE.nameAr})`,
  publisher: `${SITE.name} (${SITE.nameAr})`,
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/icon-1024.png", sizes: "1024x1024", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon-32.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className="dark">
      <head>
        <IdentityLinks />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} selection:bg-primary-container selection:text-on-primary-container`}
      >
        <GoogleAnalytics />
        <SkipLink />
        <JsonLd data={identityGraphJsonLd()} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
