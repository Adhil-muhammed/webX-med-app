import { AppBar } from "./AppBar";
import { SearchBar } from "./SearchBar";
import { CategoryCard } from "./CategoryCard";
import { PromotionalBanner } from "./PromotionalBanner";
import { DoctorCard } from "./DoctorCard";
import { BottomNavigation } from "./BottomNavigation";
import { Stethoscope, Sparkles, TestTube, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface Doctor {
  name: string;
  specialization: string;
  hospital: string;
  imageUrl?: string;
  imageAlt?: string;
}

interface HomeScreenProps {
  location?: string;
  doctors?: Doctor[];
  className?: string;
  onNotificationClick?: () => void;
  onCategoryClick?: (category: string) => void;
  onDoctorBookClick?: (doctor: Doctor) => void;
  onBannerClick?: () => void;
}

const defaultDoctors: Doctor[] = [
  {
    name: "Dr. Anjali Varma",
    specialization: "Cardiologist",
    hospital: "Apollo Hospital, Kochi",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzJ5xCIlZJ3BZf9da5AcLPer2VN74BK0vm9HulMdagZKxIuasqWuQlyukaEbTzPP2KiIXp7pU1TSGMzfx2LEQmwqKBZGx2ZQe7o2TVUQjyDFttrX-mztvy9hHxzNcK6FNKnZVGim4n1qRT3bl0inUTRV5w8Quqagce4SNnRMAEpXR69W1Z6l2dk5wFJV0tRY-LIU2ZEVXhTQNrSVDZgH4DcfMP656NPubVASXC18af88FicpsJTkEnIoK849hZxr6ocW2UBk4g6zHF",
    imageAlt: "A portrait of Dr. Anjali Varma, a smiling female doctor.",
  },
  {
    name: "Dr. Rajeev Kumar",
    specialization: "Dentist",
    hospital: "Aster Medcity, Kochi",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqjnjTU4a8Xl1hW5K-wyvJVqqzB7B5C-5PFvvYMWLhEL9-aV0acmgXwO-pWhGej8kNIvZzVpofLt0X2abnR6RFt1m17hRnfHEkJqd82BrPfCoSN6NOCSpsu09t86pX7iV16_xqR7K_JDbZsxT4QGyKKz-FWkcokYKNJdZcfaco3_rfL8hWBtboVxt0umMJ1OBuKJGGgAdh63GV1QsOMs3aF1_W_3T2JondS2QLt-9Z3fREHdxGPmrEN7p9rnI0hGyBbkIw2ixojQ4Z",
    imageAlt: "A portrait of Dr. Rajeev Kumar, a professional male doctor.",
  },
];

const defaultBannerImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAO8F-zCsBz7r7noFw0nTlYgSYRiRFQwsDBRkh4k_Hte3hTQIz9pRReCVaTAF1TA2dSgjEbANHeQMo2xNAIq6zW0yrcasKtLxKXcf5b3F6t0O2D4UHW0ut7rEsD0PwGkhpbHOn515h1lCbS2uRGz5TgB2zS4gzHGRAj71Rs43FLkWqsO7jFKpxycT8sOmA3CxaTaaj4MY9hsyAUeJfatAvRwjcJj50UMA6gVSeOE8Je4jDM--yFfefDFFOAcrnJO1RWZ6Nk9CHgqsM3";

export const HomeScreen = ({
  location = "Kochi, Kerala",
  doctors = defaultDoctors,
  className,
  onNotificationClick,
  onCategoryClick,
  onDoctorBookClick,
  onBannerClick,
}: HomeScreenProps) => {
  const categories = [
    { icon: Stethoscope, label: "Dentist", color: "primary" as const },
    { icon: Sparkles, label: "Ayurveda", color: "secondary" as const },
    { icon: TestTube, label: "Lab", color: "primary" as const },
    { icon: Heart, label: "Physician", color: "primary" as const },
  ];

  return (
    <div
      className={cn(
        "relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden pb-20 sm:pb-24",
        className
      )}
    >
      <AppBar location={location} onNotificationClick={onNotificationClick} />
      <SearchBar />

      {/* Quick Categories */}
      <section className="flex flex-col">
        <h3 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Quick Categories
        </h3>
        <div className="flex gap-3 px-4 py-3 overflow-x-auto">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              label={category.label}
              iconColor={category.color}
              onClick={() => onCategoryClick?.(category.label)}
            />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <PromotionalBanner
        backgroundImage={defaultBannerImage}
        onClick={onBannerClick}
      />

      {/* Book an Appointment Section */}
      <section className="flex flex-col pt-4">
        <h3 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-3">
          Book an Appointment
        </h3>
        <div className="flex flex-col gap-4 px-4 pb-24">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              specialization={doctor.specialization}
              hospital={doctor.hospital}
              imageUrl={doctor.imageUrl}
              imageAlt={doctor.imageAlt}
              onBookClick={() => onDoctorBookClick?.(doctor)}
            />
          ))}
        </div>
      </section>

      <BottomNavigation />
    </div>
  );
};
