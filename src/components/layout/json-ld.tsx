import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

interface UnitPriceSpecification {
  "@type": "UnitPriceSpecification";
  price: number;
  priceCurrency: "USD";
  unitCode: "MON";
}

interface OfferJsonLd {
  "@type": "Offer";
  name: string;
  price: number;
  priceCurrency: "USD";
  description: string;
  priceSpecification?: UnitPriceSpecification;
}

interface OfferCatalogJsonLd {
  "@type": "OfferCatalog";
  name: string;
  itemListElement: OfferJsonLd[];
}

interface ProfessionalServiceJsonLd {
  "@context": "https://schema.org";
  "@type": "ProfessionalService";
  name: string;
  email: string;
  url: string;
  description: string;
  sameAs: string[];
  hasOfferCatalog: OfferCatalogJsonLd;
}

function buildOfferCatalog(): OfferCatalogJsonLd {
  return {
    "@type": "OfferCatalog",
    name: "Planes web",
    itemListElement: site.plans.flatMap((plan): OfferJsonLd[] => [
      {
        "@type": "Offer",
        name: plan.name,
        price: plan.priceUsd,
        priceCurrency: "USD",
        description: plan.description,
      },
      {
        "@type": "Offer",
        name: `Mantenimiento: ${plan.name}`,
        price: plan.maintenanceUsd,
        priceCurrency: "USD",
        description: site.plansSection.maintenanceOptionalLabel,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: plan.maintenanceUsd,
          priceCurrency: "USD",
          unitCode: "MON",
        },
      },
    ]),
  };
}

export function JsonLd(): React.ReactElement {
  const data: ProfessionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    email: site.email,
    url: getSiteUrl(),
    description: site.description,
    sameAs: site.socials.map((social) => social.href),
    hasOfferCatalog: buildOfferCatalog(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
