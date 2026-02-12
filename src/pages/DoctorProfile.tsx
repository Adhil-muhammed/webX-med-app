import { DoctorProfilePage } from "@/components";

// Sample data matching the original HTML
const sampleDoctorData = {
  doctorName: "Dr. Aarav Menon",
  credentials: "MBBS, MD - Cardiology",
  experienceYears: 15,
  rating: 4.8,
  reviewsCount: 234,
  avatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDy_VW3l7Kles8hMhw4dep9_xR5jUDubM6y9xh_9FG7R8kCNV2ox3lzA9Dq64-OAL0zEQI-Pz0wIrNUB23WhNUnmsT7DT4Kk3CBQnmYBO8TbO5OblO4r4HvwZzwYZUCWd3S5nPQ5iSRhBczQ6fWHCWDESGvNrmIlLxgX93TXMYxkANfyIVmkfq0j4UaKP-jNHw6dpdrzs1C-fsWc_oD1nsTE7VeGCPi6jy-b39dBv-cmLZer1IW27BXjXDWrCJdCq-2AJ6UWRgVBcbh",
  carouselImages: [
    {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_l-3tlh6r52IhAN6JcNj9sE0cUQAGRgD0TKknJjNiRKJ-EyLMNrT_PrVezln8LpIE1CTOXmHqu6oon9Xgl0UKMXFKxPzwdG9j7e7sdlUBDeSc5o8cNAFoY7bZofVXMJX6938vNUmDvzzW_6-gWLQ80Zqj67tzNJ7KvgM_0XqMG8_P9fyUfexb5xJLyDPvScifdEnRsarO_LUFKOsGg9vIUh6BUSsOhYWMOjOSHFYdnk0OuLrXADOczFujeplRNK8JvAnVM6e8QOMB",
      alt: "Photo of the clinic's reception area",
    },
    {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgmfjxj90uJ8FMJWstHqpZCC0HpuNcSDqbTfXWbf1wkUS4IC9Vdd_zEqbQUfEIxh8tgVHWjim4oZMNO2akJMgG-Abl5ohwBvIWoBMUANs_PzGtv0De7c03XHVjGTdK5HTfedM1xqGAyJhmiA1pr2ie_dkDuiq_l6TKOgIGQVFTbDFo-DMsiK0ehilqtC2QYquu2GfCqT20EniSkH2RDXGlyiZdz8z3QkJusCYLQ0d-HTbc7gIV6F3dRSDMaOFqHE4MOZsrdrihe0LL",
      alt: "Photo of a modern consultation room",
    },
    {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwQR7MK5YIFmt58t06BetECfsacnYd9Jy5UJjmyeqABzr_5W1NCnEtmQSKwWdse__0DnFMpq6bQhZ5HgJkH5-7ZVogMR_Cgj9KiS38KSDedNMlti7g1rSFSraRC926q_M_lShGnJjPKrRA5sYEoQl_MgVZSe2DXm25ZJlLmKovQsABAHgiNFBuu5bs0cpP6Plm9-9HcJpJ7buOqmsf0Fjy7N3x9vT4emBteUmqlSbDJKYwiGar-lo7aTe4l1ZEvRudEMoZwIlf1-tU",
      alt: "Photo of the clinic's exterior",
    },
  ],
  about:
    "Dr. Aarav Menon is a dedicated and experienced cardiologist based in Kochi, with a focus on providing comprehensive cardiac care. He is a member of the Indian Medical Association and is committed to patient-first healthcare. With over 15 years of practice, he specializes in interventional cardiology and preventive heart care.",
  timings: [
    { day: "Monday - Friday", hours: "10:00 AM - 07:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 02:00 PM" },
    { day: "Sunday", hours: "Closed", closed: true },
  ],
  location: {
    address: "123 Health Street, Panampilly Nagar, Kochi, Kerala 682036",
    mapImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdBorS-blpVTA70mnzi58_pLhcK5lQXld3SdLREo4L8px6h7WjSZ7Zqm8yA8Emypt0CST3YyO9J-zK8MFViY8NdOii7b2m5bL3WzgJPk6NANEPOE6veYGYT7EAbi90rkzfwsH-m-dvJntV1qSpwZLRqeOgb5riloNR1M5lNUyj9VbD1Kge9osA2pOHZqKexaMazYkvZq3JhWpWTTHRbJwKrggxw21eTqoyMcSmAZY8M0fvsGMz2K3KWfiepOTKqm_iS4fGB40opxPM",
    city: "Kochi, Kerala",
  },
  reviews: [
    {
      name: "Anjali Nair",
      date: "2 days ago",
      rating: 5,
      comment:
        "Dr. Menon was very patient and explained my condition clearly. The clinic staff was also very helpful. Highly recommended!",
    },
    {
      name: "Rohan Thomas",
      date: "1 week ago",
      rating: 4,
      comment:
        "Good experience overall. The waiting time was a bit long, but the consultation was thorough.",
    },
  ],
};

export const DoctorProfile = () => {
  return (
    <DoctorProfilePage
      {...sampleDoctorData}
      onBackClick={() => console.log("Back clicked")}
      onShareClick={() => console.log("Share clicked")}
      onCallClick={() => console.log("Call clicked")}
      onBookClick={() => console.log("Book appointment clicked")}
    />
  );
};
