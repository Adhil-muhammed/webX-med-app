<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Search Results</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#008080",
                        "secondary": "#FF9933",
                        "background-light": "#F8F9FA",
                        "background-dark": "#102216",
                        "text-light": "#333333",
                        "text-dark": "#E0E0E0",
                        "card-light": "#FFFFFF",
                        "card-dark": "#1A2E25",
                        "chip-light": "#E0F2F1",
                        "chip-dark": "#26403C"
                    },
                    fontFamily: {
                        "display": ["Lexend", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.5rem",
                        "lg": "0.75rem",
                        "xl": "1rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="font-display bg-background-light dark:bg-background-dark">
<div class="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<!-- Top App Bar -->
<div class="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
<div class="flex items-center p-4 pb-2 justify-between">
<button class="text-text-light dark:text-text-dark flex size-10 shrink-0 items-center justify-center">
<span class="material-symbols-outlined text-2xl">arrow_back</span>
</button>
<h2 class="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Doctors near you</h2>
<div class="flex size-10 shrink-0 items-center"></div> <!-- Spacer -->
</div>
<!-- Search Bar -->
<div class="px-4 py-2">
<label class="flex flex-col min-w-40 h-12 w-full">
<div class="flex w-full flex-1 items-stretch rounded-lg h-full">
<div class="text-primary flex border-none bg-card-light dark:bg-card-dark items-center justify-center pl-4 rounded-l-lg border-r-0">
<span class="material-symbols-outlined">search</span>
</div>
<input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 border-none bg-card-light dark:bg-card-dark focus:border-none h-full placeholder:text-text-light/50 dark:placeholder:text-text-dark/50 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Search doctors, clinics, symptoms" value="Ayurveda"/>
</div>
</label>
</div>
<!-- Chips -->
<div class="flex gap-3 px-4 pt-1 pb-3 overflow-x-auto whitespace-nowrap">
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-chip-light dark:bg-chip-dark px-4">
<p class="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Sort by Distance</p>
<span class="material-symbols-outlined text-base text-text-light dark:text-text-dark">arrow_drop_down</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-4">
<p class="text-white text-sm font-medium leading-normal">Ayurveda</p>
<span class="material-symbols-outlined text-base text-white">close</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-chip-light dark:bg-chip-dark px-4">
<p class="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Available Today</p>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-chip-light dark:bg-chip-dark px-4">
<p class="text-text-light dark:text-text-dark text-sm font-medium leading-normal">Clinics Only</p>
</button>
</div>
<div class="border-b border-gray-200 dark:border-gray-700"></div>
</div>
<!-- Results List -->
<div class="flex flex-col gap-4 p-4 pb-24">
<!-- Provider Card 1 -->
<div class="flex flex-col gap-4 rounded-xl bg-card-light dark:bg-card-dark p-4 shadow-sm">
<div class="flex items-start justify-between gap-4">
<div class="flex flex-1 flex-col gap-1">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-sm text-yellow-500">star</span>
<p class="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">4.8 (120 reviews)</p>
</div>
<p class="text-text-light dark:text-text-dark text-base font-bold leading-tight">Dr. Anitha Varma, MBBS, MD</p>
<p class="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">General Physician, 15+ years experience</p>
<p class="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">Ahalia Clinic, Palayam • 2.5 km away</p>
</div>
<img class="size-20 shrink-0 rounded-full object-cover" data-alt="Portrait of Dr. Anitha Varma" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZGiErtJBPsDJvOJuWsoVshO2qW29wm_b34YtZ0Tx5gzqo5ULnInr1WcTMHmpqgUg95jPcRd4qNXlg0rdQ7oYAtDXV17EW0D-HqkqszCQOAy2jXPueRxVPfQbOhXzo_o261eSbNNWjVOgfJbfm411rwggHEZUutmJNDXFtTy0ENKVpSyiHyHj4_Tq79WfrMbRm6pWs9mvBf4ajxKMlXyDQivC4BDsU39fb3gSjwxBLSHFCgYJU1JeDkyiqxY3EVNG-Fbh2ONQnAKNR"/>
</div>
<div class="border-t border-dashed border-gray-200 dark:border-gray-700"></div>
<div class="flex items-center justify-between gap-2">
<div class="flex flex-col">
<p class="text-secondary text-sm font-medium">Next available: Today, 4:30 PM</p>
<p class="text-text-light/70 dark:text-text-dark/70 text-sm">₹400 Consultation Fee</p>
</div>
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal">
<span class="truncate">Book Now</span>
</button>
</div>
</div>
<!-- Provider Card 2 -->
<div class="flex flex-col gap-4 rounded-xl bg-card-light dark:bg-card-dark p-4 shadow-sm">
<div class="flex items-start justify-between gap-4">
<div class="flex flex-1 flex-col gap-1">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-sm text-yellow-500">star</span>
<p class="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">4.5 (88 reviews)</p>
</div>
<p class="text-text-light dark:text-text-dark text-base font-bold leading-tight">AyurCare Ayurveda Center</p>
<p class="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">Ayurveda Clinic, Est. 2005</p>
<p class="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">Kowdiar, Trivandrum • 5.1 km away</p>
</div>
<img class="w-20 aspect-square shrink-0 rounded-lg object-cover" data-alt="Image of AyurCare Ayurveda Center entrance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxo0oJ-c9z29UkcZaqMAFqkQhZCUoF69MZ8CxKO9G7Wh8x4KYmm8dAJiPxSCOo77Z9t30WFhcFGuWyoq4ev6NvhQBhQTVM-b_ceIWtaM_rva8A7ZM781S-35qZiQn3M8Tn73oO4cBZ9LIo1tbkSJ_zi8fc-MuSF8UPE8LTcY-UcZuagxRuV5ORMb-ciOpVYpn7nNxmAr_-3qK88HGRbR497p3K06E0f2hoJXPm6MmFx0sjK5WegfbpQESFuV7sTb1kpGs4LabH_f2F"/>
</div>
<div class="border-t border-dashed border-gray-200 dark:border-gray-700"></div>
<div class="flex items-center justify-between gap-2">
<div class="flex flex-col">
<p class="text-secondary text-sm font-medium">Next available: Tomorrow, 10:00 AM</p>
<p class="text-text-light/70 dark:text-text-dark/70 text-sm">₹650 Consultation Fee</p>
</div>
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal">
<span class="truncate">Book Now</span>
</button>
</div>
</div>
<!-- Provider Card 3 -->
<div class="flex flex-col gap-4 rounded-xl bg-card-light dark:bg-card-dark p-4 shadow-sm">
<div class="flex items-start justify-between gap-4">
<div class="flex flex-1 flex-col gap-1">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-sm text-yellow-500">star</span>
<p class="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">4.9 (210 reviews)</p>
</div>
<p class="text-text-light dark:text-text-dark text-base font-bold leading-tight">Dr. Suresh Kumar, BAMS</p>
<p class="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">Ayurvedic Physician, 20+ years experience</p>
<p class="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal">Dhanwantari Ayurveda, Sasthamangalam • 3.2 km</p>
</div>
<img class="size-20 shrink-0 rounded-full object-cover" data-alt="Portrait of Dr. Suresh Kumar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXTNzstipxga3Z_nG7fuwmjZgS8GdLTr0WfOjr1vKRQyNUzzIiOHBnz5kJMiNAw4EIbvmxbsahbJivinKwoxlBjJtidPe4OmWNYkSMZZ93cTY-Sv2VGqKu3XsNXnMf5Edhr3NuHzMEEskXeGPYRjskcZ3JQND5mGgjEiEz6JlsrYTVkzdDuwFxm4S7RlXin2lVjRCf2qBkuiICVoktSI2tiLaO9jpjP5RUWUxiI3qSXV4J2BmkV_rP--pO-Wm3RZ_M87pb1hZXFp4w"/>
</div>
<div class="border-t border-dashed border-gray-200 dark:border-gray-700"></div>
<div class="flex items-center justify-between gap-2">
<div class="flex flex-col">
<p class="text-secondary text-sm font-medium">Next available: Today, 6:00 PM</p>
<p class="text-text-light/70 dark:text-text-dark/70 text-sm">₹500 Consultation Fee</p>
</div>
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal">
<span class="truncate">Book Now</span>
</button>
</div>
</div>
</div>
<!-- Floating Action Button for Map View -->
<div class="fixed bottom-6 right-6 z-20">
<button class="flex h-14 w-14 items-center justify-center gap-x-2 rounded-full bg-primary text-white shadow-lg">
<span class="material-symbols-outlined text-3xl">map</span>
</button>
</div>
</div>
</body></html>
