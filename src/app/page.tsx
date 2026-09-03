import { About } from "@/components/sections/about";
import { ContactCta } from "@/components/sections/contact-cta";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";

export default function Home(): React.ReactElement {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Projects />
      <ContactCta />
    </main>
  );
}
