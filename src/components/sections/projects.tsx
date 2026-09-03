import Image from "next/image";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Projects(): React.ReactElement {
  return (
    <section id="proyectos" className="bg-cream py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-olive text-xs font-semibold tracking-[0.22em]">
              PROYECTOS
            </p>
            <h2 className="text-charcoal mt-3 max-w-sm text-3xl font-bold tracking-tight">
              Algunos de nuestros trabajos recientes
            </h2>
          </div>
          <Button href="#contacto" variant="olive">
            Ver todos los proyectos
          </Button>
        </div>
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {site.projects.map((project) => (
            <li key={project.title}>
              <article>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(18,18,18,0.06)]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-charcoal mt-4 text-base font-semibold">
                  {project.title}
                </h3>
                <p className="text-muted mt-1 text-sm">{project.category}</p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
