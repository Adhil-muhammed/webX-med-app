import { HomeScreen } from "@/components/HomeScreen";

export const App = () => {
  return (
    <HomeScreen
      onNotificationClick={() => console.log("Notification clicked")}
      onCategoryClick={(category) => console.log("Category clicked:", category)}
      onDoctorBookClick={(doctor) => console.log("Book doctor:", doctor)}
      onBannerClick={() => console.log("Banner clicked")}
    />
  );
};
