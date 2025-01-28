import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#B4C6EE",
          400: "#417BFF",
          500: "#3371FF",
        },
        dark: {
          100: '#09111F',
          200: '#0B1527',
          300: '#0F1C34',
          350: '#12213B',
          400: '#27344D',
          500: '#2E3D5B',
          700: '#192132'
        },
      },
      screens: {
        "xs": "200px",
        "sm": "500px"
      }
    },
  },
  plugins: [],
} satisfies Config;
