import type { Metadata } from "next";
import "./globals.css";
import { inter, jetbrainsMono, playfair, spaceGrotesk } from "@/lib/fonts";
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
  personHeadJsonLd,
  siteUrl,
} from "@/lib/seo";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

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
    icon: [{ url: SITE.icon, sizes: "512x512", type: "image/png" }],
    apple: [{ url: SITE.icon, sizes: "512x512", type: "image/png" }],
    shortcut: SITE.icon,
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className="dark" suppressHydrationWarning>
      <head>
        <IdentityLinks />
        <JsonLd data={personHeadJsonLd()} />
      </head>
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} selection:bg-primary-container selection:text-on-primary-container`}
      >
        <GoogleAnalytics />
        <SkipLink />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
