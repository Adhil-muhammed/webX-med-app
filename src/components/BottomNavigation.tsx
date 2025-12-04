import * as React from "react";
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
  href?: string;
  active?: boolean;
  onClick?: () => void;
}

interface BottomNavigationProps {
  items?: NavItem[];
  className?: string;
}

const defaultItems: NavItem[] = [
  {
    icon: Home,
    label: "Home",
    href: "#",
    active: true,
  },
  {
    icon: Calendar,
    label: "Appointments",
    href: "#",
  },
  {
    icon: FolderOpen,
    label: "Records",
    href: "#",
  },
  {
    icon: User,
    label: "Profile",
    href: "#",
  },
];

export const BottomNavigation = ({
  items = defaultItems,
  className,
}: BottomNavigationProps) => {
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
        const Component = item.href ? "a" : "button";

        return (
          <Component
            key={index}
            className={cn(
              "flex flex-col items-center justify-center gap-1",
              "min-w-[64px] min-h-[64px] sm:min-h-[80px]",
              "px-3 py-2 sm:py-3",
              "rounded-lg",
              "transition-all duration-200",
              "active:scale-95",
              "touch-manipulation",
              item.active
                ? "text-primary"
                : "text-text-secondary-light dark:text-text-secondary-dark"
            )}
            href={item.href}
            onClick={(e) => {
              if (item.onClick) {
                e.preventDefault();
                item.onClick();
              }
            }}
            aria-label={item.label}
            aria-current={item.active ? "page" : undefined}
          >
            <div
              className={cn(
                "relative flex items-center justify-center",
                "transition-transform duration-200",
                item.active && "scale-110"
              )}
            >
              <Icon
                size={22}
                className={cn(
                  "transition-all duration-200",
                  item.active ? "fill-current" : ""
                )}
                strokeWidth={item.active ? 2.5 : 2}
              />
              {item.active && (
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
                item.active ? "font-bold" : "font-medium"
              )}
            >
              {item.label}
            </span>
          </Component>
        );
      })}
    </nav>
  );
};
