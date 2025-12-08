import { cn } from "@/lib/utils";

interface CompactDoctorCardProps {
  name: string;
  specialization: string;
  availability: string;
  price: string;
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
}

export const CompactDoctorCard = ({
  name,
  specialization,
  availability,
  price,
  imageUrl,
  imageAlt,
  className,
}: CompactDoctorCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col shrink-0 w-40 rounded-xl bg-white dark:bg-text-primary-light/10 p-3 items-center text-center border border-gray-100 dark:border-white/10",
        className
      )}
    >
      {imageUrl && (
        <img
          className="size-16 rounded-full object-cover"
          alt={imageAlt || `Portrait of ${name}`}
          src={imageUrl}
        />
      )}
      <h4 className="font-bold text-text-primary-light dark:text-text-primary-dark mt-2 text-sm">
        {name}
      </h4>
      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-0.5">
        {specialization}
      </p>
      <p className="text-sm text-primary font-medium mt-1.5">{availability}</p>
      <p className="text-sm text-text-primary-light dark:text-text-primary-dark font-semibold">
        {price}
      </p>
    </div>
  );
};
