import { cn } from "@/lib/cn";

interface ProjectMediaFrameProps {
  className?: string;
  children: React.ReactNode;
}

export function ProjectMediaFrame({
  className,
  children,
}: ProjectMediaFrameProps): React.ReactElement {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(18,18,18,0.06)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
