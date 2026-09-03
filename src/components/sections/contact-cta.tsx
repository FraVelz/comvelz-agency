import { Mail } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/ui/social-icons";

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedinIcon,
} as const;

export function ContactCta(): React.ReactElement {
  const mailto = `mailto:${site.email}`;

  return (
    <section id="contacto" className="bg-cream pb-16">
      <Container>
        <div className="rounded-3xl bg-[#e8e7e1] px-6 py-10 sm:px-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-charcoal text-2xl font-bold tracking-tight sm:text-3xl">
                ¿Tienes un proyecto en mente?
              </h2>
              <Button href={mailto} variant="olive" className="mt-5">
                Hablemos de tu proyecto
              </Button>
            </div>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-12">
              <div>
                <p className="text-olive text-xs font-semibold tracking-[0.18em]">
                  CORREO
                </p>
                <a
                  href={mailto}
                  className="text-charcoal hover:text-olive mt-2 inline-flex items-center gap-2 text-sm"
                >
                  <Mail className="text-olive size-4" aria-hidden="true" />
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-olive text-xs font-semibold tracking-[0.18em]">
                  SÍGUENOS
                </p>
                <ul className="mt-3 flex gap-3">
                  {site.socials.map((social) => {
                    const Icon =
                      socialIcons[social.name as keyof typeof socialIcons];
                    return (
                      <li key={social.name}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="border-charcoal/15 text-charcoal hover:border-olive hover:text-olive inline-flex size-10 items-center justify-center rounded-full border transition-colors"
                        >
                          <Icon className="size-4" aria-hidden="true" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
