import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DoctorCardProps {
  name: string;
  specialization: string;
  hospital: string;
  imageUrl?: string;
  imageAlt?: string;
  onBookClick?: () => void;
  className?: string;
}

export const DoctorCard = ({
  name,
  specialization,
  hospital,
  imageUrl,
  imageAlt,
  onBookClick,
  className,
}: DoctorCardProps) => {
  return (
    <Card
      className={cn(
        "flex w-full items-center gap-4 rounded-xl bg-white dark:bg-text-primary-light/10 p-3 border-0",
        className
      )}
    >
      {imageUrl && (
        <img
          className="size-20 shrink-0 rounded-lg object-cover"
          alt={imageAlt || `Portrait of ${name}`}
          src={imageUrl}
        />
      )}
      <div className="flex flex-col flex-1 gap-1">
        <h4 className="font-bold text-text-primary-light dark:text-text-primary-dark">
          {name}
        </h4>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
          {specialization}
        </p>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
          {hospital}
        </p>
      </div>
      <Button
        variant="ghost"
        className="shrink-0 rounded-full bg-primary/20 px-4 py-2 text-sm font-bold text-primary hover:bg-primary/30"
        onClick={onBookClick}
      >
        Book
      </Button>
    </Card>
  );
};

