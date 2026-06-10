export const SITE = {
  name: "Omar Henidi",
  nameAr: "عمر هنيدي",
  title: "Technical Director & Full Stack Engineer",
  description:
    "Omar Henidi (عمر هنيدي) — Technical Director and Full Stack Engineer based in Cairo, Egypt. Portfolio, projects, and contact for Omar Henidi across LinkedIn, GitHub, Instagram, and X.",
  seoDescription:
    "Official portfolio of Omar Henidi (عمر هنيدي) — Technical Director & Full Stack Engineer in Cairo, Egypt. View projects, experience, and connect on LinkedIn, GitHub, Instagram, and X.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://omarhenidi.com",
  email: "omarhenidi@gmail.com",
  phone: "+201004753538",
  location: "Egypt, Cairo",
  availability: "Open for new projects — H2 2026",
  socialUsername: "omarhenidi",
  givenName: "Omar",
  familyName: "Henidi",
  alternateNames: ["عمر هنيدي", "Omar Henidi", "عمر هنيدى"] as const,
  socialProfiles: [
    "https://www.linkedin.com/in/omarhenidi",
    "https://x.com/omarhenidi",
    "https://twitter.com/omarhenidi",
    "https://www.instagram.com/omarhenidi",
    "https://github.com/omarhenidi",
  ],
  resumeUrl: "https://www.linkedin.com/in/omarhenidi",
} as const;

export const SOCIAL_USERNAME = SITE.socialUsername;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: `https://www.linkedin.com/in/${SOCIAL_USERNAME}` },
  { label: "Twitter", href: `https://x.com/${SOCIAL_USERNAME}` },
  { label: "Instagram", href: `https://www.instagram.com/${SOCIAL_USERNAME}` },
  { label: "GitHub", href: `https://github.com/${SOCIAL_USERNAME}` },
] as const;

export const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const MENU_LINKS: {
  number: string;
  label: string;
  href: string;
  external?: boolean;
}[] = [
  { number: "01", label: "Work", href: "/work" },
  { number: "02", label: "About", href: "/about" },
  { number: "03", label: "Contact", href: "/contact" },
  { number: "04", label: "Resume", href: SITE.resumeUrl, external: true },
];

export const WORK_FILTERS = [
  "All Projects",
  "SaaS",
  "E-commerce",
  "Fintech",
  "EdTech",
  "Healthcare",
  "Industrial",
] as const;

export type WorkFilter = (typeof WORK_FILTERS)[number];

export const CURRENT_YEAR = new Date().getFullYear();
