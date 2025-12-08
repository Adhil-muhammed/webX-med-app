import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, FolderOpen, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ComponentType<
    React.SVGProps<SVGSVGElement> & {
      size?: number;
      strokeWidth?: number;
    }
  >;
  label: string;
  path: string;
}

interface BottomNavigationProps {
  items?: NavItem[];
  className?: string;
}

const defaultItems: NavItem[] = [
  {
    icon: Home,
    label: "Home",
    path: "/",
  },
  {
    icon: Calendar,
    label: "Appointments",
    path: "/appointments",
  },
  {
    icon: FolderOpen,
    label: "Records",
    path: "/records",
  },
  {
    icon: User,
    label: "Profile",
    path: "/profile",
  },
];

export const BottomNavigation = ({
  items = defaultItems,
  className,
}: BottomNavigationProps) => {
  const location = useLocation();

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50",
        "flex h-16 sm:h-20 w-full items-center justify-around",
        "border-t border-gray-200 dark:border-white/10",
        "bg-background-light/95 dark:bg-background-dark/95",
        "backdrop-blur-md",
        "pb-safe-area-inset-bottom",
        "shadow-[0_-2px_10px_rgba(0,0,0,0.05)] dark:shadow-[0_-2px_10px_rgba(0,0,0,0.3)]",
        className
      )}
      role="navigation"
      aria-label="Bottom navigation"
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={index}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center gap-1",
              "min-w-[64px] min-h-[64px] sm:min-h-[80px]",
              "px-3 py-2 sm:py-3",
              "rounded-lg",
              "transition-all duration-200",
              "active:scale-95",
              "touch-manipulation",
              "no-underline",
              isActive
                ? "text-primary"
                : "text-text-secondary-light dark:text-text-secondary-dark"
            )}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
          >
            <div
              className={cn(
                "relative flex items-center justify-center",
                "transition-transform duration-200",
                isActive && "scale-110"
              )}
            >
              <Icon
                size={22}
                className={cn(
                  "transition-all duration-200",
                  isActive ? "fill-current" : ""
                )}
                strokeWidth={isActive ? 2.5 : 2}
              />
              {isActive && (
                <span
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                  aria-hidden="true"
                />
              )}
            </div>
            <span
              className={cn(
                "text-[11px] sm:text-xs leading-tight",
                "transition-all duration-200",
                isActive ? "font-bold" : "font-medium"
              )}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};
