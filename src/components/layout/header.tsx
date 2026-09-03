"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Header(): React.ReactElement {
  const [activeId, setActiveId] = useState("inicio");

  useEffect(() => {
    let cancelled = false;
    const elements = site.nav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        if (cancelled) {
          return;
        }

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      cancelled = true;
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  return (
    <header className="bg-cream/90 sticky top-0 z-50 border-b border-black/5 backdrop-blur-md">
      <Container className="relative flex h-[4.5rem] items-center">
        <Logo className="relative z-10" />
        <nav
          aria-label="Principal"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex"
        >
          {site.nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "text-charcoal/75 hover:text-charcoal relative text-sm transition-colors",
                activeId === item.id &&
                  "text-charcoal after:bg-olive after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="relative z-10 ml-auto flex items-center gap-2">
          <Button
            href="#contacto"
            variant="olive"
            className="hidden lg:inline-flex"
          >
            Hablemos
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
