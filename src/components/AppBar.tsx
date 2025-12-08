import { MapPin, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AppBarProps {
  location?: string;
  supportingText?: string;
  actionLabel?: string;
  onActionClick?: () => void;
  onNotificationClick?: () => void;
  className?: string;
}

export const AppBar = ({
  location = "Kochi, Kerala",
  supportingText,
  actionLabel,
  onActionClick,
  onNotificationClick,
  className,
}: AppBarProps) => {
  return (
    <header
      className={cn(
        "flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <MapPin className="text-primary text-3xl" size={24} />
        <div className="flex flex-col">
          <h2 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1">
            {location}
          </h2>
          {supportingText && (
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              {supportingText}
            </p>
          )}
          {actionLabel && (
            <button
              onClick={onActionClick}
              className="text-primary text-sm font-medium text-left hover:underline"
            >
              {actionLabel}
            </button>
          )}
        </div>
      </div>
      <div className="flex w-12 items-center justify-end">
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 text-text-primary-light dark:text-text-primary-dark"
          onClick={onNotificationClick}
        >
          <Bell size={24} />
        </Button>
      </div>
    </header>
  );
};
