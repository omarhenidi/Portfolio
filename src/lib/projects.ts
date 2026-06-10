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
  repoUrl?: string;
  overview?: string[];
  architecture?: { icon: IconName; title: string; description: string }[];
  results?: { value: string; label: string }[];
  stack?: string[];
};

export const projects: Project[] = [
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
    image: "/images/projects/lookfindr.png",
    imageFit: "contain",
    imageBackground: "#ffffff",
    role: "Team Lead",
    timeline: "2023 — 2025",
    status: "Live Release",
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
    image: "/images/projects/chiaka.png",
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
    image: "/images/projects/ibdl.jpg",
    imageFit: "contain",
    imageBackground: "#ffffff",
  },
  {
    slug: "shopisonic",
    title: "Shopisonic",
    category: "E-commerce / Tech",
    filters: ["E-commerce"],
    description:
      "E-commerce marketplace platform with product catalog management, secure checkout, and admin dashboards.",
    tags: ["React", "Laravel", "MySQL"],
    image: "/images/projects/shopisonic.png",
    imageFit: "contain",
    imageBackground: "#ffffff",
  },
  {
    slug: "shuaa-alamal",
    title: "Shuaa-Alamal",
    category: "Healthcare / NGO",
    filters: ["Healthcare"],
    description:
      "Community-driven healthcare portal facilitating aid and medical resources for underserved regions.",
    tags: ["Next.js", "Laravel", "MySQL"],
    image: "/images/projects/shuaa-alamal.png",
    imageFit: "contain",
    imageBackground: "#ffffff",
  },
  {
    slug: "gefires",
    title: "Gefires",
    category: "Industrial / Safety",
    filters: ["Industrial"],
    description:
      "Advanced fire safety management system for industrial complexes with real-time sensor integration and risk maps.",
    tags: ["React", "Laravel", "MySQL"],
    image: "/images/projects/gefires.png",
    imageFit: "contain",
    imageBackground: "#000000",
  },
  {
    slug: "order",
    title: "Order",
    category: "Logistics / SaaS",
    filters: ["SaaS"],
    description:
      "B2B logistics platform streamlining inventory management and global shipping routes through automated workflows.",
    tags: ["Next.js", "Laravel", "MySQL"],
    image: "/images/projects/order.png",
    imageFit: "contain",
    imageBackground: "#000000",
  },
  {
    slug: "tamweel-misr",
    title: "Tamweel-Misr",
    category: "Fintech / Banking",
    filters: ["Fintech"],
    description:
      "Premium digital mortgage platform simplifying financing for residential and commercial real estate investments.",
    tags: ["React", "Laravel", "MySQL"],
    image: "/images/projects/tamweel-misr.png",
    imageFit: "contain",
    imageBackground: "#000000",
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
  { value: "8", label: "Projects Delivered" },
  { value: "4+", label: "Years Experience" },
  { value: "2", label: "Teams Led" },
  { value: "MENA", label: "Expertise" },
] as const;
