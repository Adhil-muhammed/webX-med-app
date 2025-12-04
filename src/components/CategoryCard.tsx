import * as React from "react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  iconColor?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export const CategoryCard = ({
  icon: Icon,
  label,
  iconColor = "primary",
  className,
  onClick,
}: CategoryCardProps) => {
  const colorClasses =
    iconColor === "primary"
      ? "bg-primary/10 text-primary"
      : "bg-secondary/10 text-secondary";

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-y-2 shrink-0 w-20 cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "flex size-16 items-center justify-center rounded-xl",
          colorClasses
        )}
      >
        <Icon size={32} />
      </div>
      <p className="text-text-primary-light dark:text-text-primary-dark text-sm font-medium leading-normal">
        {label}
      </p>
    </div>
  );
};

