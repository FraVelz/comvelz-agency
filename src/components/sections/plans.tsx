import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { PlanCard } from "@/components/sections/plan-card";

export function Plans(): React.ReactElement {
  const copy = site.plansSection;

  return (
    <section id="planes" className="bg-cream py-20 lg:py-24">
      <Container>
        <PlansHeader />
        <PlansGrid />
        <p className="text-muted mt-8 text-center text-sm leading-6">
          {copy.disclaimer}
        </p>
      </Container>
    </section>
  );
}

function PlansGrid(): React.ReactElement {
  return (
    <ul className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
      {site.plans.map((plan) => (
        <li key={plan.id} className="flex">
          <PlanCard plan={plan} />
        </li>
      ))}
    </ul>
  );
}

function PlansHeader(): React.ReactElement {
  const copy = site.plansSection;

  return (
    <header className="mx-auto max-w-2xl text-center">
      <p className="text-olive text-xs font-semibold tracking-[0.22em]">
        {copy.eyebrow}
      </p>
      <h2 className="text-charcoal mt-3 text-3xl font-bold tracking-tight">
        {copy.heading}
      </h2>
      <p className="text-muted mt-4 text-sm leading-6">{copy.intro}</p>
    </header>
  );
}
