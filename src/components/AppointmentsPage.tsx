import { AppBar } from "./AppBar";
import { BottomNavigation } from "./BottomNavigation";
import { cn } from "@/lib/utils";

export const AppointmentsPage = () => {
  return (
    <div
      className={cn(
        "relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden pb-20 sm:pb-24"
      )}
    >
      <AppBar
        location="Kochi, Kerala"
        supportingText="Your appointments"
        actionLabel=""
        onNotificationClick={() => console.log("Notification clicked")}
      />

      <div className="flex-1 px-4 py-6">
        <h2 className="text-text-primary-light dark:text-text-primary-dark text-2xl font-bold mb-4">
          Appointments
        </h2>
        <p className="text-text-secondary-light dark:text-text-secondary-dark">
          Your upcoming and past appointments will appear here.
        </p>
      </div>

      <BottomNavigation />
    </div>
  );
};
