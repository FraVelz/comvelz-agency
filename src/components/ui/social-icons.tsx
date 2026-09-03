import { cn } from "@/lib/cn";

interface SocialIconProps {
  className?: string;
}

export function FacebookIcon({ className }: SocialIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" className={cn("fill-current", className)} aria-hidden="true">
      <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: SocialIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" className={cn("fill-current", className)} aria-hidden="true">
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8ZM17.2 6.4a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z" />
    </svg>
  );
}

export function LinkedinIcon({ className }: SocialIconProps): React.ReactElement {
  return (
    <svg viewBox="0 0 24 24" className={cn("fill-current", className)} aria-hidden="true">
      <path d="M6.5 9H4V20h2.5V9ZM5.3 4A1.5 1.5 0 1 0 5.3 7a1.5 1.5 0 0 0 0-3ZM20 20h-2.5v-5.6c0-1.8-.8-2.4-1.8-2.4s-2 .9-2 2.5V20H11V9h2.4v1.5c.5-.9 1.7-1.8 3.4-1.8 2.3 0 4.2 1.5 4.2 4.7V20Z" />
    </svg>
  );
}
