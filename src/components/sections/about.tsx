import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function About(): React.ReactElement {
  return (
    <section
      id="sobre-nosotros"
      className="bg-charcoal py-20 text-white lg:py-24"
    >
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            Sobre Nosotros: Pasión por la tecnología, compromiso con tu éxito
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-white/70">
            Somos un equipo pequeño y cercano. Entendemos el negocio antes de
            escribir código, y medimos el trabajo por el impacto: más claridad,
            más conversiones y una presencia digital que se sostiene.
          </p>
          <Button href="#contacto" variant="outlineLight" className="mt-8">
            Conócenos más
          </Button>
        </div>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-10">
          {site.stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <li key={stat.label} className="flex flex-col items-start gap-3">
                <Icon className="text-olive-light size-6" aria-hidden="true" />
                <p className="text-xs tracking-[0.16em] text-white/55 uppercase">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold tracking-tight">
                  {stat.value}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
