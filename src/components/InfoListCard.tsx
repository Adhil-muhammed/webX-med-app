import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface InfoListCardProps {
  icon: LucideIcon;
  iconColor?: "primary" | "secondary";
  title: string;
  description: string;
  className?: string;
  onClick?: () => void;
}

export const InfoListCard = ({
  icon: Icon,
  iconColor = "primary",
  title,
  description,
  className,
  onClick,
}: InfoListCardProps) => {
  const colorClass =
    iconColor === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary";

  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-xl bg-white dark:bg-text-primary-light/10 p-3 cursor-pointer border border-gray-100 dark:border-white/10",
        className
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "flex size-12 shrink-0 items-center justify-center rounded-lg",
          colorClass
        )}
      >
        <Icon size={26} />
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-text-primary-light dark:text-text-primary-dark">
          {title}
        </h4>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
          {description}
        </p>
      </div>
      <ChevronRight className="text-text-secondary-light dark:text-text-secondary-dark" size={20} />
    </div>
  );
};


