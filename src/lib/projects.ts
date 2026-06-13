import type { IconName } from "@/components/ui/Icon";
import type { WorkFilter } from "@/lib/constants";

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
      "End-to-end import platform for sourcing, quality control, and logistics — with a public consumer site and a full admin dashboard for operations.",
    shortDescription:
      "Import-from-China platform with consumer site and admin dashboard for sourcing, QC, and logistics.",
    tags: ["Next.js", "Laravel", "MySQL"],
    image: "/images/projects/maat.webp",
    imageFit: "contain",
    imageBackground: "#ffffff",
    role: "Technical Director & Full Stack Engineer",
    timeline: "2024 — Present",
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
      "MAAT Group is a dual-platform product for global import operations — connecting businesses with reliable suppliers in China through sourcing, quality control, and end-to-end logistics. The consumer site at maat.vip guides clients from idea to delivery with transparent cost estimation and import workflows.",
      "A secure, role-based admin dashboard powers internal operations: product catalogs, quotations, order and transfer management, client and supplier CRM, task tracking, inquiries, content publishing, and appointment scheduling with calendar views.",
      "As Technical Director, I led full stack delivery across both surfaces — unified Laravel APIs, role-based admin access, and a consumer experience optimized for trust, clarity, and conversion in cross-border trade.",
    ],
    architecture: [
      {
        icon: "hub",
        title: "Consumer Platform",
        description:
          "Public-facing site for import services, cost estimation, supplier discovery, and client onboarding — built for international audiences with multilingual support.",
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
    category: "SaaS / Search",
    filters: ["SaaS"],
    description:
      "An advanced visual search engine for developers, optimizing asset discovery through machine learning and intuitive indexing.",
    shortDescription:
      "AI-driven architectural visualization platform for modern interior designers.",
    tags: ["Next.js", "Laravel", "MySQL"],
    image: "/images/projects/lookfindr.webp",
    imageFit: "contain",
    role: "Team Lead",
    timeline: "2023 — 2025",
    status: "Live Release",
    sites: [
      { label: "Landing Page", url: "https://lookfindr.com/" },
      { label: "CRM", url: "https://app.lookfindr.com/" },
    ],
    overview: [
      "Lookfindr is a next-generation visual discovery platform designed for architectural curation. By leveraging proprietary computer vision models, the platform allows architects and designers to search through vast spatial databases using only visual semantics, bypassing traditional tagging limitations.",
      "As the Team Lead, I oversaw the end-to-end development of the core interface and search orchestration layer, ensuring a seamless bridge between complex data visualization and high-end editorial aesthetics.",
    ],
    architecture: [
      {
        icon: "hub",
        title: "Distributed Mesh",
        description:
          "Built on a microservices mesh that handles real-time visual indexing across three global data centers.",
      },
      {
        icon: "memory",
        title: "Neural Search",
        description:
          "Custom-trained CLIP variants optimized for recognizing spatial relationships and material textures.",
      },
    ],
    results: [
      { value: "40%", label: "Search Efficiency" },
      { value: "2.4s", label: "Avg. Latency" },
      { value: "120k", label: "Active Assets" },
    ],
    stack: ["React / Next.js", "Laravel", "MySQL", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "chiaka",
    title: "Chiaka",
    category: "E-commerce / Fashion",
    filters: ["E-commerce"],
    description:
      "High-end bespoke tailoring platform bridging traditional craftsmanship with a digital-first shopping experience.",
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
      "International Business Driving License portal providing global professional certification and learning management.",
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
      "E-commerce marketplace platform with product catalog management, secure checkout, and admin dashboards.",
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
      "Community-driven healthcare portal facilitating aid and medical resources for underserved regions.",
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
      "Advanced fire safety management system for industrial complexes with real-time sensor integration and risk maps.",
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
      "E-commerce platform with product catalog, cart, checkout, and order management for online retail.",
    tags: ["Next.js", "Laravel", "MySQL"],
    image: "/images/projects/order.webp",
    imageFit: "contain",
    sites: [{ label: "Live Site", url: "https://www.orderfs.com/" }],
  },
  {
    slug: "tamweel-misr",
    title: "Tamweel-Misr",
    category: "Fintech / Banking",
    filters: ["Fintech"],
    description:
      "Premium digital mortgage platform simplifying financing for residential and commercial real estate investments.",
    tags: ["React", "Laravel", "MySQL"],
    image: "/images/projects/tamweel-misr.webp",
    imageFit: "contain",
    imageBackground: "#000000",
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
  { company: "MAAT", role: "Technical Director & Full Stack Engineer", period: "Current", current: true },
  { company: "NAYA AL-ALAM", role: "Senior Tech Lead", period: "2023 - 2024", current: false },
  { company: "TechieSonic", role: "Frontend Architecture Specialist", period: "2022 - 2023", current: false },
  { company: "Techno Space", role: "Software Engineer", period: "2021 - 2022", current: false },
  { company: "eAswaaq Misr", role: "Junior Developer", period: "2020 - 2021", current: false },
  { company: "ITShare", role: "Internship & Research", period: "Early Days", current: false },
];

export const stats = [
  { value: "9", label: "Projects Delivered" },
  { value: "4+", label: "Years Experience" },
  { value: "2", label: "Teams Led" },
  { value: "MENA", label: "Expertise" },
] as const;
