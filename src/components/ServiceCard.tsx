import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  badge?: string;
  iconColor?: "primary" | "secondary" | "blue" | "green" | "purple";
  href: string;
  className?: string;
}

const iconColorClasses = {
  primary: "bg-primary/10 text-primary dark:bg-primary/20",
  secondary: "bg-secondary/10 text-secondary dark:bg-secondary/20",
  blue: "bg-blue-50 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
  green: "bg-green-50 text-green-600 dark:bg-green-500/20 dark:text-green-400",
  purple:
    "bg-purple-50 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
};

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  badge,
  iconColor = "primary",
  href,
  className,
}: ServiceCardProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "group relative flex flex-col gap-3 rounded-xl",
        "bg-white dark:bg-white/5",
        "border border-gray-100 dark:border-white/10",
        "p-4 transition-all duration-200",
        "hover:shadow-md hover:border-primary/30 dark:hover:border-primary/50",
        "hover:-translate-y-0.5",
        "active:scale-[0.98]",
        className
      )}
    >
      {/* Badge */}
      {badge && (
        <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 dark:bg-primary/20 px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}

      {/* Icon */}
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110",
          iconColorClasses[iconColor]
        )}
      >
        <Icon size={24} strokeWidth={2} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-bold text-text-primary-light dark:text-text-primary-dark group-hover:text-primary transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark line-clamp-2">
            {description}
          </p>
        )}
      </div>

      {/* Arrow Indicator */}
      <div className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-sm font-medium">Learn more</span>
        <ArrowRight size={16} />
      </div>
    </Link>
  );
};
