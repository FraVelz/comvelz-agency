"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Code2, Wrench, X } from "lucide-react";
import { site, type PlanItem } from "@/content/site";
import { Button, buttonClassName } from "@/components/ui/button";
import { PlanBulletList } from "@/components/sections/plan-bullet-list";
import { formatUsdFrom, formatUsdPerMonth } from "@/lib/format-usd";
import { planMailto } from "@/lib/plan-mailto";

interface PlanDetailsDialogProps {
  plan: PlanItem;
}

export function PlanDetailsDialog({
  plan,
}: PlanDetailsDialogProps): React.ReactElement {
  const [open, setOpen] = useState(false);
  const copy = site.plansSection;

  return (
    <>
      <button
        type="button"
        className={buttonClassName("outline", "w-full")}
        onClick={() => setOpen(true)}
      >
        {copy.detailsCta}
      </button>
      {open ? (
        <PlanDetailsModal plan={plan} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
}

interface PlanDetailsModalProps {
  plan: PlanItem;
  onClose: () => void;
}

function PlanDetailsModal({
  plan,
  onClose,
}: PlanDetailsModalProps): React.ReactElement {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-5">
      <div
        className="bg-charcoal/45 absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(18,18,18,0.12)]"
      >
        <PlanDetailsHeader
          titleId={titleId}
          planName={plan.name}
          closeRef={closeRef}
          onClose={onClose}
        />
        <PlanDetailsBody plan={plan} />
      </div>
    </div>,
    document.body,
  );
}

interface PlanDetailsHeaderProps {
  titleId: string;
  planName: string;
  closeRef: React.RefObject<HTMLButtonElement | null>;
  onClose: () => void;
}

function PlanDetailsHeader({
  titleId,
  planName,
  closeRef,
  onClose,
}: PlanDetailsHeaderProps): React.ReactElement {
  return (
    <div className="flex items-start justify-between gap-4">
      <h3
        id={titleId}
        className="text-charcoal text-xl font-semibold tracking-tight"
      >
        {planName}
      </h3>
      <button
        ref={closeRef}
        type="button"
        className="text-charcoal inline-flex size-10 shrink-0 items-center justify-center rounded-xl"
        aria-label={site.plansSection.detailsCloseLabel}
        onClick={onClose}
      >
        <X className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
}

function PlanDetailsBody({ plan }: { plan: PlanItem }): React.ReactElement {
  const copy = site.plansSection;

  return (
    <>
      <p className="text-muted mt-3 text-sm leading-6">{copy.detailsIntro}</p>
      <p className="text-charcoal mt-4 text-2xl font-bold tracking-tight">
        {formatUsdFrom(plan.priceUsd)}
      </p>
      <p className="text-muted mt-1 text-sm">
        {copy.maintenanceOptionalLabel} {formatUsdPerMonth(plan.maintenanceUsd)}
      </p>
      <PlanDetailsLists plan={plan} />
      <Button
        href={planMailto(site.email, plan)}
        variant="olive"
        className="mt-6 w-full"
      >
        {plan.ctaLabel}
      </Button>
    </>
  );
}

function PlanDetailsLists({ plan }: { plan: PlanItem }): React.ReactElement {
  const copy = site.plansSection;

  return (
    <div className="mt-6 flex flex-col gap-5">
      <PlanBulletList
        title={copy.detailsProjectLabel}
        items={plan.technical}
        icon={Code2}
      />
      <div className="bg-cream rounded-xl p-4">
        <PlanBulletList
          title={`${copy.maintenanceLabel} · ${formatUsdPerMonth(plan.maintenanceUsd)}`}
          items={plan.maintenanceIncludes}
          icon={Wrench}
        />
      </div>
    </div>
  );
}
