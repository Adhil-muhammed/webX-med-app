# DoctorProfilePage Component - Usage Guide

## Overview

The `DoctorProfilePage` component has been successfully created and integrated into your project. It's a fully functional React component that converts the provided HTML doctor/clinic profile into your project's design system.

## Key Changes Made

✅ **Component Created**: `/src/components/DoctorProfilePage.tsx`
✅ **Export Added**: Updated `/src/components/index.ts`
✅ **Demo Page Created**: `/src/pages/DoctorProfile.tsx`
✅ **Build Verified**: TypeScript compilation successful

## Component Features

- **Top App Bar**: Back button, doctor name, share button
- **Image Carousel**: Horizontal scrolling clinic images
- **Profile Header**: Avatar, credentials, experience, rating
- **Tab Navigation**: Sticky tabs (About, Services, Location, Reviews)
- **Content Sections**: About, Clinic Timings, Location, Patient Reviews
- **Sticky Footer**: Call and Book Appointment buttons
- **Dark Mode**: Full dark mode support
- **Responsive**: Mobile-first design

## Icon Conversion

Material Icons → lucide-react:
- `arrow_back_ios_new` → `ArrowLeft`
- `share` → `Share2`
- `star` → `Star` (filled variant)
- `call` → `Phone`

## Usage Example

```tsx
import { DoctorProfilePage } from "@/components";

function MyPage() {
  return (
    <DoctorProfilePage
      doctorName="Dr. Aarav Menon"
      credentials="MBBS, MD - Cardiology"
      experienceYears={15}
      rating={4.8}
      reviewsCount={234}
      avatarUrl="https://..."
      carouselImages={[
        { url: "https://...", alt: "Reception area" },
        { url: "https://...", alt: "Consultation room" },
      ]}
      about="Dr. Aarav Menon is a dedicated..."
      timings={[
        { day: "Monday - Friday", hours: "10:00 AM - 07:00 PM" },
        { day: "Saturday", hours: "10:00 AM - 02:00 PM" },
        { day: "Sunday", hours: "Closed", closed: true },
      ]}
      location={{
        address: "123 Health Street, Kochi, Kerala",
        mapImageUrl: "https://...",
        city: "Kochi, Kerala",
      }}
      reviews={[
        {
          name: "Anjali Nair",
          date: "2 days ago",
          rating: 5,
          comment: "Very patient and explained clearly!",
        },
      ]}
      onBackClick={() => navigate(-1)}
      onShareClick={() => handleShare()}
      onCallClick={() => window.location.href = "tel:+91..."}
      onBookClick={() => navigate("/book")}
    />
  );
}
```

## TypeScript Interfaces

```typescript
interface DoctorProfilePageProps {
  doctorName: string;
  credentials: string;
  experienceYears: number;
  rating: number;
  reviewsCount: number;
  avatarUrl: string;
  carouselImages: Array<{ url: string; alt: string }>;
  about: string;
  timings: Array<{ day: string; hours: string; closed?: boolean }>;
  location: { address: string; mapImageUrl: string; city?: string };
  reviews: Array<{ name: string; date: string; rating: number; comment: string }>;
  onBackClick?: () => void;
  onShareClick?: () => void;
  onCallClick?: () => void;
  onBookClick?: () => void;
  className?: string;
}
```

## Demo Page

A demo page with sample data is available at `/src/pages/DoctorProfile.tsx`. To view it:

1. Import and add a route in your router
2. Or temporarily replace content in an existing page

## Next Steps

1. **Integrate with Router**: Add the component to your routing system
2. **Connect to API**: Replace sample data with real doctor data
3. **Customize Styling**: Adjust colors/spacing if needed
4. **Add Functionality**: Implement actual call/share/book logic

## Standards Followed

✓ PascalCase naming convention
✓ Tailwind CSS utility classes
✓ lucide-react icons
✓ TypeScript interfaces
✓ Dark mode support
✓ Existing color theme (primary, background-light/dark, etc.)
✓ cn() utility for conditional classes
✓ Exported via index.ts
