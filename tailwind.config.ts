import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      NotoSansJP: ["Noto Sans JP", '"Hiragino Kaku Gothic ProN"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
