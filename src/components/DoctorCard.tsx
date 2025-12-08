// import { Video, Languages } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { cn } from "@/lib/utils";

// interface DoctorCardProps {
//   name: string;
//   specialization: string;
//   hospital: string;
//   experienceYears?: number;
//   rating?: number;
//   reviewsCount?: number;
//   price?: string;
//   verified?: boolean;
//   supportsVideo?: boolean;
//   languages?: string[];
//   nextAvailable?: string;
//   imageUrl?: string;
//   imageAlt?: string;
//   onBookClick?: () => void;
//   className?: string;
// }

// export const DoctorCard = ({
//   name,
//   specialization,
//   hospital,
//   experienceYears,
//   rating,
//   reviewsCount,
//   price,
//   verified = true,
//   supportsVideo = true,
//   languages,
//   nextAvailable = "Today",
//   imageUrl,
//   imageAlt,
//   onBookClick,
//   className,
// }: DoctorCardProps) => {
//   return (
//     <Card>
//       <div
//         className={cn(
//           "flex w-full items-start gap-4 rounded-xl bg-white dark:bg-text-primary-light/10 p-3 border border-gray-100 dark:border-white/10",
//           className
//         )}
//       >
//         {imageUrl && (
//           <img
//             className="size-20 shrink-0 rounded-lg object-cover"
//             alt={imageAlt || `Portrait of ${name}`}
//             src={imageUrl}
//           />
//         )}
//         <div className="flex flex-col flex-1 gap-1">
//           <h4 className="font-bold text-text-primary-light dark:text-text-primary-dark">
//             {name}
//           </h4>
//           <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
//             {specialization}
//             {experienceYears ? ` • ${experienceYears} years experience` : ""}
//           </p>
//           <div className="flex items-center gap-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
//             {rating && <span className="text-secondary text-base">★</span>}
//             {rating && <span>{rating.toFixed(1)}</span>}
//             {reviewsCount && <span>({reviewsCount} reviews)</span>}
//           </div>
//           <p className="text-sm text-text-primary-light dark:text-text-primary-dark font-medium">
//             {verified && "✓ Verified"}
//             {price ? ` • ${price}` : ""}
//           </p>
//           <div className="flex flex-wrap items-center gap-2 text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">
//             {supportsVideo && (
//               <div className="flex items-center gap-1 rounded-full bg-gray-100 dark:bg-white/10 px-2 py-0.5">
//                 <Video size={14} />
//                 <span>Video</span>
//               </div>
//             )}
//             {languages && languages.length > 0 && (
//               <div className="flex items-center gap-1 rounded-full bg-gray-100 dark:bg-white/10 px-2 py-0.5">
//                 <Languages size={14} />
//                 <span>{languages.join(", ")}</span>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col items-end shrink-0 gap-2">
//         <div className="text-right">
//           <p className="text-primary text-sm font-bold">Next Available</p>
//           <p className="text-text-primary-light dark:text-text-primary-dark text-sm font-semibold">
//             {nextAvailable}
//           </p>
//         </div>
//         <Button
//           variant="ghost"
//           className="shrink-0 rounded-full bg-primary/20 px-4 py-2 text-sm font-bold text-primary hover:bg-primary/30"
//           onClick={onBookClick}
//         >
//           Book
//         </Button>
//       </div>
//     </Card>
//   );
// };

import { Video, Languages, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DoctorCardProps {
  name: string;
  specialization: string;
  hospital: string;
  experienceYears?: number;
  rating?: number;
  reviewsCount?: number;
  price?: string;
  verified?: boolean;
  supportsVideo?: boolean;
  languages?: string[];
  nextAvailable?: string;
  imageUrl?: string;
  imageAlt?: string;
  onBookClick?: () => void;
  className?: string;
}

export const DoctorCard = ({
  name,
  specialization,
  hospital,
  experienceYears,
  rating,
  reviewsCount,
  price,
  verified = true,
  supportsVideo = true,
  languages,
  nextAvailable = "Today",
  imageUrl,
  imageAlt,
  onBookClick,
  className,
}: DoctorCardProps) => {
  return (
    <Card
      className={cn(
        "group relative flex w-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-white/5 sm:flex-row sm:items-start sm:gap-6",
        className
      )}
    >
      {/* --- Left Section: Image & Basic Info --- */}
      <div className="flex flex-1 gap-4">
        {imageUrl && (
          <div className="shrink-0">
            <img
              className="size-20 rounded-lg object-cover sm:size-24"
              alt={imageAlt || `Portrait of ${name}`}
              src={imageUrl}
            />
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-gray-100">
                {name}
                {verified && (
                  <CheckCircle2
                    className="size-4 text-blue-500"
                    aria-label="Verified Doctor"
                  />
                )}
              </h4>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {specialization}
                {experienceYears ? ` • ${experienceYears}+ Years` : ""}
              </p>
              <p className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <MapPin size={12} /> {hospital}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1 rounded bg-yellow-100 px-1.5 py-0.5 text-xs font-bold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
              <span>★</span>
              <span>{rating ? rating.toFixed(1) : "New"}</span>
            </div>
            {reviewsCount && (
              <span className="text-xs text-gray-500 underline decoration-dotted dark:text-gray-400">
                {reviewsCount} reviews
              </span>
            )}
          </div>

          {/* Badges */}
          <div className="mt-1 flex flex-wrap gap-2">
            {supportsVideo && (
              <div className="flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                <Video size={12} />
                <span>Video Consult</span>
              </div>
            )}
            {languages && languages.length > 0 && (
              <div className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <Languages size={12} />
                <span>{languages.join(", ")}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- Right Section: Availability & Action --- */}
      {/* 
         On Mobile: Has a top border and margin to separate from details. 
         On Desktop: Left border, centered vertically.
      */}
      <div className="mt-4 flex shrink-0 flex-col justify-between gap-3 border-t border-gray-100 pt-4 sm:mt-0 sm:h-full sm:items-end sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 dark:border-white/10">
        <div className="flex flex-row items-center justify-between gap-4 sm:flex-col sm:items-end sm:gap-1">
          <div className="text-left sm:text-right">
            <p className="text-xs text-muted-foreground">Next Available</p>
            <p className="text-sm font-semibold text-green-600 dark:text-green-400">
              {nextAvailable}
            </p>
          </div>

          {price && (
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Consultation Fee</p>
              <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                {price}
              </p>
            </div>
          )}
        </div>

        <Button
          onClick={onBookClick}
          className="w-full rounded-full bg-primary font-semibold text-primary-foreground shadow-sm hover:opacity-90 sm:w-auto sm:px-8"
        >
          Book Appointment
        </Button>
      </div>
    </Card>
  );
};
