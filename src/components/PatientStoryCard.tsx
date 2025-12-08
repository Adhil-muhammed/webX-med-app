import { cn } from "@/lib/utils";

interface PatientStoryCardProps {
  quote: string;
  name: string;
  location: string;
  rating?: string;
  className?: string;
}

export const PatientStoryCard = ({
  quote,
  name,
  location,
  rating = "★★★★★",
  className,
}: PatientStoryCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col shrink-0 w-72 rounded-xl bg-white dark:bg-text-primary-light/10 p-4 border border-gray-100 dark:border-white/10",
        className
      )}
    >
      <p className="text-text-primary-light dark:text-text-primary-dark text-sm leading-relaxed">
        {quote}
      </p>
      <div className="mt-3">
        <p className="font-bold text-text-primary-light dark:text-text-primary-dark text-sm">
          {name}
        </p>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
          {location}
        </p>
        <p className="text-secondary text-sm">{rating}</p>
      </div>
    </div>
  );
};
