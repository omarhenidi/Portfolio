/** Career start: ITShare internship (May 2021). Used for auto-incrementing years of experience. */
export const CAREER_START_YEAR = 2021;
export const CAREER_START_MONTH = 5;

function getYearsExperience(referenceDate = new Date()): string {
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
  title: "Technical Director & Full Stack Engineer",
  heroTagline: "Building and leading scalable web products.",
  yearsExperience,
  seoDescription:
    "Portfolio of Omar Henidi (عمر هنيدي), Technical Director and Full Stack Engineer in Cairo, Egypt. Projects, work history, and links to LinkedIn, GitHub, Instagram, and X.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://omarhenidi.com",
  email: "omarhenidi@gmail.com",
  phone: "+201004753538",
  location: "Cairo, Egypt",
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
  image: "/images/portrait.jpg",
  imageWebp: "/images/portrait.webp",
  imageWebp2x: "/images/portrait-2x.webp",
  ogImage: "/og-image.png",
  icon: "/icon.png",
  imageWidth: 682,
  imageHeight: 1024,
  imageWidth2x: 1364,
} as const;

export const PAGE_COPY = {
  aboutDescription: `${SITE.name} (${SITE.nameAr}), ${SITE.title} in ${SITE.location}. Full stack product work, technical strategy, and team leadership across the MENA region.`,
  workDescription: `Selected projects by ${SITE.name} (${SITE.nameAr}): SaaS, e-commerce, fintech, and EdTech work as ${SITE.title}.`,
  contactDescription: `Get in touch with ${SITE.name} (${SITE.nameAr}), ${SITE.title}, for projects in Cairo and worldwide.`,
  contactIntro:
    "Working on something and need technical leadership or hands-on full stack engineering? I'm open to new projects. Send a message and tell me what you're building.",
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
