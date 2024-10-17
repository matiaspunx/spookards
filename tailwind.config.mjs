/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        marker: ['"Marker"', ...defaultTheme.fontFamily.sans],
        marker2: ['"Marker2"', ...defaultTheme.fontFamily.sans],
        emojis: ['"Emojis"', ...defaultTheme.fontFamily.sans],
        mona: ['"Mona"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
