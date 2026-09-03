import { site, type PlanItem } from "@/content/site";
import {
  formatUsdAmount,
  formatUsdFrom,
  formatUsdPerMonth,
  planProjectPrice,
} from "@/lib/format-usd";

interface PlanPricesProps {
  plan: PlanItem;
}

export function PlanPrices({ plan }: PlanPricesProps): React.ReactElement {
  const copy = site.plansSection;
  const current = planProjectPrice(plan);
  const hasOffer = plan.offerPriceUsd != null;

  return (
    <div>
      {hasOffer ? <PlanOfferHeader listPriceUsd={plan.priceUsd} /> : null}
      <p className="text-charcoal text-3xl font-bold tracking-tight">
        {formatUsdFrom(current)}
      </p>
      <p className="text-muted mt-1 text-sm">
        {copy.maintenanceOptionalLabel} {formatUsdPerMonth(plan.maintenanceUsd)}
      </p>
    </div>
  );
}

function PlanOfferHeader({
  listPriceUsd,
}: {
  listPriceUsd: number;
}): React.ReactElement {
  return (
    <div className="mb-2 flex flex-wrap items-center gap-2">
      <p className="bg-olive inline-flex rounded-full px-3 py-1 text-xs font-semibold text-white">
        {site.plansSection.offerLabel}
      </p>
      <p className="text-muted text-sm line-through">
        {formatUsdAmount(listPriceUsd)}
      </p>
    </div>
  );
}
