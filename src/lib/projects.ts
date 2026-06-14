import type { IconName } from "@/components/ui/Icon";
import { SITE, type WorkFilter } from "@/lib/constants";

export type Project = {
  slug: string;
  title: string;
  category: string;
  filters: Exclude<WorkFilter, "All Projects">[];
  description: string;
  shortDescription?: string;
  tags: string[];
  image: string;
  imageFit?: "cover" | "contain";
  imageBackground?: string;
  role?: string;
  timeline?: string;
  status?: string;
  demoUrl?: string;
  adminDemoUrl?: string;
  sites?: { label: string; url: string }[];
  privateSites?: { label: string }[];
  dashboardFeatures?: string[];
  repoUrl?: string;
  overview?: string[];
  architecture?: { icon: IconName; title: string; description: string }[];
  results?: { value: string; label: string }[];
  stack?: string[];
};

const DEFAULT_IMAGE_BACKGROUND = "#ffffff";

export function getProjectImageBackground(project: Project): string {
  return project.imageBackground ?? DEFAULT_IMAGE_BACKGROUND;
}

export const projects: Project[] = [
  {
    slug: "maat",
    title: "MAAT Group",
    category: "Sourcing / Logistics / SaaS",
    filters: ["SaaS"],
    description:
      "Import platform for sourcing, quality control, and logistics, with a public site and an admin dashboard for operations.",
    shortDescription:
      "Import-from-China platform with consumer site and admin dashboard for sourcing, QC, and logistics.",
    tags: ["Next.js", "Laravel", "MySQL"],
    image: "/images/projects/maat.webp",
    imageFit: "contain",
    imageBackground: "#ffffff",
    role: "Technical Team Lead",
    timeline: "Feb 2025 - Present",
    status: "Live Release",
    sites: [{ label: "Consumer Site", url: "https://maat.vip/" }],
    privateSites: [{ label: "Admin Dashboard" }],
    dashboardFeatures: [
      "Dashboard",
      "Products",
      "Quotations",
      "Orders",
      "Transfers",
      "Clients",
      "Suppliers",
      "Admins",
      "Tasks",
      "Inquiries",
      "Blogs",
      "Appointments",
      "Calendar",
    ],
    overview: [
      "MAAT Group helps businesses import from China. The public site at maat.vip walks clients through sourcing, quality control, logistics, and cost estimates. The admin dashboard handles the day-to-day work: products, quotes, orders, clients, suppliers, and more.",
      "As Technical Team Lead, I lead enterprise system setup and deployment, work with other teams to integrate solutions, and keep both platforms stable, fast, and secure.",
    ],
    architecture: [
      {
        icon: "hub",
        title: "Consumer Platform",
        description:
          "Public site for import services, cost estimates, supplier discovery, and client onboarding, with multilingual support.",
      },
      {
        icon: "memory",
        title: "Admin Dashboard",
        description:
          "Operations hub with modular access to products, quotations, orders, transfers, CRM, tasks, inquiries, blogs, appointments, and calendar management.",
      },
    ],
    results: [
      { value: "1k+", label: "Worldwide Clients" },
      { value: "13", label: "Dashboard Modules" },
      { value: "2", label: "Live Platforms" },
    ],
    stack: ["Next.js", "Laravel", "MySQL", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    slug: "lookfindr",
    title: "Lookfindr",
    category: "SaaS / CRM",
    filters: ["SaaS"],
    description:
      "CRM and SaaS platform for salons and spas, with online booking, staff management, payments, and a full admin system.",
    shortDescription:
      "Salon and spa management platform with CRM, booking, and e-commerce.",
    tags: ["Next.js", "Laravel", "MySQL"],
    image: "/images/projects/lookfindr.webp",
    imageFit: "contain",
    role: "Full Stack Team Lead",
    timeline: "Sep 2023 - Oct 2025",
    status: "Live Release",
    sites: [
      { label: "Landing Page", url: "https://lookfindr.com/" },
      { label: "CRM", url: "https://app.lookfindr.com/" },
    ],
    overview: [
      "Lookfindr is a full-stack salon and spa management platform. We built Laravel APIs and Next.js apps for consumers and salon staff, covering bookings, services, and payments.",
      "The CRM brings together operations, finance, inventory, analytics, and customer engagement, with real-time online booking and admin control. As Full Stack Team Lead at NAYA AL-ALAM, I led this work from start to finish.",
    ],
    architecture: [
      {
        icon: "hub",
        title: "Consumer & Salon Apps",
        description:
          "Laravel APIs and Next.js interfaces for bookings, services, staff, and payments.",
      },
      {
        icon: "memory",
        title: "CRM & Admin",
        description:
          "Operations, finance, inventory, analytics, and customer tools in one admin dashboard.",
      },
    ],
    results: [
      { value: "2", label: "Live Apps" },
      { value: "5+", label: "CRM Modules" },
      { value: "Live", label: "Online Booking" },
    ],
    stack: ["Next.js", "Laravel", "MySQL", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "chiaka",
    title: "Chiaka",
    category: "E-commerce / Fashion",
    filters: ["E-commerce"],
    description:
      "Online tailoring platform for made-to-measure orders and a smooth checkout flow.",
    tags: ["React", "Laravel", "MySQL"],
    image: "/images/projects/chiaka.webp",
    imageFit: "contain",
    imageBackground: "#333333",
  },
  {
    slug: "ibdl",
    title: "IBDL",
    category: "EdTech / Certification",
    filters: ["EdTech"],
    description:
      "Portal for the International Business Driving License certification and learning management.",
    tags: ["Next.js", "Laravel", "MySQL"],
    image: "/images/projects/ibdl.webp",
    imageFit: "contain",
    sites: [{ label: "Live Site", url: "https://ibdl.net/" }],
  },
  {
    slug: "shopisonic",
    title: "Shopisonic",
    category: "E-commerce / Tech",
    filters: ["E-commerce"],
    description:
      "E-commerce marketplace with product catalog, checkout, and admin tools.",
    tags: ["React", "Laravel", "MySQL"],
    image: "/images/projects/shopisonic.webp",
    imageFit: "contain",
    sites: [{ label: "Live Site", url: "https://shopisonic.com/" }],
  },
  {
    slug: "shuaa-alamal",
    title: "Shuaa-Alamal",
    category: "Healthcare / NGO",
    filters: ["Healthcare"],
    description:
      "Healthcare portal that helps communities access aid and medical resources.",
    tags: ["Next.js", "Laravel", "MySQL"],
    image: "/images/projects/shuaa-alamal.webp",
    imageFit: "contain",
    sites: [{ label: "Live Site", url: "https://www.shuaa-alamal.com/" }],
  },
  {
    slug: "gefires",
    title: "Gefires",
    category: "Industrial / Safety",
    filters: ["Industrial"],
    description:
      "Fire safety management for industrial sites, with sensor data and risk mapping.",
    tags: ["React", "Laravel", "MySQL"],
    image: "/images/projects/gefires.webp",
    imageFit: "contain",
    sites: [{ label: "Live Site", url: "https://gefires.com/" }],
  },
  {
    slug: "order",
    title: "Order",
    category: "E-commerce",
    filters: ["E-commerce"],
    description:
      "E-commerce site with catalog, cart, checkout, and order management.",
    tags: ["React", "Laravel", "MySQL"],
    image: "/images/projects/order.webp",
    imageFit: "contain",
    role: "Full Stack Engineer",
    timeline: "Oct 2022 - Feb 2023",
    sites: [{ label: "Live Site", url: "https://www.orderfs.com/" }],
  },
  {
    slug: "tamweel-misr",
    title: "Tamweel-Misr",
    category: "Fintech / Banking",
    filters: ["Fintech"],
    description:
      "Digital mortgage platform for residential and commercial property financing.",
    tags: ["React", "Laravel", "MySQL"],
    image: "/images/projects/tamweel-misr.webp",
    imageFit: "contain",
    imageBackground: "#000000",
    role: "Full Stack Engineer (Internship)",
    timeline: "Jul 2022 - Sep 2022",
    sites: [{ label: "Products", url: "https://easwaaqmisr.com/products/" }],
  },
];

export function projectMatchesFilter(project: Project, filter: WorkFilter): boolean {
  if (filter === "All Projects") return true;
  return project.filters.includes(filter);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export const featuredProjects = projects.slice(0, 4);

export const experience = [
  { company: "MAAT", role: "Technical Team Lead", period: "Feb 2025 - Present", current: true },
  { company: "NAYA AL-ALAM", role: "Full Stack Team Lead", period: "Sep 2023 - Oct 2025", current: false },
  { company: "TechieSonic", role: "Full Stack Engineer", period: "Feb 2023 - Oct 2023", current: false },
  { company: "Techno Space", role: "Mentor", period: "Feb 2023 - Apr 2023", current: false },
  { company: "Techno Space", role: "Full Stack Engineer", period: "Oct 2022 - Feb 2023", current: false },
  { company: "eAswaaq Misr", role: "Full Stack Engineer (Internship)", period: "Jul 2022 - Sep 2022", current: false },
  { company: "ITShare", role: "Full Stack Engineer (Internship)", period: "May 2021 - Nov 2021", current: false },
];

export const stats = [
  { value: "9", label: "Projects Delivered" },
  { value: SITE.yearsExperience, label: "Years Experience" },
  { value: "3", label: "Teams Led" },
  { value: "MENA", label: "Expertise" },
] as const;
