import { Play } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { LogoMark } from "@/components/layout/logo";

function DotGrid(): React.ReactElement {
  return (
    <div
      className="absolute top-8 right-4 hidden grid-cols-5 gap-2.5 md:grid"
      aria-hidden="true"
    >
      {Array.from({ length: 15 }, (_, index) => (
        <span key={index} className="bg-olive-light size-1.5 rounded-full" />
      ))}
    </div>
  );
}

export function Hero(): React.ReactElement {
  return (
    <section
      id="inicio"
      className="bg-cream relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div>
          <h1 className="text-charcoal max-w-xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.4rem] lg:leading-[1.15]">
            Creamos soluciones <span className="text-olive">digitales</span> que
            impulsan tu negocio.
          </h1>
          <p className="text-muted mt-5 max-w-lg text-base leading-7">
            Diseñamos y construimos productos web y mobile con foco en
            resultados: experiencia clara, tecnología sólida y una marca que se
            siente profesional.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#servicios" variant="charcoal">
              Conoce nuestros servicios
            </Button>
            <Button href="#sobre-nosotros" variant="outline">
              <Play className="fill-charcoal size-4" aria-hidden="true" />
              Ver cómo trabajamos
            </Button>
          </div>
          <ul className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-8">
            {site.heroPills.map((pill) => {
              const Icon = pill.icon;
              return (
                <li
                  key={pill.label}
                  className="text-charcoal/80 flex items-center gap-2.5 text-sm"
                >
                  <span className="bg-olive/10 text-olive inline-flex size-8 items-center justify-center rounded-full">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  {pill.label}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative flex flex-col items-center">
          <DotGrid />
          <LogoMark className="h-56 w-48 sm:h-64 sm:w-56" />
          <p className="text-olive mt-6 text-3xl font-bold tracking-[0.18em]">
            COMVELZ
          </p>
          <p className="text-olive/80 mt-1 text-xs font-medium tracking-[0.35em]">
            - AGENCY -
          </p>
        </div>
      </Container>
    </section>
  );
}
