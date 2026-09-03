import type { LucideIcon } from "lucide-react";

interface PlanBulletListProps {
  title?: string;
  items: string[];
  icon: LucideIcon;
}

export function PlanBulletList({
  title,
  items,
  icon: Icon,
}: PlanBulletListProps): React.ReactElement {
  return (
    <div>
      {title ? (
        <h4 className="text-charcoal text-xs font-semibold tracking-[0.16em] uppercase">
          {title}
        </h4>
      ) : null}
      <ul className="mt-3 flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-muted flex items-start gap-2 text-sm leading-6"
          >
            <Icon
              className="text-olive mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
