import { cn } from "@/lib/cn";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps): React.ReactElement {
  return (
    <article
      className={cn(
        "rounded-2xl bg-white p-8 shadow-[0_10px_40px_rgba(18,18,18,0.06)]",
        className,
      )}
    >
      {children}
    </article>
  );
}
