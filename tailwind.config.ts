import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: ["class"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#1A1A1A",
      white: "#ffffff",
      dark: "#090D1F",
      lightGrey: "#667085",
      darkGrey: "#C0C5D0",
      lightPurple: "#6941C6",
      darkPurple: "#7F56D9",
      categoryRedText: "#FF0474", // Brighter red for category text
      categoryRedBg: "#FFDADA", // Slightly brighter background for category
      categoryBlueText: "#3538CD", // Brighter blue for category text
      categoryBlueBg: "#CDE7FF", // Slightly brighter background for category
      categoryGreenText: "#027A48", // Brighter green for category text
      categoryGreenBg: "#D8FFD8", // Slightly brighter background for category
      categoryYellowText: "#8B8000", // Brighter yellow for category text
      categoryYellowBg: "#FFF6ED", // Slightly brighter background for category
      categoryOrangeText: "#FF8C00", // Brighter orange for category text
      categoryOrangeBg: "#FFDDD6", // Slightly brighter background for category
      categoryPinkText: "#FF88B2", // Brighter pink for category text
      categoryPinkBg: "#FFC6DE", // Slightly brighter background for category
      categoryCyanText: "#008B8B", // Brighter cyan for category text
      categoryCyanBg: "#D6FFFF",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        md: "2rem",
        lg: "2rem",
      },
    },
    screens: {
      sm: "360px",

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
} satisfies Config;
