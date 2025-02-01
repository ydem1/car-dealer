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
        },
        gray: {
          base: "#636463",
        },
      },
      maxWidth: {
        360: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
