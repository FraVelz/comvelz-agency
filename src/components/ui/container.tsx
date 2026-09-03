import { cn } from "@/lib/cn";

interface ContainerProps {
  as?: "div" | "section" | "header" | "footer" | "nav";
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export function Container({
  as: Tag = "div",
  className,
  children,
  id,
}: ContainerProps): React.ReactElement {
  return (
    <Tag
      id={id}
      className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}
    >
      {children}
    </Tag>
  );
}
