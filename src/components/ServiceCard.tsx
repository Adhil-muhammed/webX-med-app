import type { LucideIcon } from "lucide-react";
import { Star, CheckCircle2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  statusBadge?: {
    type: "available" | "location" | "rating" | "certified";
    text: string;
    value?: string | number;
  };
  iconColor?:
    | "primary"
    | "secondary"
    | "blue"
    | "green"
    | "purple"
    | "teal"
    | "yellow";
  href: string;
  className?: string;
}

const gradientClasses = {
  primary: "bg-gradient-to-br from-[#64B5F6] to-[#1976D2]",
  secondary: "bg-gradient-to-br from-[#BA68C8] to-[#7B1FA2]",
  blue: "bg-gradient-to-br from-[#64B5F6] to-[#1976D2]",
  green: "bg-gradient-to-br from-[#4DB6AC] to-[#00796B]",
  purple: "bg-gradient-to-br from-[#BA68C8] to-[#7B1FA2]",
  teal: "bg-gradient-to-br from-[#4DB6AC] to-[#00796B]",
  yellow: "bg-gradient-to-br from-[#FDD835] to-[#F57F17]",
};

const textColorClasses = {
  primary: "text-blue-50",
  secondary: "text-purple-50",
  blue: "text-blue-50",
  green: "text-teal-50",
  purple: "text-purple-50",
  teal: "text-teal-50",
  yellow: "text-yellow-50",
};

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  statusBadge,
  iconColor = "blue",
  href,
  className,
}: ServiceCardProps) => {
  return (
    <Link
      to={"#"}
      className={cn(
        "group relative flex flex-col justify-between h-[180px] w-full rounded-[16px] p-4",
        gradientClasses[iconColor],
        "shadow-md hover:shadow-lg transition-shadow overflow-hidden",
        className
      )}
    >
      {/* Decorative blur element */}
      <div className="absolute right-[-10px] top-[-10px] bg-white/10 rounded-full w-24 h-24 blur-xl"></div>

      {/* Icon */}
      <div className="z-10 bg-white/20 w-fit p-2 rounded-xl backdrop-blur-sm">
        <Icon className="text-white text-[32px]" size={32} strokeWidth={2} />
      </div>

      {/* Content */}
      <div className="z-10 mt-auto">
        <h4 className="text-white text-base font-bold leading-tight mb-1">
          {title}
        </h4>
        {description && (
          <p
            className={cn(
              "text-xs mb-2 opacity-90",
              textColorClasses[iconColor]
            )}
          >
            {description}
          </p>
        )}

        {/* Status Badge */}
        {statusBadge && (
          <div className="flex items-center gap-1 bg-white/20 w-fit px-2 py-0.5 rounded-full backdrop-blur-md">
            {statusBadge.type === "available" && (
              <div className="size-1.5 rounded-full bg-[#00E676]"></div>
            )}
            {statusBadge.type === "rating" && (
              <Star className="text-yellow-300 size-[10px] fill-current" />
            )}
            {statusBadge.type === "certified" && (
              <CheckCircle2 className="text-white size-[10px]" />
            )}
            {statusBadge.type === "location" && (
              <MapPin className="text-white size-[10px]" />
            )}
            <span className="text-white text-[10px] font-medium">
              {statusBadge.text}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};
