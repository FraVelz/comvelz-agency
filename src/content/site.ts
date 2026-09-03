import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Code2,
  Cpu,
  Paintbrush,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  id: string;
}

export interface SocialLink {
  name: string;
  href: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface ProjectItem {
  title: string;
  category: string;
  image: string;
  alt: string;
}

export interface ProjectsFilledCopy {
  heading: string;
  cta: string;
}

export type ProjectPlaceholderVariant = "landing" | "dashboard" | "shop";

export interface ProjectPlaceholder {
  id: string;
  title: string;
  category: string;
  variant: ProjectPlaceholderVariant;
}

export interface ProjectsEmptyCopy {
  heading: string;
  cta: string;
  placeholders: ProjectPlaceholder[];
}

export interface SiteContent {
  name: string;
  shortName: string;
  email: string;
  description: string;
  nav: NavItem[];
  socials: SocialLink[];
  services: ServiceItem[];
  stats: StatItem[];
  projectsEyebrow: string;
  projectsCtaHref: string;
  projectsFilled: ProjectsFilledCopy;
  projectsEmpty: ProjectsEmptyCopy;
  projects: ProjectItem[];
  heroPills: { label: string; icon: LucideIcon }[];
}

export const site: SiteContent = {
  name: "Comvelz Agency",
  shortName: "COMVELZ",
  email: "Comvelz@outlook.com",
  description:
    "Agencia digital que crea sitios web, agentes de IA y experiencias de producto para impulsar negocios.",
  nav: [
    { id: "inicio", href: "#inicio", label: "Inicio" },
    { id: "servicios", href: "#servicios", label: "Servicios" },
    { id: "sobre-nosotros", href: "#sobre-nosotros", label: "Sobre Nosotros" },
    { id: "proyectos", href: "#proyectos", label: "Proyectos" },
    { id: "contacto", href: "#contacto", label: "Contacto" },
  ],
  socials: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61594061279842",
      label: "Facebook de Comvelz Agency",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/comvelzagency/",
      label: "Instagram de Comvelz Agency",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/comvelz-agency-93264b433/",
      label: "LinkedIn de Comvelz Agency",
    },
  ],
  heroPills: [
    { label: "Enfoque en resultados", icon: Target },
    { label: "Diseño moderno", icon: Sparkles },
    { label: "Tecnología escalable", icon: Cpu },
  ],
  services: [
    {
      title: "Desarrollo Web",
      description:
        "Sitios y plataformas a medida, rápidos y listos para crecer con tu operación.",
      icon: Code2,
    },
    {
      title: "Agentes de IA",
      description:
        "Agentes y automatizaciones que atienden, resuelven y escalan procesos de tu negocio.",
      icon: Bot,
    },
    {
      title: "Diseño UI/UX",
      description:
        "Interfaces limpias y flujos que convierten: de la investigación al prototipo.",
      icon: Paintbrush,
    },
    {
      title: "Estrategia Digital",
      description:
        "Definimos el producto, el canal y las métricas para que la tecnología rinda.",
      icon: BarChart3,
    },
  ],
  // Pilares cualitativos, no métricas. Restaurar números solo con datos reales:
  // .cursor/rules/about-stats.mdc
  stats: [
    { label: "Equipo", value: "Cercano", icon: Users },
    { label: "Producto", value: "A medida", icon: Code2 },
    { label: "IA", value: "Agentes", icon: Bot },
    { label: "Foco", value: "Impacto", icon: Target },
  ],
  projectsEyebrow: "PROYECTOS",
  projectsCtaHref: "#contacto",
  projectsFilled: {
    heading: "Algunos de nuestros trabajos recientes",
    cta: "Ver todos los proyectos",
  },
  projectsEmpty: {
    heading: "Trabajos que podemos mostrar",
    cta: "Cuéntanos tu proyecto",
    placeholders: [
      {
        id: "slot-landing",
        title: "Próximamente",
        category: "En preparación",
        variant: "landing",
      },
      {
        id: "slot-dashboard",
        title: "Próximamente",
        category: "En preparación",
        variant: "dashboard",
      },
      {
        id: "slot-shop",
        title: "Próximamente",
        category: "En preparación",
        variant: "shop",
      },
    ],
  },
  // Vacío a propósito. Restaurar solo con proyectos reales:
  // .cursor/rules/projects-empty.mdc
  projects: [],
};
