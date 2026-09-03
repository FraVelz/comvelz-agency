import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export function JsonLd(): React.ReactElement {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    email: site.email,
    url: getSiteUrl(),
    description: site.description,
    sameAs: site.socials.map((social) => social.href),
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
