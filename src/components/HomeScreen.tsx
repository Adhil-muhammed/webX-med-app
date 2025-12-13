import { useState } from "react";
import { AppBar } from "./AppBar";
import { SearchBar } from "./SearchBar";
import { DoctorCard } from "./DoctorCard";
import { BottomNavigation } from "./BottomNavigation";
import { StatsHighlight } from "./StatsHighlight";
import { CompactDoctorCard } from "./CompactDoctorCard";
import { PatientStoryCard } from "./PatientStoryCard";
import { cn } from "@/lib/utils";
import { ServiceCard } from "./ServiceCard";
import { SectionHeader } from "./SectionHeader";
import {
  DEFAULT_DOCTORS,
  DEFAULT_LOCATION,
  STATS,
  AVAILABLE_DOCTORS,
  PATIENT_STORIES,
  SERVICES,
  APP_BAR_SUPPORTING_TEXT,
  APP_BAR_ACTION_LABEL,
  AVAILABILITY_TABS,
  type Doctor,
} from "@/constants/demoData";
import { useScrollStart } from "@/hooks/useScrollStart";

interface HomeScreenProps {
  location?: string;
  doctors?: Doctor[];
  className?: string;
  onNotificationClick?: () => void;
  onCategoryClick?: (category: string) => void;
  onDoctorBookClick?: (doctor: Doctor) => void;
  onBannerClick?: () => void;
}

export const HomeScreen = ({
  location = DEFAULT_LOCATION,
  doctors = DEFAULT_DOCTORS,
  className,
  onNotificationClick,
  onDoctorBookClick,
}: HomeScreenProps) => {
  const [activeAvailabilityTab, setActiveAvailabilityTab] =
    useState("Available Now");

  // Use the hook with a small threshold (e.g., 50px)
  const { isSticky } = useScrollStart(100);

  return (
    <div
      className={cn(
        "relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden pb-20 sm:pb-24",
        className
      )}
    >
      <AppBar
        location={location}
        supportingText={APP_BAR_SUPPORTING_TEXT}
        actionLabel={APP_BAR_ACTION_LABEL}
        onNotificationClick={onNotificationClick}
      />

      {/* Sticky SearchBar */}
      <div
        className={cn(
          "",
          isSticky
            ? "fixed top-0 left-0 right-0 shadow-md bg-white dark:bg-background-dark z-50"
            : "relative"
        )}
      >
        <SearchBar />
      </div>

      {/* Add padding when SearchBar is sticky to prevent content jump */}
      {isSticky && <div className="h-[56px]" />}

      {/* Stats */}
      <section className="flex justify-around bg-primary/10 dark:bg-primary/20 py-3 mx-4 rounded-lg border border-primary/20 dark:border-primary/30">
        {STATS.map((stat, index) => (
          <StatsHighlight
            key={index}
            label={stat.label}
            value={stat.value}
            accent={stat.accent}
            className={index !== 0 ? "border-l border-primary/20" : ""}
          />
        ))}
      </section>

      {/* NEW: Services Section */}
      <section className="flex flex-col pt-6">
        <SectionHeader title="Healthcare Services" viewAllLink="/services" />
        <div className="grid grid-cols-2 gap-3 px-4 pb-6">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              statusBadge={service.statusBadge}
              iconColor={service.iconColor}
              href={service.href}
            />
          ))}
        </div>
      </section>

      {/* Available Now */}
      <section className="flex flex-col pt-6">
        <SectionHeader title="Available Now" />
        <div className="flex border-b border-gray-200 dark:border-white/10 px-4">
          {AVAILABILITY_TABS.map((tab) => (
            <button
              key={tab}
              className={cn(
                "whitespace-nowrap border-b-2 px-4 py-2 text-sm font-medium transition-colors",
                activeAvailabilityTab === tab
                  ? "border-primary text-primary font-bold"
                  : "border-transparent text-text-secondary-light dark:text-text-secondary-dark"
              )}
              onClick={() => setActiveAvailabilityTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex gap-3 px-4 py-4 overflow-x-auto">
          {AVAILABLE_DOCTORS.map((doctor, index) => (
            <CompactDoctorCard
              key={index}
              name={doctor.name}
              specialization={doctor.specialization}
              availability={doctor.availability}
              price={doctor.price}
              imageUrl={doctor.imageUrl}
              imageAlt={doctor.imageAlt}
            />
          ))}
        </div>
      </section>

      {/* Patient Stories */}
      <section className="flex flex-col pt-6">
        <SectionHeader title="Patient Stories" />
        <div className="flex gap-3 px-4 pb-3 overflow-x-auto">
          {PATIENT_STORIES.map((story, index) => (
            <PatientStoryCard
              key={index}
              quote={story.quote}
              name={story.name}
              location={story.location}
            />
          ))}
        </div>
      </section>

      {/* Book an Appointment */}
      <section className="flex flex-col pt-4">
        <SectionHeader title="Book an Appointment" />
        <div className="flex flex-col gap-4 px-4 pb-24">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              specialization={doctor.specialization}
              hospital={doctor.hospital}
              experienceYears={doctor.experienceYears}
              rating={doctor.rating}
              reviewsCount={doctor.reviewsCount}
              price={doctor.price}
              verified={doctor.verified}
              supportsVideo={doctor.supportsVideo}
              languages={doctor.languages}
              nextAvailable={doctor.nextAvailable}
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
