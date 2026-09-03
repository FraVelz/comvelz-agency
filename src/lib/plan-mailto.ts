import type { PlanItem } from "@/content/site";
import { formatUsdFrom, formatUsdPerMonth } from "@/lib/format-usd";

export function planMailto(email: string, plan: PlanItem): string {
  const subject = `Plan web: ${plan.name}`;
  const body = [
    `Hola, me interesa el plan ${plan.name} (${formatUsdFrom(plan.priceUsd)}).`,
    `El mantenimiento es opcional (${formatUsdPerMonth(plan.maintenanceUsd)}).`,
    "",
    "Gracias.",
  ].join("\n");

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
