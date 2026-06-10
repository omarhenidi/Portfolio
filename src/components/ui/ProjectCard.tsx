import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import TechTag from "@/components/ui/TechTag";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  variant?: "bento" | "grid";
};

export default function ProjectCard({ project, variant = "grid" }: ProjectCardProps) {
  const imageFit = project.imageFit ?? "cover";
  const imageClass =
    imageFit === "contain"
      ? "h-full w-full object-contain p-6 md:p-10 transition-transform duration-700"
      : "h-full w-full object-cover transition-transform duration-700 ease-in-out";
  const bentoImageClass =
    imageFit === "contain"
      ? "card-img h-full w-full object-contain p-6 transition-transform duration-700"
      : "card-img h-full w-full object-cover transition-transform duration-700";

  if (variant === "bento") {
    return (
      <Link
        href={`/work/${project.slug}`}
        className="bento-card group overflow-hidden border border-outline-variant bg-surface-container-low"
      >
        <div
          className="aspect-video overflow-hidden border-b border-outline-variant bg-surface-container-low"
          style={project.imageBackground ? { backgroundColor: project.imageBackground } : undefined}
        >
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            className={bentoImageClass}
          />
        </div>
        <div className="p-stack-lg">
          <div className="mb-stack-md flex items-start justify-between">
            <h3 className="font-display text-headline-md text-on-surface">{project.title}</h3>
            <Icon
              name="arrow_outward"
              size={22}
              className="text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </div>
          <p className="mb-6 font-body text-body-md text-on-surface-variant">
            {project.shortDescription ?? project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <TechTag key={tag}>{tag}</TechTag>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      className="project-card group flex flex-col gap-stack-md border-outline-variant p-stack-lg md:border-b md:border-r"
    >
      <div
        className="aspect-[16/10] overflow-hidden border border-outline-variant bg-surface-container-low"
        style={project.imageBackground ? { backgroundColor: project.imageBackground } : undefined}
      >
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          className={`project-image ${imageClass}`}
        />
      </div>
      <div className="flex flex-col gap-stack-sm">
        <div className="flex items-center justify-between">
          <span className="font-mono text-tech-tag uppercase text-primary-container">{project.category}</span>
          <Icon
            name="arrow_outward"
            size={22}
            className="text-on-surface-variant transition-colors group-hover:text-primary"
          />
        </div>
        <h3 className="font-display text-headline-md">{project.title}</h3>
        <p className="line-clamp-2 font-body text-body-md text-on-surface-variant">{project.description}</p>
        <div className="mt-2 flex gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-surface-container-highest px-2 py-1 font-mono text-tech-tag text-on-surface-variant"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
