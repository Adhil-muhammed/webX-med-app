import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  viewAllLink?: string;
  viewAllText?: string;
  className?: string;
}

export const SectionHeader = ({
  title,
  viewAllLink,
  viewAllText = "View All",
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn("flex items-center justify-between px-4 pb-4", className)}>
      <h3 className="text-heading text-section-heading font-bold">{title}</h3>
      {viewAllLink && (
        <Link
          to={viewAllLink}
          className="text-link text-sm font-semibold flex items-center hover:opacity-80"
        >
          {viewAllText}
        </Link>
      )}
    </div>
  );
};

