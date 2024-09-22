import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkGreen: "#243831",
        lightGreen: "#2B5F44",
        success: "#49A569",
        bgp: "#BBC2C0",
        darkGrey: '#939494',
        lightGrey: '#BBC2C0',
        gold: '#C5A365',
      },
      gridTemplateRows: {
        signinGridRowSm: 'minmax(40dvh, 1fr) 1fr',
      }
    },
  },
  plugins: [],
};
export default config;
