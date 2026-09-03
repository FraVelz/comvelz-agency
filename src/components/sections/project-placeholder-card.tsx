import type { ProjectPlaceholder } from "@/content/site";
import { ProjectMediaFrame } from "@/components/ui/project-media-frame";
import { WebSkeleton } from "@/components/ui/web-skeleton";

interface ProjectPlaceholderCardProps {
  placeholder: ProjectPlaceholder;
}

export function ProjectPlaceholderCard({
  placeholder,
}: ProjectPlaceholderCardProps): React.ReactElement {
  return (
    <article>
      <ProjectMediaFrame>
        <WebSkeleton variant={placeholder.variant} />
      </ProjectMediaFrame>
      <h3 className="text-charcoal mt-4 text-base font-semibold">
        {placeholder.title}
      </h3>
      <p className="text-muted mt-1 text-sm">{placeholder.category}</p>
    </article>
  );
}
