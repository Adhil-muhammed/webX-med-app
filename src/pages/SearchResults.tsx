import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Map } from "lucide-react";
import { SearchResultsAppBar } from "@/components/SearchResultsAppBar";
import {
  SPECIALTIES,
  DOCTORS,
  HOSPITALS,
  SYMPTOMS,
  PROCEDURES,
  type SpecialtyData,
  type DoctorData,
  type HospitalData,
  type SymptomData,
  type ProcedureData,
} from "@/constants/searchData";
import { cn } from "@/lib/utils";

type FilterType =
  | "All"
  | "Specialty"
  | "Doctor"
  | "Hospital"
  | "Symptom"
  | "Procedure";

const FREQUENTLY_SEARCHED_SPECIALITIES = [
  "Dentist",
  "Gynecologist/obstetrician",
  "General Physician",
  "Dermatologist",
  "Ear-nose-throat (ent) Specialist",
  "Homoeopath",
  "Ayurveda",
];

// Category filters
const CATEGORY_FILTERS: FilterType[] = [
  "All",
  "Specialty",
  "Doctor",
  "Hospital",
  "Symptom",
  "Procedure",
];

export const SearchResultsPage = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState<string>(
    (location.state as { query?: string })?.query || "",
  );
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  // Fuzzy search with useMemo for performance and category filtering
  const filteredResults = useMemo(() => {
    if (!searchQuery) {
      return {
        specialties: [],
        doctors: [],
        hospitals: [],
        symptoms: [],
        procedures: [],
      };
    }

    const query = searchQuery.toLowerCase().trim();

    // Filter specialties
    let specialties = SPECIALTIES.filter(
      (specialty) =>
        specialty.title.toLowerCase().includes(query) ||
        specialty.subtitle?.toLowerCase().includes(query),
    );

    // Filter doctors
    let doctors = DOCTORS.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(query) ||
        doctor.specialization.toLowerCase().includes(query) ||
        doctor.location.toLowerCase().includes(query),
    );

    // Filter hospitals
    let hospitals = HOSPITALS.filter(
      (hospital) =>
        hospital.name.toLowerCase().includes(query) ||
        hospital.category.toLowerCase().includes(query) ||
        hospital.address.toLowerCase().includes(query) ||
        hospital.specialties.some((s) => s.toLowerCase().includes(query)),
    );

    // Filter symptoms
    let symptoms = SYMPTOMS.filter(
      (symptom) =>
        symptom.name.toLowerCase().includes(query) ||
        symptom.description.toLowerCase().includes(query),
    );

    // Filter procedures
    let procedures = PROCEDURES.filter(
      (procedure) =>
        procedure.name.toLowerCase().includes(query) ||
        procedure.description.toLowerCase().includes(query) ||
        procedure.specialty.toLowerCase().includes(query),
    );

    // Apply category filter
    if (activeFilter === "Specialty") {
      doctors = [];
      hospitals = [];
      symptoms = [];
      procedures = [];
    } else if (activeFilter === "Doctor") {
      specialties = [];
      hospitals = [];
      symptoms = [];
      procedures = [];
    } else if (activeFilter === "Hospital") {
      specialties = [];
      doctors = [];
      symptoms = [];
      procedures = [];
    } else if (activeFilter === "Symptom") {
      specialties = [];
      doctors = [];
      hospitals = [];
      procedures = [];
    } else if (activeFilter === "Procedure") {
      specialties = [];
      doctors = [];
      hospitals = [];
      symptoms = [];
    }

    return { specialties, doctors, hospitals, symptoms, procedures };
  }, [searchQuery, activeFilter]);

  const handlePopularSearchClick = (keyword: string) => {
    setSearchQuery(keyword);
  };

  const handleMapClick = () => {
    console.log("Map view clicked");
  };

  // Convert category filters to the format expected by SearchResultsAppBar
  const categoryFilters = CATEGORY_FILTERS.map((filter) => ({
    label: filter,
    active: activeFilter === filter,
    onClick: () => setActiveFilter(filter),
  }));

  // Separate featured and regular specialties
  const regularSpecialties = filteredResults.specialties.filter(
    (s) => !s.isFeatured,
  );

  const hasResults =
    filteredResults.specialties.length > 0 ||
    filteredResults.doctors.length > 0 ||
    filteredResults.hospitals.length > 0 ||
    filteredResults.symptoms.length > 0 ||
    filteredResults.procedures.length > 0;

  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark",
      )}
    >
      <SearchResultsAppBar
        title="Search Healthcare"
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        filters={categoryFilters}
      />

      {/* Content */}
      <div className="flex flex-col gap-4 px-4 pt-4 pb-24">
        {!searchQuery ? (
          /* Frequently Searched Specialities */
          <div className="flex flex-col">
            <h3 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] mb-4">
              Frequently searched specialities...
            </h3>
            <div className="flex flex-col bg-card-light dark:bg-card-dark rounded-lg overflow-hidden border-gray-200 dark:border-gray-700">
              {FREQUENTLY_SEARCHED_SPECIALITIES.map((speciality, index) => (
                <button
                  key={index}
                  onClick={() => handlePopularSearchClick(speciality)}
                  className={cn(
                    "flex items-center justify-between w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors",
                    index !== FREQUENTLY_SEARCHED_SPECIALITIES.length - 1 &&
                      "border-b border-gray-200 dark:border-gray-700",
                  )}
                >
                  <span className="text-text-primary-light dark:text-text-primary-dark text-base font-normal leading-normal">
                    {speciality}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : hasResults ? (
          <>
            {/* Regular Specialties */}
            {regularSpecialties.length > 0 && (
              <div className="space-y-4">
                {regularSpecialties.map((specialty) => (
                  <SpecialtyListItem key={specialty.id} specialty={specialty} />
                ))}
              </div>
            )}

            {/* Doctors */}
            {filteredResults.doctors.length > 0 && (
              <div className="flex flex-col gap-3 mt-2">
                {filteredResults.doctors.map((doctor) => (
                  <DoctorResultCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            )}

            {/* Hospitals */}
            {filteredResults.hospitals.length > 0 && (
              <div className="flex flex-col gap-3 mt-2">
                {filteredResults.hospitals.map((hospital) => (
                  <HospitalCard key={hospital.id} hospital={hospital} />
                ))}
              </div>
            )}

            {/* Symptoms */}
            {filteredResults.symptoms.length > 0 && (
              <div className="flex flex-col gap-3 mt-2">
                {filteredResults.symptoms.map((symptom) => (
                  <SymptomCard key={symptom.id} symptom={symptom} />
                ))}
              </div>
            )}

            {/* Procedures */}
            {filteredResults.procedures.length > 0 && (
              <div className="flex flex-col gap-3 mt-2">
                {filteredResults.procedures.map((procedure) => (
                  <ProcedureCard key={procedure.id} procedure={procedure} />
                ))}
              </div>
            )}
          </>
        ) : (
          /* No Results */
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

// Specialty List Item Component
interface SpecialtyListItemProps {
  specialty: SpecialtyData;
}

const SpecialtyListItem = ({ specialty }: SpecialtyListItemProps) => {
  const Icon = specialty.icon;

  return (
    <div className="flex items-center gap-3 p-3 bg-white dark:bg-card-dark rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
      {/* Icon */}
      <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center shrink-0">
        <Icon size={20} className="text-primary" />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h4 className="text-gray-900 dark:text-gray-100 font-semibold text-sm leading-tight">
          {specialty.title}
        </h4>
        {specialty.subtitle && (
          <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5 line-clamp-2">
            {specialty.subtitle}
          </p>
        )}
      </div>

      {/* Tag */}
      <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
        Specialty
      </span>
    </div>
  );
};

// Doctor Result Card Component
interface DoctorResultCardProps {
  doctor: DoctorData;
}

const DoctorResultCard = ({ doctor }: DoctorResultCardProps) => {
  return (
    <div className="flex items-center gap-3 p-3 bg-white dark:bg-card-dark rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
      {/* Avatar */}
      <div className="relative shrink-0">
        <img
          src={
            doctor.imageUrl ||
            `https://api.dicebear.com/7.x/avataaars/svg?seed=${doctor.name}`
          }
          alt={doctor.imageAlt || doctor.name}
          className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700"
        />
        {doctor.hasVideoConsult && (
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800">
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h4 className="text-gray-900 dark:text-gray-100 font-semibold text-sm leading-tight truncate">
          {doctor.name}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">
          {doctor.experience} • {doctor.specialization}
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-xs mt-0.5">
          {doctor.location}
        </p>
      </div>

      {/* Tag */}
      <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
        Doctor
      </span>
    </div>
  );
};

// Hospital Card Component
interface HospitalCardProps {
  hospital: HospitalData;
}

const HospitalCard = ({ hospital }: HospitalCardProps) => {
  return (
    <div className="p-4 bg-white dark:bg-card-dark rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h4 className="text-gray-900 dark:text-gray-100 font-semibold text-base leading-tight">
            {hospital.name}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
            {hospital.category}
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">
            {hospital.address}
          </p>
          {hospital.distance && (
            <p className="text-gray-500 dark:text-gray-500 text-xs mt-0.5">
              {hospital.distance}
            </p>
          )}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {hospital.specialties.slice(0, 3).map((specialty, idx) => (
              <span
                key={idx}
                className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-[10px] font-medium px-2 py-0.5 rounded"
              >
                {specialty}
              </span>
            ))}
            {hospital.specialties.length > 3 && (
              <span className="text-gray-500 dark:text-gray-400 text-[10px]">
                +{hospital.specialties.length - 3} more
              </span>
            )}
          </div>
        </div>

        <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
          Hospital
        </span>
      </div>
    </div>
  );
};

// Symptom Card Component
interface SymptomCardProps {
  symptom: SymptomData;
}

const SymptomCard = ({ symptom }: SymptomCardProps) => {
  const Icon = symptom.icon;

  return (
    <div className="p-3 bg-white dark:bg-card-dark rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
            symptom.severity === "severe" && "bg-red-50 dark:bg-red-900/20",
            symptom.severity === "moderate" &&
              "bg-yellow-50 dark:bg-yellow-900/20",
            symptom.severity === "mild" && "bg-green-50 dark:bg-green-900/20",
          )}
        >
          <Icon
            size={20}
            className={cn(
              symptom.severity === "severe" && "text-red-600",
              symptom.severity === "moderate" && "text-yellow-600",
              symptom.severity === "mild" && "text-green-600",
            )}
          />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-gray-900 dark:text-gray-100 font-semibold text-sm leading-tight">
            {symptom.name}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">
            {symptom.description}
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">
            See: {symptom.relatedSpecialties.join(", ")}
          </p>
        </div>

        <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
          Symptom
        </span>
      </div>
    </div>
  );
};

// Procedure Card Component
interface ProcedureCardProps {
  procedure: ProcedureData;
}

const ProcedureCard = ({ procedure }: ProcedureCardProps) => {
  const Icon = procedure.icon;

  return (
    <div className="p-3 bg-white dark:bg-card-dark rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
          <Icon size={20} className="text-blue-600" />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-gray-900 dark:text-gray-100 font-semibold text-sm leading-tight">
            {procedure.name}
          </h4>
          <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">
            {procedure.description}
          </p>
          <div className="flex gap-3 mt-1 text-[11px] text-gray-500 dark:text-gray-500">
            {procedure.duration && <span>⏱ {procedure.duration}</span>}
            {procedure.recoveryTime && (
              <span>🏥 Recovery: {procedure.recoveryTime}</span>
            )}
          </div>
        </div>

        <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
          Procedure
        </span>
      </div>
    </div>
  );
};
