import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const SearchBar = ({
  placeholder = "Search doctors, clinics, labs...",
  value,
  onChange,
  className,
}: SearchBarProps) => {
  return (
    <div className={cn("px-4 py-3", className)}>
      <div className="relative w-full">
        <div className="relative flex items-center w-full h-12 rounded-lg bg-white dark:bg-text-primary-light/10 border border-input">
          {/* Search Icon */}
          <div className="absolute left-4 flex items-center justify-center pointer-events-none z-10">
            <Search
              size={20}
              className="text-text-secondary-light dark:text-text-secondary-dark"
            />
          </div>
          {/* Input Field */}
          <Input
            type="search"
            className="w-full h-full pl-12 pr-4 rounded-lg border-0 bg-transparent text-text-primary-light dark:text-text-primary-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark text-base font-normal focus-visible:ring-0 focus-visible:outline-none"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
