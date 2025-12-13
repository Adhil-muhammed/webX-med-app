import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Map, ArrowUpRight } from "lucide-react";
import { SearchResultsAppBar } from "@/components/SearchResultsAppBar";
import { DoctorCard } from "@/components/DoctorCard";
import { SEARCH_PROVIDERS } from "@/constants/demoData";
import { cn } from "@/lib/utils";

const FREQUENTLY_SEARCHED_SPECIALITIES = [
  "Dentist",
  "Gynecologist/obstetrician",
  "General Physician",
  "Dermatologist",
  "Ear-nose-throat (ent) Specialist",
  "Homoeopath",
  "Ayurveda",
];

export const SearchResultsPage = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState<string>(
    (location.state as { query?: string })?.query || ""
  );
  const [filters, setFilters] = useState([
    { label: "Sort by Distance", active: false },
    { label: "Available Today", active: false },
    { label: "Clinics Only", active: false },
  ]);

  // Filter providers based on search query
  const filteredProviders = searchQuery
    ? SEARCH_PROVIDERS.filter((provider) => {
        const query = searchQuery.toLowerCase();
        return (
          provider.name.toLowerCase().includes(query) ||
          provider.specialization?.toLowerCase().includes(query) ||
          provider.location.toLowerCase().includes(query)
        );
      })
    : [];

  const handlePopularSearchClick = (keyword: string) => {
    setSearchQuery(keyword);
  };

  const handleFilterClick = (index: number) => {
    setFilters((prev) =>
      prev.map((filter, i) =>
        i === index ? { ...filter, active: !filter.active } : filter
      )
    );
  };

  const handleFilterClose = (index: number) => {
    setFilters((prev) => prev.filter((_, i) => i !== index));
  };

  const handleMapClick = () => {
    // Navigate to map view (can be implemented later)
    console.log("Map view clicked");
  };

  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark"
      )}
    >
      <SearchResultsAppBar
        title="Doctors near you"
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        filters={filters.map((filter, index) => ({
          label: filter.label,
          active: filter.active,
          onClick: () => handleFilterClick(index),
          onClose:
            filter.active && filter.label !== "Sort by Distance"
              ? () => handleFilterClose(index)
              : undefined,
        }))}
      />

      {/* Frequently Searched Specialities or Results List */}
      <div className="flex flex-col gap-4 p-4 pb-24">
        {!searchQuery ? (
          <div className="flex flex-col">
            <h3 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] mb-4">
              Frequently searched specialities...
            </h3>
            <div className="flex flex-col bg-card-light dark:bg-card-dark rounded-lg overflow-hidden  border-gray-200 dark:border-gray-700">
              {FREQUENTLY_SEARCHED_SPECIALITIES.map((speciality, index) => (
                <button
                  key={index}
                  onClick={() => handlePopularSearchClick(speciality)}
                  className={cn(
                    "flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors",
                    index !== FREQUENTLY_SEARCHED_SPECIALITIES.length - 1 &&
                      "border-b border-gray-200 dark:border-gray-700"
                  )}
                >
                  <span className="text-text-primary-light dark:text-text-primary-dark text-base font-normal leading-normal">
                    {speciality}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-text-secondary-light dark:text-text-secondary-dark shrink-0"
                  />
                </button>
              ))}
            </div>
          </div>
        ) : filteredProviders.length > 0 ? (
          filteredProviders.map((provider, index) => {
            // Extract experience years from experience string (e.g., "15+ years experience" -> 15)
            const experienceYears = provider.experience
              ? parseInt(provider.experience.match(/\d+/)?.[0] || "0")
              : undefined;

            // Clean up nextAvailable (remove "Next available: " prefix if present)
            const nextAvailable = provider.nextAvailable?.replace(
              /^Next available: /i,
              ""
            );

            // Extract price value (remove "Consultation Fee" suffix if present)
            const price = provider.price?.replace(/ Consultation Fee$/i, "");

            return (
              <DoctorCard
                key={index}
                name={provider.name}
                specialization={provider.specialization || ""}
                hospital={provider.location}
                experienceYears={experienceYears}
                rating={provider.rating}
                reviewsCount={provider.reviewsCount}
                price={price}
                verified={true}
                supportsVideo={false}
                languages={undefined}
                nextAvailable={nextAvailable}
                imageUrl={provider.imageUrl}
                imageAlt={provider.imageAlt}
                onBookClick={() => {
                  console.log("Book clicked for:", provider.name);
                  // Navigate to booking page
                }}
              />
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-text-primary-light dark:text-text-primary-dark text-lg font-medium mb-2">
              No results found
            </p>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>

      {/* Floating Action Button for Map View */}
      <div className="fixed bottom-24 right-6 z-20">
        <button
          onClick={handleMapClick}
          className="flex h-14 w-14 items-center justify-center gap-x-2 rounded-full bg-primary text-white shadow-lg hover:opacity-90 transition-opacity"
          aria-label="View on map"
        >
          <Map size={28} />
        </button>
      </div>
    </div>
  );
};
