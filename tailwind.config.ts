export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // "sans" is the default font Tailwind uses everywhere.
        // We set it to Inter so your paragraphs/buttons are super readable.
        sans: ["Inter", "sans-serif"],

        // "display" is your custom font for big titles.
        display: ["Lexend", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#2A9D8F",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#E9C46A",
          foreground: "#343A40",
        },
        "background-light": "#F8F9FA",
        "background-dark": "#102216",
        "text-primary-light": "#343A40",
        "text-primary-dark": "#F8F9FA",
        "text-secondary-light": "#6c757d",
        "text-secondary-dark": "#adb5bd",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
