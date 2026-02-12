import type { LucideIcon } from "lucide-react";
import {
  Heart,
  Activity,
  Baby,
  Stethoscope,
  Utensils,
  Brain,
  Eye,
  Bone,
  Pill,
  Syringe,
  Thermometer,
  BedDouble,
  Building2,
  Shield,
  User,
  Smile,
  Sparkles,
  Ear,
} from "lucide-react";

// ============================================
// TYPES
// ============================================

export interface SpecialtyData {
  id: string;
  type: "Specialty";
  title: string;
  subtitle: string;
  icon: LucideIcon;
  isFeatured?: boolean;
  doctorCount?: number;
}

export interface DoctorData {
  id: string;
  type: "Doctor";
  name: string;
  specialization: string;
  experience: string;
  location: string;
  distance?: string;
  rating?: number;
  reviewsCount?: number;
  nextAvailable?: string;
  price?: string;
  imageUrl?: string;
  imageAlt?: string;
  hasVideoConsult?: boolean;
}

export interface HospitalData {
  id: string;
  type: "Hospital";
  name: string;
  category: string;
  address: string;
  distance?: string;
  rating?: number;
  reviewsCount?: number;
  specialties: string[];
  isOpen24x7?: boolean;
  hasEmergency?: boolean;
  imageUrl?: string;
}

export interface SymptomData {
  id: string;
  type: "Symptom";
  name: string;
  description: string;
  relatedSpecialties: string[];
  severity: "mild" | "moderate" | "severe";
  icon: LucideIcon;
}

export interface ProcedureData {
  id: string;
  type: "Procedure";
  name: string;
  description: string;
  specialty: string;
  duration?: string;
  recoveryTime?: string;
  icon: LucideIcon;
}

export type SearchResultType = SpecialtyData | DoctorData | HospitalData | SymptomData | ProcedureData;

// ============================================
// SPECIALTY DATA
// ============================================

export const SPECIALTIES: SpecialtyData[] = [
  {
    id: "sp-1",
    type: "Specialty",
    title: "Cardiology",
    subtitle: "For heart and blood pressure problems",
    icon: Heart,
    isFeatured: true,
    doctorCount: 45,
  },
  {
    id: "sp-2",
    type: "Specialty",
    title: "Cardiothoracic & Vascular Surgery",
    subtitle: "For surgical treatments of thoracic organs",
    icon: Activity,
    doctorCount: 23,
  },
  {
    id: "sp-3",
    type: "Specialty",
    title: "Paediatric Cardiology",
    subtitle: "For managing heart disorders in children",
    icon: Baby,
    doctorCount: 18,
  },
  {
    id: "sp-4",
    type: "Specialty",
    title: "Paediatric Cardiac Surgery",
    subtitle: "For managing heart surgeries in children",
    icon: Stethoscope,
    doctorCount: 12,
  },
  {
    id: "sp-5",
    type: "Specialty",
    title: "Intensive Care",
    subtitle: "Advanced support for serious conditions",
    icon: Activity,
    doctorCount: 34,
  },
  {
    id: "sp-6",
    type: "Specialty",
    title: "Diet Care",
    subtitle: "Diet consultation and nutrition planning",
    icon: Utensils,
    doctorCount: 27,
  },
  {
    id: "sp-7",
    type: "Specialty",
    title: "Neurology",
    subtitle: "Brain and nervous system disorders",
    icon: Brain,
    doctorCount: 38,
  },
  {
    id: "sp-8",
    type: "Specialty",
    title: "Ophthalmology",
    subtitle: "Eye care and vision problems",
    icon: Eye,
    doctorCount: 42,
  },
  {
    id: "sp-9",
    type: "Specialty",
    title: "Orthopedics",
    subtitle: "Bone, joint, and muscle problems",
    icon: Bone,
    doctorCount: 51,
  },
  // Frequently Searched Specialties
  {
    id: "sp-10",
    type: "Specialty",
    title: "Dentist",
    subtitle: "Dental care, teeth cleaning, and oral health",
    icon: Smile,
    doctorCount: 67,
  },
  {
    id: "sp-11",
    type: "Specialty",
    title: "Gynecologist/obstetrician",
    subtitle: "Women's health, pregnancy, and reproductive care",
    icon: User,
    doctorCount: 54,
  },
  {
    id: "sp-12",
    type: "Specialty",
    title: "General Physician",
    subtitle: "Primary care for common health issues",
    icon: Stethoscope,
    doctorCount: 89,
  },
  {
    id: "sp-13",
    type: "Specialty",
    title: "Dermatologist",
    subtitle: "Skin, hair, and nail care and treatment",
    icon: Activity,
    doctorCount: 46,
  },
  {
    id: "sp-14",
    type: "Specialty",
    title: "Ear-nose-throat (ent) Specialist",
    subtitle: "ENT disorders and hearing problems",
    icon: Ear,
    doctorCount: 38,
  },
  {
    id: "sp-15",
    type: "Specialty",
    title: "Homoeopath",
    subtitle: "Homeopathic treatment and natural healing",
    icon: Pill,
    doctorCount: 42,
  },
  {
    id: "sp-16",
    type: "Specialty",
    title: "Ayurveda",
    subtitle: "Traditional Indian medicine and holistic care",
    icon: Sparkles,
    doctorCount: 56,
  },
];

// ============================================
// DOCTOR DATA
// ============================================

export const DOCTORS: DoctorData[] = [
  {
    id: "doc-1",
    type: "Doctor",
    name: "Dr. Vignesh C",
    specialization: "Critical Care Specialist",
    experience: "10 years",
    location: "Chennai, Tamil Nadu",
    rating: 4.8,
    reviewsCount: 156,
    nextAvailable: "Today, 4:00 PM",
    price: "₹800",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vignesh",
    imageAlt: "Dr. Vignesh C",
    hasVideoConsult: true,
  },
  {
    id: "doc-2",
    type: "Doctor",
    name: "Dr. Swapna Menon",
    specialization: "Critical Care Specialist",
    experience: "10 years",
    location: "Chennai, Tamil Nadu",
    rating: 4.9,
    reviewsCount: 203,
    nextAvailable: "Tomorrow, 10:00 AM",
    price: "₹850",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Swapna",
    imageAlt: "Dr. Swapna Menon",
    hasVideoConsult: true,
  },
  {
    id: "doc-3",
    type: "Doctor",
    name: "Dr. Ashok Kumar",
    specialization: "Critical Care Specialist",
    experience: "10 years",
    location: "Chennai, Tamil Nadu",
    rating: 4.7,
    reviewsCount: 142,
    nextAvailable: "Today, 6:00 PM",
    price: "₹750",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ashok",
    imageAlt: "Dr. Ashok Kumar",
    hasVideoConsult: true,
  },
  {
    id: "doc-4",
    type: "Doctor",
    name: "Dr. Bharath Kumar",
    specialization: "Critical Care Specialist",
    experience: "10 years",
    location: "Chennai, Tamil Nadu",
    rating: 4.6,
    reviewsCount: 98,
    nextAvailable: "Today, 5:30 PM",
    price: "₹700",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bharath",
    imageAlt: "Dr. Bharath Kumar",
    hasVideoConsult: false,
  },
  {
    id: "doc-5",
    type: "Doctor",
    name: "Dr. Priya Nair",
    specialization: "Cardiologist",
    experience: "15 years",
    location: "Kochi, Kerala",
    rating: 4.9,
    reviewsCount: 287,
    nextAvailable: "Today, 3:00 PM",
    price: "₹1000",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    imageAlt: "Dr. Priya Nair",
    hasVideoConsult: true,
  },
  {
    id: "doc-6",
    type: "Doctor",
    name: "Dr. Rajesh Varma",
    specialization: "Neurologist",
    experience: "12 years",
    location: "Trivandrum, Kerala",
    rating: 4.8,
    reviewsCount: 214,
    nextAvailable: "Tomorrow, 11:00 AM",
    price: "₹900",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
    imageAlt: "Dr. Rajesh Varma",
    hasVideoConsult: true,
  },
  // Dentists
  {
    id: "doc-7",
    type: "Doctor",
    name: "Dr. Arun Dental",
    specialization: "Dentist",
    experience: "8 years",
    location: "Kochi, Kerala",
    rating: 4.7,
    reviewsCount: 189,
    nextAvailable: "Today, 2:00 PM",
    price: "₹500",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arun",
    imageAlt: "Dr. Arun Dental",
    hasVideoConsult: false,
  },
  {
    id: "doc-8",
    type: "Doctor",
    name: "Dr. Lakshmi Pillai",
    specialization: "Dentist",
    experience: "12 years",
    location: "Trivandrum, Kerala",
    rating: 4.9,
    reviewsCount: 245,
    nextAvailable: "Tomorrow, 9:00 AM",
    price: "₹600",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lakshmi",
    imageAlt: "Dr. Lakshmi Pillai",
    hasVideoConsult: true,
  },
  // Gynecologists
  {
    id: "doc-9",
    type: "Doctor",
    name: "Dr. Kavya Menon",
    specialization: "Gynecologist",
    experience: "14 years",
    location: "Ernakulam, Kerala",
    rating: 4.8,
    reviewsCount: 312,
    nextAvailable: "Today, 11:00 AM",
    price: "₹800",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya",
    imageAlt: "Dr. Kavya Menon",
    hasVideoConsult: true,
  },
  {
    id: "doc-10",
    type: "Doctor",
    name: "Dr. Suma Krishnan",
    specialization: "Obstetrician",
    experience: "16 years",
    location: "Kochi, Kerala",
    rating: 4.9,
    reviewsCount: 428,
    nextAvailable: "Today, 4:30 PM",
    price: "₹900",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Suma",
    imageAlt: "Dr. Suma Krishnan",
    hasVideoConsult: true,
  },
  // General Physicians
  {
    id: "doc-11",
    type: "Doctor",
    name: "Dr. Ramesh Kumar",
    specialization: "General Physician",
    experience: "9 years",
    location: "Trivandrum, Kerala",
    rating: 4.6,
    reviewsCount: 234,
    nextAvailable: "Today, 1:00 PM",
    price: "₹400",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ramesh",
    imageAlt: "Dr. Ramesh Kumar",
    hasVideoConsult: true,
  },
  {
    id: "doc-12",
    type: "Doctor",
    name: "Dr. Meera Nair",
    specialization: "General Physician",
    experience: "11 years",
    location: "Kochi, Kerala",
    rating: 4.7,
    reviewsCount: 267,
    nextAvailable: "Today, 10:00 AM",
    price: "₹450",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera",
    imageAlt: "Dr. Meera Nair",
    hasVideoConsult: true,
  },
  // Dermatologists
  {
    id: "doc-13",
    type: "Doctor",
    name: "Dr. Anjali Varma",
    specialization: "Dermatologist",
    experience: "10 years",
    location: "Ernakulam, Kerala",
    rating: 4.8,
    reviewsCount: 198,
    nextAvailable: "Tomorrow, 2:00 PM",
    price: "₹700",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali",
    imageAlt: "Dr. Anjali Varma",
    hasVideoConsult: true,
  },
  {
    id: "doc-14",
    type: "Doctor",
    name: "Dr. Sanjay Menon",
    specialization: "Dermatologist",
    experience: "13 years",
    location: "Kochi, Kerala",
    rating: 4.9,
    reviewsCount: 289,
    nextAvailable: "Today, 5:00 PM",
    price: "₹800",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay",
    imageAlt: "Dr. Sanjay Menon",
    hasVideoConsult: true,
  },
  // ENT Specialists
  {
    id: "doc-15",
    type: "Doctor",
    name: "Dr. Vinod Kumar",
    specialization: "ENT Specialist",
    experience: "11 years",
    location: "Trivandrum, Kerala",
    rating: 4.7,
    reviewsCount: 176,
    nextAvailable: "Today, 3:30 PM",
    price: "₹650",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vinod",
    imageAlt: "Dr. Vinod Kumar",
    hasVideoConsult: false,
  },
  {
    id: "doc-16",
    type: "Doctor",
    name: "Dr. Deepa Nair",
    specialization: "ENT Specialist",
    experience: "9 years",
    location: "Kochi, Kerala",
    rating: 4.8,
    reviewsCount: 201,
    nextAvailable: "Tomorrow, 10:30 AM",
    price: "₹700",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Deepa",
    imageAlt: "Dr. Deepa Nair",
    hasVideoConsult: true,
  },
  // Homoeopaths
  {
    id: "doc-17",
    type: "Doctor",
    name: "Dr. Suresh Pillai",
    specialization: "Homoeopath",
    experience: "15 years",
    location: "Ernakulam, Kerala",
    rating: 4.6,
    reviewsCount: 154,
    nextAvailable: "Today, 12:00 PM",
    price: "₹350",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Suresh",
    imageAlt: "Dr. Suresh Pillai",
    hasVideoConsult: false,
  },
  {
    id: "doc-18",
    type: "Doctor",
    name: "Dr. Radha Krishna",
    specialization: "Homoeopath",
    experience: "12 years",
    location: "Trivandrum, Kerala",
    rating: 4.7,
    reviewsCount: 187,
    nextAvailable: "Today, 4:00 PM",
    price: "₹400",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Radha",
    imageAlt: "Dr. Radha Krishna",
    hasVideoConsult: true,
  },
  // Ayurveda Practitioners
  {
    id: "doc-19",
    type: "Doctor",
    name: "Dr. Krishna Iyer",
    specialization: "Ayurveda Practitioner",
    experience: "18 years",
    location: "Kochi, Kerala",
    rating: 4.9,
    reviewsCount: 342,
    nextAvailable: "Today, 9:00 AM",
    price: "₹500",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Krishna",
    imageAlt: "Dr. Krishna Iyer",
    hasVideoConsult: false,
  },
  {
    id: "doc-20",
    type: "Doctor",
    name: "Dr. Parvathy Menon",
    specialization: "Ayurveda Practitioner",
    experience: "14 years",
    location: "Trivandrum, Kerala",
    rating: 4.8,
    reviewsCount: 276,
    nextAvailable: "Tomorrow, 8:00 AM",
    price: "₹550",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Parvathy",
    imageAlt: "Dr. Parvathy Menon",
    hasVideoConsult: true,
  },
];

// ============================================
// HOSPITAL DATA
// ============================================

export const HOSPITALS: HospitalData[] = [
  {
    id: "hosp-1",
    type: "Hospital",
    name: "Apollo Hospital",
    category: "Multi-Specialty Hospital",
    address: "Greams Road, Chennai, Tamil Nadu",
    distance: "2.3 km",
    rating: 4.8,
    reviewsCount: 542,
    specialties: ["Cardiology", "Neurology", "Orthopedics", "Oncology"],
    isOpen24x7: true,
    hasEmergency: true,
    imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=Apollo",
  },
  {
    id: "hosp-2",
    type: "Hospital",
    name: "Aster Medcity",
    category: "Multi-Specialty Hospital",
    address: "Kuttisahib Road, Kochi, Kerala",
    distance: "3.5 km",
    rating: 4.7,
    reviewsCount: 423,
    specialties: ["Cardiology", "Gastroenterology", "Nephrology"],
    isOpen24x7: true,
    hasEmergency: true,
    imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=Aster",
  },
  {
    id: "hosp-3",
    type: "Hospital",
    name: "Ahalia Clinic",
    category: "Clinic",
    address: "Palayam, Trivandrum, Kerala",
    distance: "1.8 km",
    rating: 4.5,
    reviewsCount: 187,
    specialties: ["General Medicine", "Pediatrics"],
    isOpen24x7: false,
    hasEmergency: false,
    imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=Ahalia",
  },
  {
    id: "hosp-4",
    type: "Hospital",
    name: "KIMS Hospital",
    category: "Multi-Specialty Hospital",
    address: "Anayara, Trivandrum, Kerala",
    distance: "4.2 km",
    rating: 4.9,
    reviewsCount: 678,
    specialties: ["Cardiology", "Neurology", "Orthopedics", "Oncology", "Nephrology"],
    isOpen24x7: true,
    hasEmergency: true,
    imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=KIMS",
  },
  {
    id: "hosp-5",
    type: "Hospital",
    name: "Sunrise Clinic",
    category: "Clinic",
    address: "MG Road, Ernakulam, Kerala",
    distance: "0.9 km",
    rating: 4.6,
    reviewsCount: 234,
    specialties: ["General Medicine", "Dermatology", "ENT"],
    isOpen24x7: false,
    hasEmergency: false,
    imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=Sunrise",
  },
  // Dental Clinics
  {
    id: "hosp-6",
    type: "Hospital",
    name: "Smile Dental Care",
    category: "Dental Clinic",
    address: "Marine Drive, Kochi, Kerala",
    distance: "1.2 km",
    rating: 4.7,
    reviewsCount: 298,
    specialties: ["Dentistry", "Orthodontics", "Cosmetic Dentistry"],
    isOpen24x7: false,
    hasEmergency: false,
    imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=SmileDental",
  },
  // Women's Health Hospitals
  {
    id: "hosp-7",
    type: "Hospital",
    name: "Mother Care Hospital",
    category: "Women & Child Hospital",
    address: "Pattom, Trivandrum, Kerala",
    distance: "2.8 km",
    rating: 4.9,
    reviewsCount: 456,
    specialties: ["Gynecology", "Obstetrics", "Pediatrics", "Neonatology"],
    isOpen24x7: true,
    hasEmergency: true,
    imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=MotherCare",
  },
  // Skin Care Clinics
  {
    id: "hosp-8",
    type: "Hospital",
    name: "Derma Care Clinic",
    category: "Dermatology Clinic",
    address: "Vytilla, Kochi, Kerala",
    distance: "1.5 km",
    rating: 4.6,
    reviewsCount: 187,
    specialties: ["Dermatology", "Cosmetology", "Hair Treatment"],
    isOpen24x7: false,
    hasEmergency: false,
    imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=DermaCare",
  },
  // Homeopathy Clinics
  {
    id: "hosp-9",
    type: "Hospital",
    name: "Healing Homeopathy Center",
    category: "Homeopathy Clinic",
    address: "Vazhuthacaud, Trivandrum, Kerala",
    distance: "2.1 km",
    rating: 4.5,
    reviewsCount: 143,
    specialties: ["Homeopathy", "Alternative Medicine"],
    isOpen24x7: false,
    hasEmergency: false,
    imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=Healing",
  },
  // Ayurveda Centers
  {
    id: "hosp-10",
    type: "Hospital",
    name: "Kerala Ayurveda Center",
    category: "Ayurveda Hospital",
    address: "Kaloor, Kochi, Kerala",
    distance: "3.2 km",
    rating: 4.8,
    reviewsCount: 389,
    specialties: ["Ayurveda", "Panchakarma", "Traditional Medicine"],
    isOpen24x7: false,
    hasEmergency: false,
    imageUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=KeralaAyurveda",
  },
];

// ============================================
// SYMPTOM DATA
// ============================================

export const SYMPTOMS: SymptomData[] = [
  {
    id: "sym-1",
    type: "Symptom",
    name: "Chest Pain",
    description: "Pain or discomfort in the chest area",
    relatedSpecialties: ["Cardiology", "Emergency Medicine"],
    severity: "severe",
    icon: Heart,
  },
  {
    id: "sym-2",
    type: "Symptom",
    name: "Headache",
    description: "Pain in the head or upper neck",
    relatedSpecialties: ["Neurology", "General Medicine"],
    severity: "moderate",
    icon: Brain,
  },
  {
    id: "sym-3",
    type: "Symptom",
    name: "Fever",
    description: "Elevated body temperature above normal",
    relatedSpecialties: ["General Medicine", "Infectious Disease"],
    severity: "moderate",
    icon: Thermometer,
  },
  {
    id: "sym-4",
    type: "Symptom",
    name: "Breathing Difficulty",
    description: "Shortness of breath or labored breathing",
    relatedSpecialties: ["Pulmonology", "Cardiology", "Emergency Medicine"],
    severity: "severe",
    icon: Activity,
  },
  {
    id: "sym-5",
    type: "Symptom",
    name: "Joint Pain",
    description: "Pain, stiffness, or swelling in joints",
    relatedSpecialties: ["Orthopedics", "Rheumatology"],
    severity: "moderate",
    icon: Bone,
  },
  {
    id: "sym-6",
    type: "Symptom",
    name: "Blurred Vision",
    description: "Loss of sharpness in eyesight",
    relatedSpecialties: ["Ophthalmology"],
    severity: "moderate",
    icon: Eye,
  },
  // Dental Symptoms
  {
    id: "sym-7",
    type: "Symptom",
    name: "Toothache",
    description: "Pain in or around a tooth",
    relatedSpecialties: ["Dentist"],
    severity: "moderate",
    icon: Smile,
  },
  // Skin Symptoms
  {
    id: "sym-8",
    type: "Symptom",
    name: "Skin Rash",
    description: "Red, itchy, or irritated skin",
    relatedSpecialties: ["Dermatologist", "General Physician"],
    severity: "mild",
    icon: Activity,
  },
  {
    id: "sym-9",
    type: "Symptom",
    name: "Acne",
    description: "Pimples and blemishes on skin",
    relatedSpecialties: ["Dermatologist"],
    severity: "mild",
    icon: Activity,
  },
  // ENT Symptoms
  {
    id: "sym-10",
    type: "Symptom",
    name: "Ear Pain",
    description: "Pain or discomfort in the ear",
    relatedSpecialties: ["ENT Specialist", "General Physician"],
    severity: "moderate",
    icon: Ear,
  },
  {
    id: "sym-11",
    type: "Symptom",
    name: "Sore Throat",
    description: "Pain, irritation, or scratchiness in throat",
    relatedSpecialties: ["ENT Specialist", "General Physician"],
    severity: "mild",
    icon: Thermometer,
  },
  // General Symptoms
  {
    id: "sym-12",
    type: "Symptom",
    name: "Cough",
    description: "Persistent or severe coughing",
    relatedSpecialties: ["General Physician", "Pulmonology"],
    severity: "moderate",
    icon: Activity,
  },
  // Women's Health Symptoms
  {
    id: "sym-13",
    type: "Symptom",
    name: "Abdominal Pain (Women)",
    description: "Pain in lower abdomen or pelvic area",
    relatedSpecialties: ["Gynecologist", "General Physician"],
    severity: "moderate",
    icon: User,
  },
];

// ============================================
// PROCEDURE DATA
// ============================================

export const PROCEDURES: ProcedureData[] = [
  {
    id: "proc-1",
    type: "Procedure",
    name: "Angioplasty",
    description: "Opening blocked or narrowed coronary arteries",
    specialty: "Cardiology",
    duration: "1-2 hours",
    recoveryTime: "1-2 days",
    icon: Heart,
  },
  {
    id: "proc-2",
    type: "Procedure",
    name: "MRI Scan",
    description: "Magnetic resonance imaging for detailed body scans",
    specialty: "Radiology",
    duration: "30-60 minutes",
    recoveryTime: "Immediate",
    icon: Activity,
  },
  {
    id: "proc-3",
    type: "Procedure",
    name: "Blood Test",
    description: "Laboratory analysis of blood samples",
    specialty: "Pathology",
    duration: "10-15 minutes",
    recoveryTime: "Immediate",
    icon: Syringe,
  },
  {
    id: "proc-4",
    type: "Procedure",
    name: "ECG/EKG",
    description: "Electrocardiogram to check heart rhythm",
    specialty: "Cardiology",
    duration: "10 minutes",
    recoveryTime: "Immediate",
    icon: Heart,
  },
  {
    id: "proc-5",
    type: "Procedure",
    name: "Knee Replacement",
    description: "Surgical replacement of damaged knee joint",
    specialty: "Orthopedics",
    duration: "2-3 hours",
    recoveryTime: "6-12 weeks",
    icon: Bone,
  },
  {
    id: "proc-6",
    type: "Procedure",
    name: "Vaccination",
    description: "Immunization shots for disease prevention",
    specialty: "General Medicine",
    duration: "5-10 minutes",
    recoveryTime: "Immediate",
    icon: Shield,
  },
  {
    id: "proc-7",
    type: "Procedure",
    name: "Endoscopy",
    description: "Internal examination using an endoscope",
    specialty: "Gastroenterology",
    duration: "15-30 minutes",
    recoveryTime: "1-2 hours",
    icon: Activity,
  },
  // Dental Procedures
  {
    id: "proc-8",
    type: "Procedure",
    name: "Dental Cleaning",
    description: "Professional teeth cleaning and scaling",
    specialty: "Dentist",
    duration: "30-45 minutes",
    recoveryTime: "Immediate",
    icon: Smile,
  },
  {
    id: "proc-9",
    type: "Procedure",
    name: "Root Canal",
    description: "Treatment to repair and save damaged tooth",
    specialty: "Dentist",
    duration: "1-2 hours",
    recoveryTime: "1-2 days",
    icon: Smile,
  },
  // Dermatology Procedures
  {
    id: "proc-10",
    type: "Procedure",
    name: "Skin Biopsy",
    description: "Sample of skin tissue for examination",
    specialty: "Dermatologist",
    duration: "15-30 minutes",
    recoveryTime: "3-7 days",
    icon: Activity,
  },
  {
    id: "proc-11",
    type: "Procedure",
    name: "Acne Treatment",
    description: "Professional acne removal and treatment",
    specialty: "Dermatologist",
    duration: "30-60 minutes",
    recoveryTime: "1-2 days",
    icon: Activity,
  },
  // Women's Health Procedures
  {
    id: "proc-12",
    type: "Procedure",
    name: "Ultrasound Scan",
    description: "Prenatal or gynecological ultrasound imaging",
    specialty: "Gynecologist",
    duration: "20-30 minutes",
    recoveryTime: "Immediate",
    icon: User,
  },
  {
    id: "proc-13",
    type: "Procedure",
    name: "Pap Smear",
    description: "Cervical cancer screening test",
    specialty: "Gynecologist",
    duration: "10-15 minutes",
    recoveryTime: "Immediate",
    icon: User,
  },
  // Ayurveda Procedures  
  {
    id: "proc-14",
    type: "Procedure",
    name: "Panchakarma",
    description: "Traditional Ayurvedic detoxification therapy",
    specialty: "Ayurveda",
    duration: "1-2 weeks",
    recoveryTime: "1-2 weeks",
    icon: Sparkles,
  },
  {
    id: "proc-15",
    type: "Procedure",
    name: "Abhyanga Massage",
    description: "Ayurvedic oil massage therapy",
    specialty: "Ayurveda",
    duration: "45-60 minutes",
    recoveryTime: "Immediate",
    icon: Sparkles,
  },
];

// ============================================
// COMBINED SEARCH DATA
// ============================================

export const ALL_SEARCH_RESULTS: SearchResultType[] = [
  ...SPECIALTIES,
  ...DOCTORS,
  ...HOSPITALS,
  ...SYMPTOMS,
  ...PROCEDURES,
];
