import { useState } from "react";
import { ArrowLeft, Share2, Star, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CarouselImage {
  url: string;
  alt: string;
}

interface ClinicTiming {
  day: string;
  hours: string;
  closed?: boolean;
}

interface LocationInfo {
  address: string;
  mapImageUrl: string;
  city?: string;
}

interface Review {
  name: string;
  date: string;
  rating: number;
  comment: string;
}

interface DoctorProfilePageProps {
  doctorName: string;
  credentials: string;
  experienceYears: number;
  rating: number;
  reviewsCount: number;
  avatarUrl: string;
  carouselImages: CarouselImage[];
  about: string;
  timings: ClinicTiming[];
  location: LocationInfo;
  reviews: Review[];
  onBackClick?: () => void;
  onShareClick?: () => void;
  onCallClick?: () => void;
  onBookClick?: () => void;
  className?: string;
}

type TabType = "About" | "Services" | "Location" | "Reviews";

export const DoctorProfilePage = ({
  doctorName,
  credentials,
  experienceYears,
  rating,
  reviewsCount,
  avatarUrl,
  carouselImages,
  about,
  timings,
  location,
  reviews,
  onBackClick,
  onShareClick,
  onCallClick,
  onBookClick,
  className,
}: DoctorProfilePageProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("About");

  const tabs: TabType[] = ["About", "Services", "Location", "Reviews"];

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={cn(
          "transition-colors",
          i < count
            ? "fill-secondary text-secondary"
            : "fill-gray-300 text-gray-300 dark:fill-gray-600 dark:text-gray-600"
        )}
      />
    ));
  };

  return (
    <div
      className={cn(
        "relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden",
        className
      )}
    >
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between border-b border-gray-200 dark:border-gray-700">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBackClick}
          className="h-12 w-12 text-gray-800 dark:text-gray-200"
        >
          <ArrowLeft size={24} />
        </Button>
        <h2 className="text-gray-900 dark:text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          {doctorName}
        </h2>
        <div className="flex w-12 items-center justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={onShareClick}
            className="h-12 w-12 text-gray-800 dark:text-gray-200"
          >
            <Share2 size={24} />
          </Button>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60"
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
                style={{ backgroundImage: `url('${image.url}')` }}
                role="img"
                aria-label={image.alt}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Profile Header */}
      <div className="flex p-4">
        <div className="flex w-full flex-col gap-4">
          <div className="flex gap-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-24 w-24"
              style={{ backgroundImage: `url('${avatarUrl}')` }}
              role="img"
              aria-label={`Portrait of ${doctorName}`}
            />
            <div className="flex flex-col justify-center">
              <p className="text-gray-900 dark:text-gray-100 text-[22px] font-bold leading-tight tracking-[-0.015em]">
                {doctorName}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal">
                {credentials}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal">
                {experienceYears}+ Years Experience
              </p>
              <div className="flex items-center gap-1 mt-1">
                <Star
                  size={18}
                  className="fill-secondary text-secondary"
                />
                <p className="text-gray-800 dark:text-gray-200 font-bold">
                  {rating.toFixed(1)}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  ({reviewsCount} Reviews)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="pb-3 sticky top-[72px] bg-background-light dark:bg-background-dark z-10">
        <div className="flex border-b border-gray-200 dark:border-gray-700 px-4 justify-between">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 transition-colors",
                activeTab === tab
                  ? "border-b-primary text-primary"
                  : "border-b-transparent text-gray-500 dark:text-gray-400"
              )}
            >
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                {tab}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="px-4 pt-4 pb-28">
        {/* About Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            About {doctorName.split(" ")[1] || doctorName}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-base font-normal leading-relaxed">
            {about}
          </p>

          {/* Clinic Timings */}
          <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
              Clinic Timings
            </h3>
            <div className="space-y-2">
              {timings.map((timing, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex justify-between",
                    timing.closed
                      ? "text-gray-500 dark:text-gray-400"
                      : "text-gray-800 dark:text-gray-200"
                  )}
                >
                  <span>{timing.day}</span>
                  <span className="font-medium">{timing.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location Map */}
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-4">
            Location
          </h3>
          <div
            className="w-full h-48 bg-center bg-no-repeat bg-cover rounded-lg"
            style={{ backgroundImage: `url('${location.mapImageUrl}')` }}
            role="img"
            aria-label={`Map showing location in ${location.city || "city"}`}
          />
          <p className="text-gray-700 dark:text-gray-300 flex items-start gap-2 -mt-2">
            <MapPin size={16} className="mt-1 shrink-0" />
            <span>{location.address}</span>
          </p>

          {/* Reviews Section */}
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-4">
            Patient Reviews
          </h3>
          <div className="flex flex-col gap-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark"
              >
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <p className="font-bold text-gray-800 dark:text-gray-200">
                      {review.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {review.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                  "{review.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Footer for Actions */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-700">
        <div className="flex w-full gap-3">
          <Button
            onClick={onCallClick}
            variant="ghost"
            className="h-12 px-4 bg-primary/20 text-primary hover:bg-primary/30"
          >
            <Phone size={24} />
          </Button>
          <Button
            onClick={onBookClick}
            className="h-12 px-4 bg-primary text-white hover:opacity-90 flex-1"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};
