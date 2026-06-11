"use client";

import { useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import type { WorkFilter } from "@/lib/constants";
import { WORK_FILTERS } from "@/lib/constants";
import { projectMatchesFilter, projects, type Project } from "@/lib/projects";

export default function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>("All Projects");

  const filtered = projects.filter((project) => projectMatchesFilter(project, activeFilter));

  return (
    <>
      <section
        className="mb-section-padding-mobile overflow-x-auto px-6 md:mb-section-padding-desktop md:px-margin-desktop md:no-scrollbar"
        aria-label="Project filters"
      >
        <div className="flex gap-stack-lg whitespace-nowrap border-b border-outline-variant pb-stack-md" role="tablist">
          {WORK_FILTERS.map((filter) => {
            const active = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveFilter(filter)}
                className={`font-ui text-ui-label uppercase tracking-widest transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-container ${
                  active
                    ? "-mb-stack-md border-b-2 border-primary-container pb-stack-md text-primary-container"
                    : "text-on-surface-variant hover:text-primary-container"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      <section
        className="mx-6 grid grid-cols-1 border-l border-t border-outline-variant md:mx-margin-desktop md:grid-cols-2"
        aria-live="polite"
        aria-label="Filtered projects"
      >
        {filtered.length > 0 ? (
          filtered.map((project: Project) => (
            <ProjectCard key={project.slug} project={project} variant="grid" />
          ))
        ) : (
          <p className="col-span-full p-stack-lg font-body text-body-md text-on-surface-variant">
            No projects match this category yet.
          </p>
        )}
      </section>
    </>
  );
}
