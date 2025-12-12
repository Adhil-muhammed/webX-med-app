import type { LucideIcon } from "lucide-react";
import { Stethoscope, TestTube, Heart, Sparkles } from "lucide-react";

// Types
export interface Doctor {
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

export interface AvailableDoctor {
  name: string;
  specialization: string;
  availability: string;
  price: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface PatientStory {
  quote: string;
  name: string;
  location: string;
}

export interface Stat {
  label: string;
  value: string;
  accent?: "primary" | "secondary";
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  statusBadge: {
    type: "available" | "location" | "rating" | "certified";
    text: string;
    value?: string | number;
  };
  iconColor:
    | "primary"
    | "secondary"
    | "blue"
    | "green"
    | "purple"
    | "teal"
    | "yellow";
  href: string;
}

// Demo Data
export const DEFAULT_DOCTORS: Doctor[] = [
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

export const STATS: Stat[] = [
  { label: "Verified Doctors", value: "2,450+" },
  { label: "Happy Patients", value: "100K+", accent: "secondary" },
  { label: "Govt. Approved", value: "Yes" },
];

export const AVAILABLE_DOCTORS: AvailableDoctor[] = [
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

export const PATIENT_STORIES: PatientStory[] = [
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

export const SERVICES: Service[] = [
  {
    icon: Stethoscope,
    title: "Hospitals & Clinics",
    description: "230+ specialists",
    statusBadge: {
      type: "available",
      text: "Available now",
    },
    iconColor: "blue",
    href: "/services/hospitals",
  },
  {
    icon: TestTube,
    title: "Lab & Diagnostics",
    description: "Home collection",
    statusBadge: {
      type: "location",
      text: "📍 42 nearby",
    },
    iconColor: "purple",
    href: "/services/lab-tests",
  },
  {
    icon: Heart,
    title: "Dental Services",
    description: "Implants & more",
    statusBadge: {
      type: "rating",
      text: "4.8 rating",
    },
    iconColor: "teal",
    href: "/services/dental",
  },
  {
    icon: Sparkles,
    title: "Ayurveda Care",
    description: "Traditional healing",
    statusBadge: {
      type: "certified",
      text: "Certified",
    },
    iconColor: "yellow",
    href: "/services/ayurveda",
  },
];

// Default location
export const DEFAULT_LOCATION = "Kochi, Kerala";

// AppBar supporting text
export const APP_BAR_SUPPORTING_TEXT = "8 hospitals within 5km";
export const APP_BAR_ACTION_LABEL = "Show all hospitals near you";

// Availability tabs
export const AVAILABILITY_TABS = [
  "Available Now",
  "Today's Slots",
  "Video Consult",
];
