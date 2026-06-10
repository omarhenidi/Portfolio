import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const siteUrl = SITE.url;

export const defaultTitle = `${SITE.name} - ${SITE.nameAr}`;
export const defaultDescription = SITE.seoDescription;

export const personId = `${siteUrl}/#person`;
export const websiteId = `${siteUrl}/#website`;
export const profilePageId = `${siteUrl}/#profile`;

export const sameAsProfiles = [siteUrl, ...SITE.socialProfiles];

export const defaultKeywords = [
  SITE.name,
  SITE.nameAr,
  ...SITE.alternateNames,
  "Omar Henidi portfolio",
  "عمر هنيدي portfolio",
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

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteUrl).toString();
}

export function buildPageMetadata({
  title,
  description = defaultDescription,
  path = "/",
  image = "/og-image.png",
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
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
          alt: `${SITE.name} (${SITE.nameAr}) — ${SITE.title}`,
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

export function identityGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: SITE.name,
        givenName: SITE.givenName,
        familyName: SITE.familyName,
        alternateName: SITE.alternateNames,
        jobTitle: SITE.title,
        email: `mailto:${SITE.email}`,
        telephone: SITE.phone,
        url: siteUrl,
        image: absoluteUrl("/icon-1024.png"),
        nationality: {
          "@type": "Country",
          name: "Egypt",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cairo",
          addressCountry: "EG",
        },
        sameAs: sameAsProfiles,
        knowsAbout: [
          "Full Stack Engineering",
          "Technical Direction",
          "System Architecture",
          "React",
          "Next.js",
          "PHP Laravel",
          "MySQL",
          "Engineering Leadership",
        ],
        worksFor: {
          "@type": "Organization",
          name: "MAAT",
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: defaultTitle,
        alternateName: [SITE.name, SITE.nameAr],
        url: siteUrl,
        description: defaultDescription,
        inLanguage: ["en", "ar"],
        publisher: { "@id": personId },
        author: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: siteUrl,
        name: defaultTitle,
        description: defaultDescription,
        inLanguage: ["en", "ar"],
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
        about: { "@id": personId },
      },
    ],
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: SITE.name,
    givenName: SITE.givenName,
    familyName: SITE.familyName,
    alternateName: SITE.alternateNames,
    jobTitle: SITE.title,
    email: SITE.email,
    telephone: SITE.phone,
    url: siteUrl,
    image: absoluteUrl("/icon-1024.png"),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    sameAs: sameAsProfiles,
    knowsAbout: [
      "Full Stack Engineering",
      "Technical Direction",
      "System Architecture",
      "React",
      "Next.js",
      "PHP Laravel",
      "MySQL",
      "Engineering Leadership",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: defaultTitle,
    url: siteUrl,
    description: defaultDescription,
    inLanguage: ["en", "ar"],
    publisher: { "@id": personId },
    author: {
      "@type": "Person",
      "@id": personId,
      name: SITE.name,
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
      item: absoluteUrl(item.path),
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
    url: absoluteUrl(`/work/${project.slug}`),
    image: project.image.startsWith("http") ? project.image : absoluteUrl(project.image),
    author: {
      "@type": "Person",
      "@id": personId,
      name: SITE.name,
    },
    dateCreated: project.timeline?.split("—")[0]?.trim(),
  };
}
