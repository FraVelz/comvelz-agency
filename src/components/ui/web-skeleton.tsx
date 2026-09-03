import type { ProjectPlaceholderVariant } from "@/content/site";
import { cn } from "@/lib/cn";

interface WebSkeletonProps {
  variant: ProjectPlaceholderVariant;
}

export function WebSkeleton({ variant }: WebSkeletonProps): React.ReactElement {
  return (
    <div
      className="absolute inset-0 flex flex-col bg-cream"
      aria-hidden="true"
    >
      <BrowserChrome />
      {variant === "landing" ? <LandingLayout /> : null}
      {variant === "dashboard" ? <DashboardLayout /> : null}
      {variant === "shop" ? <ShopLayout /> : null}
    </div>
  );
}

function BrowserChrome(): React.ReactElement {
  return (
    <div className="flex items-center gap-1.5 border-b border-charcoal/5 px-3 py-2">
      <span className="size-1.5 rounded-full bg-olive-light" />
      <span className="size-1.5 rounded-full bg-olive-light/70" />
      <span className="size-1.5 rounded-full bg-olive-light/50" />
      <span className="ml-2 h-2 flex-1 rounded-full bg-olive-light/35" />
    </div>
  );
}

function Bone({ className }: { className: string }): React.ReactElement {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-olive-light/45", className)}
    />
  );
}

function LandingLayout(): React.ReactElement {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2 p-3">
      <Bone className="min-h-0 w-full flex-1" />
      <div className="flex gap-2">
        <Bone className="h-8 flex-1" />
        <Bone className="h-8 flex-1" />
      </div>
      <Bone className="h-2 w-2/3" />
      <Bone className="h-2 w-1/2" />
    </div>
  );
}

function DashboardLayout(): React.ReactElement {
  return (
    <div className="flex min-h-0 flex-1">
      <div className="flex w-[22%] flex-col gap-1.5 border-r border-charcoal/5 p-2">
        <Bone className="h-2 w-full" />
        <Bone className="h-2 w-4/5" />
        <Bone className="h-2 w-3/5" />
        <Bone className="mt-auto h-2 w-full" />
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-2 p-3">
        <div className="flex gap-2">
          <Bone className="h-8 flex-1" />
          <Bone className="h-8 flex-1" />
          <Bone className="h-8 flex-1" />
        </div>
        <Bone className="min-h-0 flex-1 w-full" />
      </div>
    </div>
  );
}

function ShopLayout(): React.ReactElement {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2 p-3">
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-2">
        <Bone className="h-full min-h-10" />
        <Bone className="h-full min-h-10" />
        <Bone className="h-full min-h-10" />
      </div>
      <Bone className="h-2 w-3/5" />
      <Bone className="h-2 w-2/5" />
    </div>
  );
}
