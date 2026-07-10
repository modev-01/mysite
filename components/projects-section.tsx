"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projectFilters, projects } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";
import { GithubIcon } from "@/components/brand-icons";

export function ProjectsSection() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  return (
    <section id="projects" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="// معرض الأعمال"
          title="مشاريع مختارة"
          subtitle="نخبة من المشاريع التي عملت عليها، بتصاميم عصرية وأداء عالٍ وتقنيات حديثة."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {projectFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActive(filter.id)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                active === filter.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="group glass overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`لقطة من مشروع ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
                <span className="absolute right-4 top-4 rounded-full border border-primary/30 bg-background/70 px-3 py-1 font-mono text-xs text-primary backdrop-blur">
                  {project.categoryLabel}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2" dir="ltr">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                    >
                      {`[${tech}]`}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={project.demoUrl}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <ExternalLink className="size-4" />
                    عرض حي
                  </a>
                  <a
                    href={project.codeUrl}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <GithubIcon className="size-4" />
                    الكود
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
