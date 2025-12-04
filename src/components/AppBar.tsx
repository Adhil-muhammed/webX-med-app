import { MapPin, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AppBarProps {
  location?: string;
  onNotificationClick?: () => void;
  className?: string;
}

export const AppBar = ({
  location = "Kochi, Kerala",
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
        <h2 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1">
          {location}
        </h2>
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

