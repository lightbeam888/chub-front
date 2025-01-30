import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

    },
    screens: {
      'xs': '390px',
      'sm': '414px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1320px',
      '3xl': '1440px',
      '4xl': '1600px',
      '5xl': '2000px'
    },
    fontFamily: {
      lufga: `'Lufga',sans-serif;`
    },
  },
  plugins: [],
} satisfies Config;
