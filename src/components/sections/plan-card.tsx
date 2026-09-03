import { CircleCheck } from "lucide-react";
import { site, type PlanItem } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlanBulletList } from "@/components/sections/plan-bullet-list";
import { PlanDetailsDialog } from "@/components/sections/plan-details-dialog";
import { cn } from "@/lib/cn";
import { formatUsdFrom, formatUsdPerMonth } from "@/lib/format-usd";
import { planMailto } from "@/lib/plan-mailto";

interface PlanCardProps {
  plan: PlanItem;
}

export function PlanCard({ plan }: PlanCardProps): React.ReactElement {
  const copy = site.plansSection;

  return (
    <Card
      className={cn(
        "flex h-full w-full flex-col gap-5 p-6",
        plan.featured && "ring-olive ring-2",
      )}
    >
      <PlanCardHeader plan={plan} />
      <PlanExamples examples={plan.examples} />
      <PlanPrices
        priceUsd={plan.priceUsd}
        maintenanceUsd={plan.maintenanceUsd}
      />
      <PlanBulletList
        title={copy.advantagesLabel}
        items={plan.advantages}
        icon={CircleCheck}
      />
      <PlanCardActions plan={plan} />
    </Card>
  );
}

function PlanCardHeader({ plan }: PlanCardProps): React.ReactElement {
  return (
    <header>
      {plan.featured ? (
        <p className="bg-olive mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold text-white">
          {site.plansSection.featuredBadge}
        </p>
      ) : null}
      <h3 className="text-charcoal text-xl font-semibold tracking-tight">
        {plan.name}
      </h3>
      <p className="text-muted mt-2 text-sm leading-6">{plan.description}</p>
    </header>
  );
}

function PlanExamples({
  examples,
}: {
  examples: string[];
}): React.ReactElement {
  return (
    <div>
      <p className="text-olive text-xs font-semibold tracking-[0.16em] uppercase">
        {site.plansSection.examplesLabel}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {examples.map((example) => (
          <li
            key={example}
            className="bg-olive/10 text-charcoal rounded-full px-3 py-1 text-xs leading-5"
          >
            {example}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface PlanPricesProps {
  priceUsd: number;
  maintenanceUsd: number;
}

function PlanPrices({
  priceUsd,
  maintenanceUsd,
}: PlanPricesProps): React.ReactElement {
  return (
    <div>
      <p className="text-charcoal text-3xl font-bold tracking-tight">
        {formatUsdFrom(priceUsd)}
      </p>
      <p className="text-muted mt-1 text-sm">
        {site.plansSection.maintenanceOptionalLabel}{" "}
        {formatUsdPerMonth(maintenanceUsd)}
      </p>
    </div>
  );
}

function PlanCardActions({ plan }: PlanCardProps): React.ReactElement {
  return (
    <div className="mt-auto flex flex-col gap-2">
      <PlanDetailsDialog plan={plan} />
      <Button
        href={planMailto(site.email, plan)}
        variant={plan.featured ? "olive" : "outline"}
        className="w-full"
      >
        {plan.ctaLabel}
      </Button>
    </div>
  );
}
