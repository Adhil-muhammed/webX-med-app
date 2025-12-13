import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/Home";
import { SearchResultsPage } from "@/pages/SearchResults";
import { AppointmentsPage } from "@/components/AppointmentsPage";
import { RecordsPage } from "@/components/RecordsPage";
import { ProfilePage } from "@/components/ProfilePage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchResultsPage />} />
      <Route path="/appointments" element={<AppointmentsPage />} />
      <Route path="/records" element={<RecordsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};
