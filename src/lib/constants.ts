/** Career start: ITShare internship (May 2021). Used for auto-incrementing years of experience. */
export const CAREER_START_YEAR = 2021;
export const CAREER_START_MONTH = 5;

export function getYearsExperience(referenceDate = new Date()): string {
  let years = referenceDate.getFullYear() - CAREER_START_YEAR;
  if (referenceDate.getMonth() + 1 < CAREER_START_MONTH) {
    years -= 1;
  }
  return `${Math.max(years, 1)}+`;
}

const yearsExperience = getYearsExperience();

export const SITE = {
  name: "Omar Henidi",
  nameAr: "عمر هنيدي",
  title: "Full Stack Engineer & Technical Team Lead",
  heroTagline: "Building and leading scalable web products.",
  yearsExperience,
  seoDescription:
    "Portfolio of Omar Henidi (عمر هنيدي), Full Stack Engineer and Technical Team Lead in Cairo, Egypt. Projects, work history, and links to LinkedIn, GitHub, Instagram, and X.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://omarhenidi.com",
  email: "omarhenidi@gmail.com",
  phone: "+201004753538",
  location: "Egypt, Cairo",
  availability: "Open for new projects, H2 2026",
  socialUsername: "omarhenidi",
  alternateNames: ["عمر هنيدي", "Omar Henidi", "عمر هنيدى"] as const,
  personSameAs: [
    "https://www.linkedin.com/in/omarhenidi",
    "https://www.instagram.com/omarhenidi",
    "https://x.com/omarhenidi",
    "https://github.com/omarhenidi",
  ],
  resumeUrl: "https://www.linkedin.com/in/omarhenidi",
  image: "/images/portrait.webp",
  ogImage: "/og-image.png",
  icon: "/icon.png",
  imageWidth: 682,
  imageHeight: 1024,
} as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: `https://www.linkedin.com/in/${SITE.socialUsername}` },
  { label: "Twitter", href: `https://x.com/${SITE.socialUsername}` },
  { label: "Instagram", href: `https://www.instagram.com/${SITE.socialUsername}` },
  { label: "GitHub", href: `https://github.com/${SITE.socialUsername}` },
] as const;

export const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const MENU_LINKS: {
  label: string;
  href: string;
  external?: boolean;
}[] = [
  ...NAV_LINKS,
  { label: "Resume", href: SITE.resumeUrl, external: true },
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
