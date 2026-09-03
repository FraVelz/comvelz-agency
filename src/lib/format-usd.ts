import type { PlanItem } from "@/content/site";

export function formatUsdAmount(amount: number): string {
  const value = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);

  return `${value} USD`;
}

export function formatUsdFrom(amount: number): string {
  return `Desde ${formatUsdAmount(amount)}`;
}

export function formatUsdPerMonth(amount: number): string {
  return `${formatUsdAmount(amount)}/mes`;
}

export function planProjectPrice(plan: PlanItem): number {
  return plan.offerPriceUsd ?? plan.priceUsd;
}
