import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "light",
      themes: {
        light: {
          layout: {
            hoverOpacity: 0.8,
          },
          colors: {
            focus: "#030107",
          },
        },
        dark: {
          layout: {
            hoverOpacity: 0.9,
          },
          colors: {
            focus: "#fefdf1",
          },
        },
      },
    }),
  ],
} satisfies Config;
