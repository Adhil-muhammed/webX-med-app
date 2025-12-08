import { cn } from "@/lib/utils";

interface StatsHighlightProps {
  label: string;
  value: string;
  accent?: "primary" | "secondary";
  className?: string;
}

export const StatsHighlight = ({
  label,
  value,
  accent = "primary",
  className,
}: StatsHighlightProps) => {
  const accentClass =
    accent === "primary" ? "text-primary" : "text-secondary";

  return (
    <div
      className={cn(
        "text-center flex flex-col items-center justify-center px-3",
        className
      )}
    >
      <p className={cn("font-bold text-lg", accentClass)}>{value}</p>
      <p className="text-text-primary-light dark:text-text-primary-dark text-xs">
        {label}
      </p>
    </div>
  );
};


