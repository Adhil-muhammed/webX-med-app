import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { FilterChip } from "./FilterChip";
import { cn } from "@/lib/utils";

interface Filter {
  label: string;
  active?: boolean;
  onClose?: () => void;
  onClick?: () => void;
}

interface SearchResultsAppBarProps {
  title?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  filters?: Filter[];
  onBackClick?: () => void;
  className?: string;
}

export const SearchResultsAppBar = ({
  title = "Doctors near you",
  searchValue,
  onSearchChange,
  filters = [],
  onBackClick,
  className,
}: SearchResultsAppBarProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <div
      className={cn(
        "sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm",
        className
      )}
    >
      <div className="flex items-center p-4 pb-2 justify-between">
        <button
          onClick={handleBack}
          className="text-text-primary-light dark:text-text-primary-dark flex size-10 shrink-0 items-center justify-center"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          {title}
        </h2>
        <div className="flex size-10 shrink-0 items-center"></div>
      </div>
      {/* Search Bar */}
      <div className="px-0 py-2">
        <SearchBar
          placeholder="Search doctors, clinics, symptoms"
          value={searchValue}
          onChange={onSearchChange}
        />
      </div>
      {filters.length > 0 && (
        <div className="flex gap-3 px-4 pt-1 pb-3 overflow-x-auto whitespace-nowrap">
          {filters.map((filter, index) => (
            <FilterChip
              key={index}
              label={filter.label}
              active={filter.active}
              onClose={filter.onClose}
              onClick={filter.onClick}
            />
          ))}
        </div>
      )}
      <div className="border-b border-gray-200 dark:border-gray-700"></div>
    </div>
  );
};
