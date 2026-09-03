"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";

export function MobileNav(): React.ReactElement {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKey = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="text-charcoal inline-flex size-10 items-center justify-center rounded-xl"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>
      {open ? (
        <div
          id="mobile-menu"
          className="bg-cream absolute inset-x-0 top-full border-b border-black/5 px-5 py-6 shadow-lg"
        >
          <nav aria-label="Principal móvil" className="flex flex-col gap-4">
            {site.nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={cn("text-charcoal text-base font-medium")}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              href="#contacto"
              variant="olive"
              onClick={() => setOpen(false)}
            >
              Hablemos
            </Button>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
