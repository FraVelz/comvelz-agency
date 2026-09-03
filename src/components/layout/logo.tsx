import { cn } from "@/lib/cn";

interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className }: LogoMarkProps): React.ReactElement {
  return (
    <svg
      viewBox="0 0 88 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <path
        d="M32 4h28c12.15 0 22 9.85 22 22v58H54c-12.15 0-22-9.85-22-22V4Z"
        fill="#BFC1B0"
      />
      <path
        d="M18 16h28c12.15 0 22 9.85 22 22v58H40c-12.15 0-22-9.85-22-22V16Z"
        fill="#8A9685"
      />
      <path
        d="M4 28h28c12.15 0 22 9.85 22 22v46H26c-12.15 0-22-9.85-22-22V28Z"
        fill="#4A5D4E"
      />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  markClassName?: string;
  wordmark?: boolean;
}

export function Logo({
  className,
  markClassName,
  wordmark = true,
}: LogoProps): React.ReactElement {
  return (
    <a
      href="#inicio"
      className={cn("text-olive inline-flex items-center gap-2.5", className)}
      aria-label="Comvelz Agency, ir al inicio"
    >
      <LogoMark className={cn("h-8 w-7", markClassName)} />
      {wordmark ? (
        <span className="text-lg font-bold tracking-[0.08em]">COMVELZ</span>
      ) : null}
    </a>
  );
}
