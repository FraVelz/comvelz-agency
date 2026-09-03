import type { PlanItem } from "@/content/site";
import {
  formatUsdFrom,
  formatUsdPerMonth,
  planProjectPrice,
} from "@/lib/format-usd";

export function planMailto(email: string, plan: PlanItem): string {
  const subject = `Plan web: ${plan.name}`;
  const current = formatUsdFrom(planProjectPrice(plan));
  const priceLine =
    plan.offerPriceUsd == null
      ? `Hola, me interesa el plan ${plan.name} (${current}).`
      : `Hola, me interesa el plan ${plan.name} (oferta ${current}).`;
  const body = [
    priceLine,
    `El mantenimiento es opcional (${formatUsdPerMonth(plan.maintenanceUsd)}).`,
    "",
    "Gracias.",
  ].join("\n");

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
