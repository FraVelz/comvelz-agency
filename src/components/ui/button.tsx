import { cn } from "@/lib/cn";

const variants = {
  charcoal: "bg-charcoal text-white hover:bg-charcoal/90",
  olive: "bg-olive text-white hover:bg-olive/90",
  outline:
    "border border-charcoal/20 bg-transparent text-charcoal hover:border-charcoal/40",
  outlineLight:
    "border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/5",
} as const;

export type ButtonVariant = keyof typeof variants;

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  href,
  variant = "olive",
  className,
  children,
  ...props
}: ButtonProps): React.ReactElement {
  const external = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-colors",
        variants[variant],
        className,
      )}
      {...(external && !href.startsWith("mailto:")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      {...props}
    >
      {children}
    </a>
  );
}
