import Image from "next/image";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProjectMediaFrame } from "@/components/ui/project-media-frame";
import { ProjectPlaceholderCard } from "@/components/sections/project-placeholder-card";

export function Projects(): React.ReactElement {
  const isEmpty = site.projects.length === 0;
  const heading = isEmpty
    ? site.projectsEmpty.heading
    : site.projectsFilled.heading;
  const cta = isEmpty ? site.projectsEmpty.cta : site.projectsFilled.cta;

  return (
    <section id="proyectos" className="bg-cream py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-olive text-xs font-semibold tracking-[0.22em]">
              {site.projectsEyebrow}
            </p>
            <h2 className="text-charcoal mt-3 max-w-sm text-3xl font-bold tracking-tight">
              {heading}
            </h2>
          </div>
          <Button href={site.projectsCtaHref} variant="olive">
            {cta}
          </Button>
        </div>
        {isEmpty ? <ProjectsEmpty /> : <ProjectsGrid />}
      </Container>
    </section>
  );
}

function ProjectsEmpty(): React.ReactElement {
  return (
    <ul className="mt-12 grid gap-8 md:grid-cols-3">
      {site.projectsEmpty.placeholders.map((placeholder) => (
        <li key={placeholder.id}>
          <ProjectPlaceholderCard placeholder={placeholder} />
        </li>
      ))}
    </ul>
  );
}

function ProjectsGrid(): React.ReactElement {
  return (
    <ul className="mt-12 grid gap-8 md:grid-cols-3">
      {site.projects.map((project) => (
        <li key={project.title}>
          <article>
            <ProjectMediaFrame>
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className="object-cover"
              />
            </ProjectMediaFrame>
            <h3 className="text-charcoal mt-4 text-base font-semibold">
              {project.title}
            </h3>
            <p className="text-muted mt-1 text-sm">{project.category}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
