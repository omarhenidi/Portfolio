import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const siteUrl = SITE.url;

export const defaultTitle = `${SITE.name} - ${SITE.nameAr}`;
export const defaultDescription = SITE.seoDescription;

export const personId = `${siteUrl}/#person`;

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteUrl).toString();
}

/** Canonical page URL with trailing slash (matches static export). */
export function absolutePageUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash =
    normalized === "/" ? "/" : normalized.endsWith("/") ? normalized : `${normalized}/`;
  return new URL(withSlash, siteUrl).toString();
}

export const sameAsProfiles = [absolutePageUrl("/"), ...SITE.personSameAs];

/** Person schema for `<head>` JSON-LD. */
export function personHeadJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: absolutePageUrl("/"),
    image: absoluteUrl(SITE.image),
    jobTitle: SITE.title,
    sameAs: [...SITE.personSameAs],
  };
}

export const defaultKeywords = [
  SITE.name,
  SITE.nameAr,
  ...SITE.alternateNames,
  "Omar Henidi",
  "عمر هنيدي",
  "Omar Henidi LinkedIn",
  "Omar Henidi GitHub",
  "Omar Henidi Instagram",
  "عمر هنيدي مهندس",
  "Full Stack Engineer",
  "Technical Director",
  "Full Stack Engineering",
  "Technical Leadership",
  "Backend Development",
  "Next.js",
  "React",
  "Laravel",
  "MySQL",
  "Engineering Leadership",
  "Portfolio",
  "Cairo",
  "Egypt",
  "MENA",
];

export function buildPageMetadata({
  title,
  description = defaultDescription,
  path = "/",
  image = SITE.ogImage,
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = absolutePageUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: defaultKeywords,
    applicationName: defaultTitle,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        ar: url,
        "x-default": url,
      },
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large" },
        },
    openGraph: {
      type: "website",
      locale: "en_US",
      alternateLocale: ["ar_EG"],
      url,
      siteName: defaultTitle,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE.name} (${SITE.nameAr}), ${SITE.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: `@${SITE.socialUsername}`,
      creator: `@${SITE.socialUsername}`,
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolutePageUrl(item.path),
    })),
  };
}

export function creativeWorkJsonLd(project: {
  title: string;
  description: string;
  slug: string;
  image: string;
  timeline?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: absolutePageUrl(`/work/${project.slug}`),
    image: project.image.startsWith("http") ? project.image : absoluteUrl(project.image),
    author: {
      "@type": "Person",
      "@id": personId,
      name: SITE.name,
    },
    dateCreated: project.timeline?.split(/\s[-–—]\s/)[0]?.trim(),
  };
}
