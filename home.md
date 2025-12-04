<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Home Screen</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#2A9D8F",
              "secondary": "#E9C46A",
              "background-light": "#F8F9FA",
              "background-dark": "#102216",
              "text-primary-light": "#343A40",
              "text-primary-dark": "#F8F9FA",
              "text-secondary-light": "#6c757d",
              "text-secondary-dark": "#adb5bd"
            },
            fontFamily: {
              "display": ["Lexend", "sans-serif"]
            },
            borderRadius: {"DEFAULT": "0.5rem", "lg": "0.75rem", "xl": "1rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            font-size: 24px;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="font-display">
<div class="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
<!-- Top App Bar -->
<header class="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-3xl">location_on</span>
<h2 class="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1">Kochi, Kerala</h2>
</div>
<div class="flex w-12 items-center justify-end">
<button class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-text-primary-light dark:text-text-primary-dark gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
<span class="material-symbols-outlined">notifications</span>
</button>
</div>
</header>
<!-- Search Bar -->
<div class="px-4 py-3">
<label class="flex flex-col min-w-40 h-12 w-full">
<div class="flex w-full flex-1 items-stretch rounded-lg h-full">
<div class="text-text-secondary-light dark:text-text-secondary-dark flex border-none bg-white dark:bg-text-primary-light/10 items-center justify-center pl-4 rounded-l-lg border-r-0">
<span class="material-symbols-outlined">search</span>
</div>
<input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-text-primary-light dark:text-text-primary-dark focus:outline-0 focus:ring-0 border-none bg-white dark:bg-text-primary-light/10 focus:border-none h-full placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark px-4 pl-2 text-base font-normal leading-normal" placeholder="Search doctors, clinics, labs..." value=""/>
</div>
</label>
</div>
<!-- Quick Categories -->
<section class="flex flex-col">
<h3 class="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Quick Categories</h3>
<div class="flex gap-3 px-4 py-3 overflow-x-auto">
<div class="flex flex-col items-center justify-center gap-y-2 shrink-0 w-20">
<div class="flex size-16 items-center justify-center rounded-xl bg-primary/10">
<span class="material-symbols-outlined text-primary text-3xl">dentistry</span>
</div>
<p class="text-text-primary-light dark:text-text-primary-dark text-sm font-medium leading-normal">Dentist</p>
</div>
<div class="flex flex-col items-center justify-center gap-y-2 shrink-0 w-20">
<div class="flex size-16 items-center justify-center rounded-xl bg-secondary/10">
<span class="material-symbols-outlined text-secondary text-3xl">spa</span>
</div>
<p class="text-text-primary-light dark:text-text-primary-dark text-sm font-medium leading-normal">Ayurveda</p>
</div>
<div class="flex flex-col items-center justify-center gap-y-2 shrink-0 w-20">
<div class="flex size-16 items-center justify-center rounded-xl bg-primary/10">
<span class="material-symbols-outlined text-primary text-3xl">biotech</span>
</div>
<p class="text-text-primary-light dark:text-text-primary-dark text-sm font-medium leading-normal">Lab</p>
</div>
<div class="flex flex-col items-center justify-center gap-y-2 shrink-0 w-20">
<div class="flex size-16 items-center justify-center rounded-xl bg-primary/10">
<span class="material-symbols-outlined text-primary text-3xl">stethoscope</span>
</div>
<p class="text-text-primary-light dark:text-text-primary-dark text-sm font-medium leading-normal">Physician</p>
</div>
</div>
</section>
<!-- Promotional Banner -->
<div class="@container px-4 py-3">
<div class="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-[180px] p-6 relative" data-alt="Promotional banner for a launch offer showing a vibrant abstract green and yellow gradient." style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAO8F-zCsBz7r7noFw0nTlYgSYRiRFQwsDBRkh4k_Hte3hTQIz9pRReCVaTAF1TA2dSgjEbANHeQMo2xNAIq6zW0yrcasKtLxKXcf5b3F6t0O2D4UHW0ut7rEsD0PwGkhpbHOn515h1lCbS2uRGz5TgB2zS4gzHGRAj71Rs43FLkWqsO7jFKpxycT8sOmA3CxaTaaj4MY9hsyAUeJfatAvRwjcJj50UMA6gVSeOE8Je4jDM--yFfefDFFOAcrnJO1RWZ6Nk9CHgqsM3");'>
<div class="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 rounded-xl"></div>
<div class="relative z-10">
<h4 class="text-white text-xs font-semibold uppercase tracking-widest">Launch Offer</h4>
<p class="text-white text-2xl font-bold leading-tight mt-1">Flat 50% Off</p>
<p class="text-white text-lg font-medium leading-tight">Your First Consultation</p>
</div>
</div>
</div>
<!-- Book an Appointment Section -->
<section class="flex flex-col pt-4">
<h3 class="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Book an Appointment</h3>
<div class="flex flex-col gap-4 px-4 pb-24">
<!-- Doctor Card 1 -->
<div class="flex w-full items-center gap-4 rounded-xl bg-white dark:bg-text-primary-light/10 p-3">
<img class="size-20 shrink-0 rounded-lg object-cover" data-alt="A portrait of Dr. Anjali Varma, a smiling female doctor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzJ5xCIlZJ3BZf9da5AcLPer2VN74BK0vm9HulMdagZKxIuasqWuQlyukaEbTzPP2KiIXp7pU1TSGMzfx2LEQmwqKBZGx2ZQe7o2TVUQjyDFttrX-mztvy9hHxzNcK6FNKnZVGim4n1qRT3bl0inUTRV5w8Quqagce4SNnRMAEpXR69W1Z6l2dk5wFJV0tRY-LIU2ZEVXhTQNrSVDZgH4DcfMP656NPubVASXC18af88FicpsJTkEnIoK849hZxr6ocW2UBk4g6zHF"/>
<div class="flex flex-col flex-1 gap-1">
<h4 class="font-bold text-text-primary-light dark:text-text-primary-dark">Dr. Anjali Varma</h4>
<p class="text-sm text-text-secondary-light dark:text-text-secondary-dark">Cardiologist</p>
<p class="text-sm text-text-secondary-light dark:text-text-secondary-dark">Apollo Hospital, Kochi</p>
</div>
<button class="shrink-0 rounded-full bg-primary/20 px-4 py-2 text-sm font-bold text-primary">Book</button>
</div>
<!-- Doctor Card 2 -->
<div class="flex w-full items-center gap-4 rounded-xl bg-white dark:bg-text-primary-light/10 p-3">
<img class="size-20 shrink-0 rounded-lg object-cover" data-alt="A portrait of Dr. Rajeev Kumar, a professional male doctor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqjnjTU4a8Xl1hW5K-wyvJVqqzB7B5C-5PFvvYMWLhEL9-aV0acmgXwO-pWhGej8kNIvZzVpofLt0X2abnR6RFt1m17hRnfHEkJqd82BrPfCoSN6NOCSpsu09t86pX7iV16_xqR7K_JDbZsxT4QGyKKz-FWkcokYKNJdZcfaco3_rfL8hWBtboVxt0umMJ1OBuKJGGgAdh63GV1QsOMs3aF1_W_3T2JondS2QLt-9Z3fREHdxGPmrEN7p9rnI0hGyBbkIw2ixojQ4Z"/>
<div class="flex flex-col flex-1 gap-1">
<h4 class="font-bold text-text-primary-light dark:text-text-primary-dark">Dr. Rajeev Kumar</h4>
<p class="text-sm text-text-secondary-light dark:text-text-secondary-dark">Dentist</p>
<p class="text-sm text-text-secondary-light dark:text-text-secondary-dark">Aster Medcity, Kochi</p>
</div>
<button class="shrink-0 rounded-full bg-primary/20 px-4 py-2 text-sm font-bold text-primary">Book</button>
</div>
</div>
</section>
<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-0 left-0 right-0 flex h-20 w-full items-center justify-around border-t border-gray-200 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
<a class="flex flex-col items-center justify-center gap-1 text-primary" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1, 'wght' 700;">home</span>
<p class="text-xs font-bold">Home</p>
</a>
<a class="flex flex-col items-center justify-center gap-1 text-text-secondary-light dark:text-text-secondary-dark" href="#">
<span class="material-symbols-outlined">calendar_month</span>
<p class="text-xs font-medium">Appointments</p>
</a>
<a class="flex flex-col items-center justify-center gap-1 text-text-secondary-light dark:text-text-secondary-dark" href="#">
<span class="material-symbols-outlined">folder_shared</span>
<p class="text-xs font-medium">Records</p>
</a>
<a class="flex flex-col items-center justify-center gap-1 text-text-secondary-light dark:text-text-secondary-dark" href="#">
<span class="material-symbols-outlined">person</span>
<p class="text-xs font-medium">Profile</p>
</a>
</nav>
</div>
</body></html>
