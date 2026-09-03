import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CircleCheck,
  Code2,
  Cpu,
  Paintbrush,
  Rocket,
  Smartphone,
  Smile,
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

export interface SiteContent {
  name: string;
  shortName: string;
  email: string;
  description: string;
  nav: NavItem[];
  socials: SocialLink[];
  services: ServiceItem[];
  stats: StatItem[];
  projects: ProjectItem[];
  heroPills: { label: string; icon: LucideIcon }[];
}

export const site: SiteContent = {
  name: "Comvelz Agency",
  shortName: "COMVELZ",
  email: "Comvelz@outlook.com",
  description:
    "Agencia digital que crea sitios web, apps y experiencias de producto para impulsar negocios.",
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
      title: "Desarrollo Mobile",
      description:
        "Apps nativas o híbridas con una experiencia clara, estable y fácil de usar.",
      icon: Smartphone,
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
  stats: [
    { label: "Clientes", value: "10+", icon: Users },
    { label: "Proyectos", value: "20+", icon: Rocket },
    { label: "Experiencia", value: "2+ Años", icon: CircleCheck },
    { label: "Satisfacción", value: "100%", icon: Smile },
  ],
  projects: [
    {
      title: "Plataforma Educativa",
      category: "Desarrollo Web",
      image: "/images/projects/plataforma-educativa.webp",
      alt: "Dashboard oscuro de una plataforma educativa con cursos y métricas",
    },
    {
      title: "App de Productividad",
      category: "Desarrollo Mobile",
      image: "/images/projects/app-productividad.webp",
      alt: "Dos móviles mostrando una app de tareas y productividad",
    },
    {
      title: "Tienda Online",
      category: "Desarrollo Web",
      image: "/images/projects/tienda-online.webp",
      alt: "Tienda en línea de moda con catálogo de productos",
    },
  ],
};
