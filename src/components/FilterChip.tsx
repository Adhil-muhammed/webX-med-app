import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterChipProps {
  label: string;
  active?: boolean;
  onClose?: () => void;
  onClick?: () => void;
  className?: string;
}

export const FilterChip = ({
  label,
  active = false,
  onClose,
  onClick,
  className,
}: FilterChipProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors",
        active
          ? "bg-primary text-white"
          : "bg-chip-light dark:bg-chip-dark text-text-light dark:text-text-dark",
        className
      )}
    >
      <p className="text-sm font-medium leading-normal">{label}</p>
      {onClose && (
        <span className="text-base">
          <X size={16} />
        </span>
      )}
    </button>
  );
};

