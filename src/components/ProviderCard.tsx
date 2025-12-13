import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SearchProvider } from "@/constants/demoData";

interface ProviderCardProps {
  provider: SearchProvider;
  onBookClick?: () => void;
  className?: string;
}

export const ProviderCard = ({
  provider,
  onBookClick,
  className,
}: ProviderCardProps) => {
  const {
    name,
    specialization,
    experience,
    location,
    distance,
    rating,
    reviewsCount,
    nextAvailable,
    price,
    imageUrl,
    imageAlt,
    isClinic = false,
  } = provider;

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-xl bg-card-light dark:bg-card-dark p-4 shadow-sm",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-1 flex-col gap-1">
          {rating && (
            <div className="flex items-center gap-2">
              <Star
                className="text-sm text-yellow-500 fill-yellow-500"
                size={16}
              />
              <p className="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">
                {rating} ({reviewsCount || 0} reviews)
              </p>
            </div>
          )}
          <p className="text-text-light dark:text-text-dark text-base font-bold leading-tight">
            {name}
          </p>
          {specialization && (
            <p className="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">
              {specialization}
              {experience && `, ${experience}`}
            </p>
          )}
          <p className="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">
            {location}
            {distance && ` • ${distance}`}
          </p>
        </div>
        {imageUrl && (
          <img
            className={cn(
              "shrink-0 object-cover",
              isClinic
                ? "w-20 aspect-square rounded-lg"
                : "size-20 rounded-full"
            )}
            alt={imageAlt || `${isClinic ? "Image of" : "Portrait of"} ${name}`}
            src={imageUrl}
          />
        )}
      </div>
      <div className="border-t border-dashed border-gray-200 dark:border-gray-700"></div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col">
          {nextAvailable && (
            <p className="text-secondary text-sm font-medium">
              {nextAvailable}
            </p>
          )}
          {price && (
            <p className="text-text-light/70 dark:text-text-dark/70 text-sm">
              {price}
            </p>
          )}
        </div>
        <Button
          onClick={onBookClick}
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal"
        >
          <span className="truncate">Book Now</span>
        </Button>
      </div>
    </div>
  );
};
