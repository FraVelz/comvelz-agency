import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";

export function Footer(): React.ReactElement {
  return (
    <footer className="bg-charcoal text-white">
      <Container className="flex flex-col items-center gap-6 py-6 lg:flex-row lg:justify-between">
        <Logo className="text-white" markClassName="h-7 w-6" />
        <nav
          aria-label="Pie de página"
          className="flex flex-wrap justify-center gap-5 text-sm text-white/70"
        >
          {site.nav.map((item) => (
            <a key={item.id} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <p className="text-center text-xs text-white/55">
          © 2026 {site.name}. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
