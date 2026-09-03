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

export interface PlanItem {
  id: string;
  name: string;
  description: string;
  examples: string[];
  priceUsd: number;
  maintenanceUsd: number;
  featured: boolean;
  advantages: string[];
  technical: string[];
  maintenanceIncludes: string[];
  ctaLabel: string;
}

export interface PlansSectionCopy {
  eyebrow: string;
  heading: string;
  intro: string;
  disclaimer: string;
  examplesLabel: string;
  advantagesLabel: string;
  technicalLabel: string;
  maintenanceLabel: string;
  maintenanceOptionalLabel: string;
  featuredBadge: string;
  detailsCta: string;
  detailsCloseLabel: string;
  detailsIntro: string;
  detailsProjectLabel: string;
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
  plansSection: PlansSectionCopy;
  plans: PlanItem[];
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
    { id: "planes", href: "#planes", label: "Planes" },
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
  plansSection: {
    eyebrow: "PLANES",
    heading: "Planes web en USD",
    intro:
      "El sitio es un pago único. El mantenimiento es mensual y opcional: hosting, copias de seguridad, parches y cambios menores.",
    disclaimer:
      "Precios desde, en USD. El alcance y el mantenimiento se confirman por correo.",
    examplesLabel: "Ideal para",
    advantagesLabel: "Ventajas",
    technicalLabel: "Incluye (técnico)",
    maintenanceLabel: "Mantenimiento mensual",
    maintenanceOptionalLabel: "Mantenimiento opcional",
    featuredBadge: "Recomendado",
    detailsCta: "Ver detalles",
    detailsCloseLabel: "Cerrar",
    detailsIntro:
      "Qué incluye el sitio y el mantenimiento mensual, en concreto.",
    detailsProjectLabel: "Qué incluye el sitio",
  },
  plans: [
    {
      id: "landing",
      name: "Landing",
      description:
        "Una sola página para que te encuentren, entiendan qué ofreces y te escriban.",
      examples: [
        "Restaurante o café",
        "Consultorio",
        "Evento o conferencia",
        "Campaña de lanzamiento",
        "Freelancer o portafolio",
      ],
      priceUsd: 400,
      maintenanceUsd: 29,
      featured: false,
      advantages: [
        "Inversión inicial más baja",
        "Un solo mensaje y un solo CTA",
        "Se publica sin armar un sitio grande",
        "Mantenimiento liviano",
      ],
      technical: [
        "1 página responsive",
        "Formulario o botón a WhatsApp",
        "SEO básico (title, meta, sitemap)",
        "Analítica",
        "Listo para publicar",
      ],
      maintenanceIncludes: [
        "Hosting y SSL",
        "Copias de seguridad",
        "Parches de seguridad",
        "Hasta 1 cambio menor de texto o imagen al mes",
        "Soporte por correo",
      ],
      ctaLabel: "Solicitar este plan",
    },
    {
      id: "corporativo",
      name: "Sitio corporativo",
      description:
        "Sitio de varias páginas para presentar la marca, los servicios y cómo contactarte.",
      examples: [
        "Clínica o centro de salud",
        "Despacho o estudio",
        "Constructora o inmobiliaria",
        "Academia o centro de formación",
        "PYME de varios servicios",
      ],
      priceUsd: 1200,
      maintenanceUsd: 59,
      featured: true,
      advantages: [
        "Más confianza de marca",
        "Varios servicios en un solo sitio",
        "Mejor base para SEO",
        "Se puede ampliar después (blog o landing extra)",
      ],
      technical: [
        "Hasta 6 páginas/secciones",
        "Menú y estructura de contenidos",
        "SEO on-page por página",
        "Analítica",
        "Integración WhatsApp o correo",
      ],
      maintenanceIncludes: [
        "Hosting y SSL",
        "Copias de seguridad",
        "Parches",
        "Hasta 2 cambios menores al mes",
        "Soporte por correo",
        "Revisión de formularios y analítica",
      ],
      ctaLabel: "Solicitar este plan",
    },
    {
      id: "ecommerce",
      name: "E-commerce / a medida",
      description:
        "Tienda o plataforma para vender en línea, con catálogo, pagos y pedidos.",
      examples: [
        "Tienda de moda o accesorios",
        "Alimentos o gourmet",
        "Ferretería o catálogo B2B",
        "Marca que ya vende en redes y quiere checkout propio",
      ],
      priceUsd: 2500,
      maintenanceUsd: 99,
      featured: false,
      advantages: [
        "Ventas sin depender solo de redes",
        "Pagos y pedidos en un flujo",
        "El catálogo puede crecer",
        "El mantenimiento cubre lo crítico de la tienda",
      ],
      technical: [
        "Catálogo, carrito y checkout",
        "Pagos en línea",
        "Fichas de producto (fotos, precio, stock)",
        "Gestión de pedidos",
        "Alcance cerrado en la propuesta (el $2,500 es un piso)",
      ],
      maintenanceIncludes: [
        "Hosting y SSL",
        "Copias de seguridad",
        "Parches y actualizaciones de tienda/pagos",
        "Hasta 3 cambios menores al mes",
        "Soporte por correo",
        "Revisión de checkout",
      ],
      ctaLabel: "Solicitar este plan",
    },
  ],
};
