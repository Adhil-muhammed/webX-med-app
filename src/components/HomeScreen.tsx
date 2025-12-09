import { useState } from "react";
import { AppBar } from "./AppBar";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";
// import { CategoryCard } from "./CategoryCard";
import { PromotionalBanner } from "./PromotionalBanner";
import { DoctorCard } from "./DoctorCard";
import { BottomNavigation } from "./BottomNavigation";
// import {
//   Stethoscope,
//   Sparkles,
//   TestTube,
//   Heart,
//   CloudRain,
//   ShieldCheck,
//   Leaf,
// } from "lucide-react";
import { StatsHighlight } from "./StatsHighlight";
import { CompactDoctorCard } from "./CompactDoctorCard";
// import { InfoListCard } from "./InfoListCard";
import { PatientStoryCard } from "./PatientStoryCard";
import { cn } from "@/lib/utils";
import { ServiceCard } from "./ServiceCard";
import {
  Stethoscope,
  TestTube,
  Heart,
  Sparkles,
  Pill,
  Activity,
  Calendar,
  FileText,
} from "lucide-react";

interface Doctor {
  name: string;
  specialization: string;
  hospital: string;
  experienceYears?: number;
  rating?: number;
  reviewsCount?: number;
  price?: string;
  verified?: boolean;
  supportsVideo?: boolean;
  languages?: string[];
  nextAvailable?: string;
  imageUrl?: string;
  imageAlt?: string;
}

interface HomeScreenProps {
  location?: string;
  doctors?: Doctor[];
  className?: string;
  onNotificationClick?: () => void;
  onCategoryClick?: (category: string) => void;
  onDoctorBookClick?: (doctor: Doctor) => void;
  onBannerClick?: () => void;
}

const defaultDoctors: Doctor[] = [
  {
    name: "Dr. Anjali Varma",
    specialization: "Cardiologist",
    hospital: "Apollo Hospital, Kochi",
    experienceYears: 15,
    rating: 4.9,
    reviewsCount: 312,
    price: "₹700 consultation",
    verified: true,
    supportsVideo: true,
    languages: ["ML", "EN"],
    nextAvailable: "Today 5:00 PM",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzJ5xCIlZJ3BZf9da5AcLPer2VN74BK0vm9HulMdagZKxIuasqWuQlyukaEbTzPP2KiIXp7pU1TSGMzfx2LEQmwqKBZGx2ZQe7o2TVUQjyDFttrX-mztvy9hHxzNcK6FNKnZVGim4n1qRT3bl0inUTRV5w8Quqagce4SNnRMAEpXR69W1Z6l2dk5wFJV0tRY-LIU2ZEVXhTQNrSVDZgH4DcfMP656NPubVASXC18af88FicpsJTkEnIoK849hZxr6ocW2UBk4g6zHF",
    imageAlt: "A portrait of Dr. Anjali Varma, a smiling female doctor.",
  },
  {
    name: "Dr. Rajeev Kumar",
    specialization: "Dentist",
    hospital: "Aster Medcity, Kochi",
    experienceYears: 12,
    rating: 4.8,
    reviewsCount: 234,
    price: "₹500 consultation",
    verified: true,
    supportsVideo: false,
    languages: ["ML", "EN", "HI"],
    nextAvailable: "Today 4:30 PM",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqjnjTU4a8Xl1hW5K-wyvJVqqzB7B5C-5PFvvYMWLhEL9-aV0acmgXwO-pWhGej8kNIvZzVpofLt0X2abnR6RFt1m17hRnfHEkJqd82BrPfCoSN6NOCSpsu09t86pX7iV16_xqR7K_JDbZsxT4QGyKKz-FWkcokYKNJdZcfaco3_rfL8hWBtboVxt0umMJ1OBuKJGGgAdh63GV1QsOMs3aF1_W_3T2JondS2QLt-9Z3fREHdxGPmrEN7p9rnI0hGyBbkIw2ixojQ4Z",
    imageAlt: "A portrait of Dr. Rajeev Kumar, a professional male doctor.",
  },
];

const defaultBannerImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAO8F-zCsBz7r7noFw0nTlYgSYRiRFQwsDBRkh4k_Hte3hTQIz9pRReCVaTAF1TA2dSgjEbANHeQMo2xNAIq6zW0yrcasKtLxKXcf5b3F6t0O2D4UHW0ut7rEsD0PwGkhpbHOn515h1lCbS2uRGz5TgB2zS4gzHGRAj71Rs43FLkWqsO7jFKpxycT8sOmA3CxaTaaj4MY9hsyAUeJfatAvRwjcJj50UMA6gVSeOE8Je4jDM--yFfefDFFOAcrnJO1RWZ6Nk9CHgqsM3";

export const HomeScreen = ({
  location = "Kochi, Kerala",
  doctors = defaultDoctors,
  className,
  onNotificationClick,
  // onCategoryClick,
  onDoctorBookClick,
  onBannerClick,
}: HomeScreenProps) => {
  const [activeAvailabilityTab, setActiveAvailabilityTab] =
    useState("Available Now");

  // const categories = [
  //   { icon: Stethoscope, label: "Dentist", color: "primary" as const },
  //   { icon: Sparkles, label: "Ayurveda", color: "secondary" as const },
  //   { icon: TestTube, label: "Lab", color: "primary" as const },
  //   { icon: Heart, label: "Physician", color: "primary" as const },
  // ];

  const stats = [
    { label: "Verified Doctors", value: "2,450+" },
    { label: "Happy Patients", value: "100K+", accent: "secondary" as const },
    { label: "Govt. Approved", value: "Yes" },
  ];

  const availableDoctors = [
    {
      name: "Dr. Priya Menon",
      specialization: "General Physician",
      availability: "Available in 45 mins",
      price: "₹400",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDqjnjTU4a8Xl1hW5K-wyvJVqqzB7B5C-5PFvvYMWLhEL9-aV0acmgXwO-pWhGej8kNIvZzVpofLt0X2abnR6RFt1m17hRnfHEkJqd82BrPfCoSN6NOCSpsu09t86pX7iV16_xqR7K_JDbZsxT4QGyKKz-FWkcokYKNJdZcfaco3_rfL8hWBtboVxt0umMJ1OBuKJGGgAdh63GV1QsOMs3aF1_W_3T2JondS2QLt-9Z3fREHdxGPmrEN7p9rnI0hGyBbkIw2ixojQ4Z",
      imageAlt: "A portrait of Dr. Priya Menon",
    },
    {
      name: "Dr. Anoop S.",
      specialization: "Dentist",
      availability: "Available in 20 mins",
      price: "₹500",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAzJ5xCIlZJ3BZf9da5AcLPer2VN74BK0vm9HulMdagZKxIuasqWuQlyukaEbTzPP2KiIXp7pU1TSGMzfx2LEQmwqKBZGx2ZQe7o2TVUQjyDFttrX-mztvy9hHxzNcK6FNKnZVGim4n1qRT3bl0inUTRV5w8Quqagce4SNnRMAEpXR69W1Z6l2dk5wFJV0tRY-LIU2ZEVXhTQNrSVDZgH4DcfMP656NPubVASXC18af88FicpsJTkEnIoK849hZxr6ocW2UBk4g6zHF",
      imageAlt: "A portrait of Dr. Anoop S.",
    },
    {
      name: "Dr. Fatima K.",
      specialization: "Pediatrician",
      availability: "Available in 60 mins",
      price: "₹600",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCE79aBEE7JnaJfDEWsCP9wR53LBX0i-fW2bHPQ-ZZXYVmMTOUe7VtvMsfvu5D59_YWFUKsie9L_qHAFtiADWkDcApvRP0D4sqUZ7M5yr7a63tKTor2nHHvmFuKYZ1aNBpNl-WUqt7ZLWrPV_wYXrGC-5Iz9_yjR232mcsxMLexOFr6mz9Rkvpg3wIUczNODA5Y8jpgMB1V6T-ilJCvBU7dS4H3tgTsKUtqjzoJ7_SzgAStRdvi3JDO0vreGL26g0tcTKmD5oUalI9P",
      imageAlt: "A portrait of Dr. Fatima K.",
    },
  ];

  // const infoItems = [
  //   {
  //     icon: CloudRain,
  //     title: "Monsoon Health Tips",
  //     description: "Stay safe this rainy season",
  //     iconColor: "primary" as const,
  //   },
  //   {
  //     icon: ShieldCheck,
  //     title: "Common Conditions",
  //     description: "Learn about local ailments",
  //     iconColor: "secondary" as const,
  //   },
  //   {
  //     icon: Leaf,
  //     title: "Local Health Schemes",
  //     description: "KAHS, PMJAY & more",
  //     iconColor: "primary" as const,
  //   },
  // ];

  const stories = [
    {
      quote:
        '"Found an excellent Ayurveda doctor for my arthritis. Video consultation was so convenient!"',
      name: "Lakshmi R.",
      location: "Thrissur",
    },
    {
      quote:
        '"The booking process was seamless, and I found a great pediatrician for my son in minutes."',
      name: "Arun P.",
      location: "Kochi",
    },
  ];

  const services = [
    {
      icon: Stethoscope,
      title: "Doctor Consultation",
      description: "Book appointments with verified doctors",
      badge: "Popular",
      iconColor: "primary" as const,
      href: "/services/consultation",
    },
    {
      icon: TestTube,
      title: "Lab Tests",
      description: "Book lab tests and health checkups",
      iconColor: "blue" as const,
      href: "/services/lab-tests",
    },
    {
      icon: Heart,
      title: "Emergency Care",
      description: "24/7 emergency medical assistance",
      iconColor: "green" as const,
      href: "/services/emergency",
    },
    {
      icon: Sparkles,
      title: "Ayurveda",
      description: "Traditional Ayurvedic treatments",
      iconColor: "secondary" as const,
      href: "/services/ayurveda",
    },
    {
      icon: Pill,
      title: "Pharmacy",
      description: "Order medicines online",
      iconColor: "purple" as const,
      href: "/services/pharmacy",
    },
    {
      icon: Activity,
      title: "Health Packages",
      description: "Comprehensive health checkup packages",
      iconColor: "primary" as const,
      href: "/services/health-packages",
    },
    {
      icon: Calendar,
      title: "Follow-up Care",
      description: "Schedule follow-up appointments",
      iconColor: "blue" as const,
      href: "/services/follow-up",
    },
    {
      icon: FileText,
      title: "Health Records",
      description: "Access your medical records",
      iconColor: "green" as const,
      href: "/services/records",
    },
  ];

  return (
    <div
      className={cn(
        "relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden pb-20 sm:pb-24",
        className
      )}
    >
      <AppBar
        location={location}
        supportingText="8 hospitals within 5km"
        actionLabel="Show all hospitals near you"
        onNotificationClick={onNotificationClick}
      />
      <SearchBar />

      {/* Hero Banner */}
      <PromotionalBanner
        backgroundImage={defaultBannerImage}
        title="Kerala's Trusted Healthcare Partner"
        subtitle="Book appointments with ease."
        description="Find doctors, clinics, and labs near you."
        onClick={onBannerClick}
      />

      {/* Stats */}
      <section className="flex justify-around bg-primary/10 dark:bg-primary/20 py-3 mx-4 rounded-lg border border-primary/20 dark:border-primary/30">
        {stats.map((stat, index) => (
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
        <div className="flex items-center justify-between px-4 pb-3">
          <h3 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em]">
            Our Services
          </h3>
          <Link
            to="/services"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 px-4 pb-4 sm:grid-cols-4">
          {services.slice(0, 4).map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              badge={service.badge}
              iconColor={service.iconColor}
              href={service.href}
            />
          ))}
        </div>
      </section>

      {/* Available Now */}
      <section className="flex flex-col pt-6">
        <h3 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-3">
          Available Now
        </h3>
        <div className="flex border-b border-gray-200 dark:border-white/10 px-4">
          {["Available Now", "Today's Slots", "Video Consult"].map((tab) => (
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
          {availableDoctors.map((doctor, index) => (
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

      {/* Quick Categories */}
      {/* <section className="flex flex-col">
        <h3 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Quick Categories
        </h3>
        <div className="flex gap-3 px-4 py-3 overflow-x-auto">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              label={category.label}
              iconColor={category.color}
              onClick={() => onCategoryClick?.(category.label)}
            />
          ))}
        </div>
      </section> */}

      {/* Healthcare in Your Language */}
      {/* <section className="flex flex-col pt-4">
        <h3 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-3">
          Healthcare in Your Language
        </h3>
        <div className="flex flex-col gap-3 px-4">
          {infoItems.map((item, index) => (
            <InfoListCard
              key={index}
              icon={item.icon}
              iconColor={item.iconColor}
              title={item.title}
              description={item.description}
              onClick={() => {}}
            />
          ))}
        </div>
      </section> */}

      {/* Patient Stories */}
      <section className="flex flex-col pt-6">
        <h3 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-3">
          Patient Stories
        </h3>
        <div className="flex gap-3 px-4 pb-3 overflow-x-auto">
          {stories.map((story, index) => (
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
        <h3 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-3">
          Book an Appointment
        </h3>
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
