import { cn } from "@/lib/utils";

interface PromotionalBannerProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  className?: string;
  onClick?: () => void;
}

export const PromotionalBanner = ({
  title = "Launch Offer",
  subtitle = "Flat 50% Off",
  description = "Your First Consultation",
  backgroundImage,
  className,
  onClick,
}: PromotionalBannerProps) => {
  return (
    <div className={cn("@container px-4 py-3", className)}>
      <div
        className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-[180px] p-6 relative cursor-pointer"
        style={
          backgroundImage
            ? { backgroundImage: `url("${backgroundImage}")` }
            : undefined
        }
        onClick={onClick}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 rounded-xl"></div>
        <div className="relative z-10">
          <h4 className="text-white text-xs font-semibold uppercase tracking-widest">
            {title}
          </h4>
          <p className="text-white text-2xl font-bold leading-tight mt-1">
            {subtitle}
          </p>
          <p className="text-white text-lg font-medium leading-tight">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

