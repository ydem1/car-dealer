import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          base: "#212121",
        },
        white: {
          base: "#ffff",
          blue: "#F0F8FF",
        },
        gray: {
          base: "#636463",
        },
      },
      maxWidth: {
        200: "800px",
        360: "1440px",
      },
      screens: {
        xs: "450px",
        md: "720px",
      },
    },
  },
  plugins: [],
};
export default config;
